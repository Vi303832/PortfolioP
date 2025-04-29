import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function ParallaxSection() {
    // Ana container için ref
    const containerRef = useRef(null);

    // Kaydırma progress'ini takip et
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    // Parallax için farklı hızlarda hareket edecek değerler
    const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const textY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [1, 0.8, 0]);

    // Hakkımda metni
    const aboutText = "Frontend alanında uzmanlaşan bir geliştiriciyim. React, Next.js ve TailwindCSS gibi modern teknolojilerle kullanıcı deneyimi yüksek arayüzler geliştiriyorum. Aynı zamanda Node.js ve Express.js ile backend tarafında da üretken çözümler üretebiliyorum. Yazılım dünyasında öğrenmeye ve üretmeye tutkuyla bağlıyım. Şu anda kendimi geliştirerek sektörde sağlam bir yer edinmeyi hedefliyorum.";
    const words = aboutText.split(" ");

    return (
        <div className="relative h-screen overflow-hidden" ref={containerRef}>
            {/* Parallax arka plan */}
            <motion.div
                className="absolute inset-0 bg-a"
                style={{ y: backgroundY }}
            />

            {/* İçerik katmanı */}
            <div className="absolute inset-0 flex items-center justify-center">
                <motion.div
                    className="w-[90%] max-w-4xl"
                    style={{ y: textY, opacity }}
                >
                    <h2 className="text-3xl text-beyaz mb-8">Hakkımda</h2>

                    <div className="text-4xl max-md:text-2xl text-beyaz">
                        {words.map((word, index) => (
                            <motion.span
                                key={index}
                                className="inline-block mr-2 my-1"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                transition={{ delay: index * 0.01, duration: 0.5 }}
                            >
                                {word}
                            </motion.span>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Sonraki bölüme geçiş */}
            <motion.div
                className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black to-transparent"
                style={{ opacity: useTransform(scrollYProgress, [0, 0.8], [0, 1]) }}
            />
        </div>
    );
}

export default ParallaxSection;