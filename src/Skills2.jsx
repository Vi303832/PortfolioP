import React, { useRef } from 'react';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import {
    FaReact,
    FaNodeJs,
    FaGithub
} from 'react-icons/fa';
import {
    SiNextdotjs,
    SiTailwindcss,
    SiJavascript,
    SiExpress,
    SiMongodb,
    SiFirebase
} from 'react-icons/si';

function Skills() {
    const techIcons = [
        { icon: <FaReact className="text-3xl" />, name: "React.js" },
        { icon: <SiNextdotjs className="text-3xl" />, name: "Next.js" },
        { icon: <SiTailwindcss className="text-3xl" />, name: "Tailwind CSS" },
        { icon: <SiJavascript className="text-3xl" />, name: "JavaScript" },
        { icon: <FaNodeJs className="text-3xl" />, name: "Node.js" },
        { icon: <SiExpress className="text-3xl" />, name: "Express.js" },
        { icon: <SiMongodb className="text-3xl" />, name: "MongoDB" },
        { icon: <SiFirebase className="text-3xl" />, name: "Firebase" },
        { icon: <FaGithub className="text-3xl" />, name: "Git & GitHub" },
    ];

    const components = [
        { id: 1, title: "FRONTEND", description: "Modern web uygulamaları geliştirirken, React ve Next.js kullanarak ölçeklenebilir, performanslı ve kullanıcı odaklı arayüzler üretiyorum" },
        { id: 2, title: "BACKEND", description: "Node.js ve Express.js teknolojileriyle basit ve ölçeklenebilir API çözümleri geliştiriyor, MongoDB gibi NoSQL veritabanlarıyla veri yönetimi sağlıyorum" },
        { id: 3, title: "UI/UX", description: "Arayüz geliştirirken kullanıcı deneyimini ön planda tutuyorum. Responsive tasarım, erişilebilirlik ve modern UI prensiplerine dikkat ederek etkileyici ve kullanılabilir uygulamalar geliştiriyorum" },
        {
            id: 4,
            title: "TEKNOLOJİLER",
            description: <div className="flex flex-wrap gap-4">
                {techIcons.map((tech, index) => (
                    <div key={index} className="flex items-center gap-2">
                        {tech.icon}
                        <span>{tech.name}</span>
                    </div>
                ))}
            </div>
        },
    ];

    return (
        <div className='min-h-screen w-full bg-a rounded-t-2xl border-t text-beyaz flex justify-center max-sm:bottom-20 max-sm:relative'>
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
    const ref2 = useRef(null);

    // Her bir bileşen için scroll durumunu al
    // Offset değerlerini daha erken tetiklenecek şekilde değiştirdik
    const { scrollYProgress } = useScroll({
        target: ref2,
        offset: ["start end", "center center"],
    });

    // Scroll durumuna göre width değerini hesapla
    // Animasyon eğrisini daha hızlı yanıt verecek şekilde ayarladık
    const width = useSpring(useTransform(scrollYProgress, [0, 0.6], ["0%", "100%"]), {
        stiffness: 100, // Animasyon sertliğini artırdık
        damping: 25, // Sönümlemeyi azalttık
    });

    return (
        <>
            <div className='relative w-full h-[30vh] text-7xl font-bold flex items-center justify-between gap-5'>
                <div className='absolute w-[50vh] h-[50vh] flex items-center justify-center bg-amber-400 z-20 border-t-8 opacity-30 invisible' ref={ref2} />
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
        </>
    );
}

export default Skills;