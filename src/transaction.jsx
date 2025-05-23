import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FiArrowDownRight } from "react-icons/fi";

export default function TransitionSection({ lang = 'tr' }) {
    const [hovered, setHovered] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef(null);

    // Scroll progress for this specific section
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ["start end", "end start"]
    });

    // Transform values based on scroll position
    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const yText = useTransform(scrollYProgress, [0, 0.7], [100, 0]);
    const scale = useTransform(scrollYProgress, [0, 0.7], [0.8, 1]);

    // Metinler
    const texts = {
        title: { tr: 'Sıradaki işbirliği neden sizinle olmasın?', en: 'Why not the next collaboration with you?' },
        desc: { tr: 'Fikirlerinizi hayata geçirmek için modern ve kullanıcı dostu çözümler üretebiliriz.', en: 'We can produce modern and user-friendly solutions to bring your ideas to life.' }
    };

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY + window.innerHeight;
            const elementPosition = document.getElementById('transition-section')?.offsetTop;

            if (elementPosition && scrollPosition > elementPosition - 300) {
                setIsVisible(true);
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div
            ref={sectionRef}
            id="transition-section"
            className="w-full py-12 md:py-16 bg-[#E1E1E1] overflow-hidden fixed max-md:absolute z-10"
        >
            <div className="max-w-6xl mx-auto px-6 md:px-10">
                {/* Decorative elements */}
                <motion.div
                    style={{ opacity }}
                    className="absolute top-5 right-5 md:top-10 md:right-40  max-[1200px]:hidden  max-sm:block"
                >
                    <FiArrowDownRight className="text-4xl md:text-5xl text-[#3B3835] opacity-30" />
                </motion.div>

                <motion.div
                    style={{ opacity }}
                    className="absolute bottom-5 left-5 md:bottom-10 md:left-40 max-[1200px]:hidden  max-sm:block"
                >
                    <FiArrowDownRight className="text-4xl md:text-5xl text-[#3B3835] opacity-30" />
                </motion.div>

                {/* Main content */}
                <motion.div
                    style={{ scale }}
                    className="flex flex-col items-center justify-center text-center max-[1200px]:relative max-md:bottom-0  max-[1200px]:bottom-15 "
                >
                    <motion.h2
                        style={{ y: yText, opacity }}
                        className="text-3xl md:text-6xl font-bold text-[#3B3835] mb-6 md:mb-8 lg:text-2xl"
                    >
                        {texts.title[lang]}
                    </motion.h2>

                    <motion.p
                        style={{ y: yText, opacity, transition: { delay: 0.2 } }}
                        className="text-lg md:text-2xl text-[#3B3835] max-w-2xl mb-8 md:mb-12 lg:text-xl"
                    >
                        {texts.desc[lang]}
                    </motion.p>

                </motion.div>
            </div>
        </div>
    );
}