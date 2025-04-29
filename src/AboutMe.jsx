import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function AboutMeSection() {
    const ref = useRef(null);

    // Parallax efekt için scroll değerlerini takip edelim
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Farklı elemanlar için farklı dönüşüm değerleri
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -200]); // Yavaş yukarı hareket
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]); // Daha yavaş yukarı hareket
    const y3 = useTransform(scrollYProgress, [0, 1], [0, 50]);   // Aşağı hareket
    const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 1, 0.3]);

    const aboutText = "Frontend alanında uzmanlaşan bir geliştiriciyim. React, Next.js ve TailwindCSS gibi modern teknolojilerle kullanıcı deneyimi yüksek arayüzler geliştiriyorum. Aynı zamanda Node.js ve Express.js ile backend tarafında da üretken çözümler üretebiliyorum. Yazılım dünyasında öğrenmeye ve tutkuyla bağlıyım. Şu anda kendimi geliştirerek sektörde sağlam bir yer edinmeyi hedefliyorum.";
    const words = aboutText.split(" ");

    return (
        <div className="h-screen relative flex justify-center flex-col items-center bg-a max-lg:h-[120vh] rounded-t-4xl" ref={ref}>
            {/* Parallax arkaplan elemanı */}
            <motion.div
                className="absolute inset-0 bg-gradient-to-b from-a to-b/50 opacity-40"
                style={{ y: y3 }}
            />

            <motion.div
                className="flex flex-col w-[90%] h-[70%] gap-10 relative z-10"
                style={{ y: y1 }}
            >
                <motion.div
                    className="text-3xl text-beyaz"
                    style={{ y: y2, opacity }}
                >
                    Hakkımda
                </motion.div>

                <div className="text-5xl max-md:text-2xl">
                    {words.map((word, index) => {
                        // Her kelime için daha geniş bir scroll aralığı ve daha yumuşak geçiş
                        const wordOpacity = useTransform(
                            scrollYProgress,
                            [
                                0.3 + (index / words.length * 0.6),  // Başlangıç pozisyonu
                                0.4 + (index / words.length * 0.6)   // Bitiş pozisyonu
                            ],
                            [0.1, 1]  // Tamamen görünmezden tamamen görünüre
                        );

                        // Her kelime için farklı Y hareketi
                        const wordY = useTransform(
                            scrollYProgress,
                            [0, 1],
                            [20 + index * 0.5, -20 - index * 0.5]
                        );

                        return (
                            <motion.span
                                key={index}
                                style={{ opacity: wordOpacity, y: wordY }}
                                className="inline-block mr-2 my-1 whitespace-nowrap"
                            >
                                {word}
                            </motion.span>
                        );
                    })}
                </div>
            </motion.div>

            <motion.div
                className="h-2 w-[90%] absolute bottom-0"
                style={{ y: y3 }}
            >
                <hr />
                <hr />
            </motion.div>
        </div>
    );
}

export default AboutMeSection;