import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';

function Skills() {

    const components = [
        { id: 1, title: "LOREM İPSUM DOLOR", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum minus maiores. Necessitatibus quos aut eius expedita excepturi facere nihil." },
        { id: 2, title: "RESPONSİVE DESİGN", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum minus maiores. Necessitatibus quos aut eius expedita excepturi facere nihil." },
        { id: 3, title: "ANIMATION", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum minus maiores. Necessitatibus quos aut eius expedita excepturi facere nihil." },
        { id: 4, title: "UI/UX", description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum minus maiores. Necessitatibus quos aut eius expedita excepturi facere nihil." },
    ];

    return (
        <div className='min-h-screen w-full bg-a text-beyaz flex justify-center'>
            <div className='w-[90%] flex flex-col justify-center'>
                <div className='text-3xl py-10'>Yetenekler</div>

                {/* Bileşenler */}
                <div className='h-full flex flex-col'>
                    {components.map((component) => (
                        <SkillComponent key={component.id} title={component.title} description={component.description} />
                    ))}
                </div>
            </div>
        </div>
    );
}

function SkillComponent({ title, description }) {
    const ref = useRef(null);

    // Her bir bileşen için scroll durumunu al
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["0.5 1", "1 1"], // Bileşen ekranın ortasına geldiğinde animasyon başlar
    });

    // Scroll durumuna göre width değerini hesapla
    const width = useSpring(useTransform(scrollYProgress, [0.5, 1], ["0%", "100%"]), {
        stiffness: 80, // Animasyon sertliği
        damping: 30, // Animasyon sönümü
    });

    return (
        <div ref={ref} className='relative w-full h-[30vh] text-7xl font-bold flex items-center justify-between gap-5'>
            <div className='flex h-full w-full absolute items-center'>
                <div className='w-full h-full relative'>
                    {/* Siyah arka plan ve şeffaf yazı */}
                    <div className='absolute px-2 h-full w-full flex items-center max-xl:text-4xl bg-a'>
                        <div className='text-transparent' style={{ WebkitTextStroke: '2px white' }}>{title}</div>
                    </div>

                    {/* Kaydırmaya bağlı genişleyen renkli div */}
                    <motion.div
                        style={{
                            clipPath: 'polygon(0 0, var(--clip-width) 0, var(--clip-width) 100%, 0 100%)',
                            ['--clip-width']: width, // width değerini CSS değişkeni olarak kullan
                        }}
                        className='absolute px-2 h-full w-full bg-kbeyaz flex items-center max-xl:text-4xl'
                    >
                        <div className='text-transparent' style={{ WebkitTextStroke: '2px black' }}>{title}</div>
                    </motion.div>
                </div>
            </div>

            {/* Açıklama */}
            <div className='text-2xl w-[40%] right-10 absolute h-full flex items-center py-2 text-a'>
                <div className='absolute'>{description}</div>
            </div>
        </div>
    );
}

export default Skills;