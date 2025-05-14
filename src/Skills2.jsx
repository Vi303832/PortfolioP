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
    SiTypescript
} from 'react-icons/si';
import { IoLogoFirebase } from "react-icons/io5";

function Skills() {
    const techIcons = [
        { icon: <FaReact className="text-3xl" />, name: "React.js" },
        { icon: <SiNextdotjs className="text-3xl" />, name: "Next.js" },
        { icon: <SiTailwindcss className="text-3xl" />, name: "Tailwind CSS" },
        { icon: <SiJavascript className="text-3xl" />, name: "JavaScript" },
        { icon: <SiTypescript className="text-3xl" />, name: "TypeScript" },
        { icon: <FaNodeJs className="text-3xl" />, name: "Node.js" },
        { icon: <SiExpress className="text-3xl" />, name: "Express.js" },
        { icon: <SiMongodb className="text-3xl" />, name: "MongoDB" },
        { icon: <IoLogoFirebase className="text-3xl" />, name: "Firebase" },
        { icon: <FaGithub className="text-3xl" />, name: "Git & GitHub" },
    ];

    const components = [
        { id: 1, yd: 0, title: "FRONTEND", description: "Modern web uygulamaları geliştirirken, React ve Next.js kullanarak ölçeklenebilir, performanslı ve kullanıcı odaklı arayüzler üretiyorum" },
        { id: 2, yd: 60, title: "BACKEND", description: "Node.js , Express.js ve Firebase  teknolojileriyle basit ve ölçeklenebilir API çözümleri geliştiriyor, MongoDB ve Firestore gibi NoSQL veritabanlarıyla veri yönetimi sağlıyorum" },
        { id: 3, yd: 70, title: "UI/UX", description: "Arayüz geliştirirken kullanıcı deneyimini ön planda tutuyorum. Responsive tasarım, erişilebilirlik ve modern UI prensiplerine dikkat ederek etkileyici ve kullanılabilir uygulamalar geliştiriyorum" },
        {
            id: 4,
            yd: 140,
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
        <div className='min-h-screen w-full   rounded-t-4xl border-t  text-beyaz flex justify-center    '>

            <div className='w-full   flex flex-col justify-center z-10 bg-a min-md:px-20 px-5 rounded-t-4xl border-t border-white pb-20 max-[1200px]:pb-30  '>
                <div
                    id='Yetenekler'
                    className='text-3xl pb-10 pt-20   '>Yetenekler</div>

                {/*>md Bileşenler */}
                <div className='h-full flex flex-col max-[1200px]:hidden w-full '>
                    {components.map((component) => (
                        <SkillComponent key={component.id} title={component.title} description={component.description} yd={component.yd} />
                    ))}
                </div>

                {/*<md Bileşenler */}
                <div className='h-full hidden max-[1200px]:flex flex-col '>
                    {components.map((component) => (
                        <MobileSkillComponent key={component.id} title={component.title} description={component.description} yd={component.yd} />
                    ))}
                </div>






                <div className='h-[10vh] bg-amber-400 absolute invinsible pointer-events-none '
                    id="Projeler"></div>

            </div>
        </div>
    );
}

function SkillComponent({ title, description, yd }) {
    const ref2 = useRef(null);

    // Her bir bileşen için scroll durumunu al
    // Offset değerlerini daha erken tetiklenecek şekilde değiştirdik
    const { scrollYProgress } = useScroll({
        target: ref2,
        offset: ["start end", "center center"],
    });

    // Scroll durumuna göre width değerini hesapla
    // Animasyon eğrisini daha hızlı yanıt verecek şekilde ayarladık
    const width = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "100%"]), {
        stiffness: 100,
        damping: 25,
    });

    return (
        <>
            <div className='relative w-full h-[30vh] text-7xl font-bold flex items-center justify-between gap-5  max-md:hidden '>

                <div
                    className='!top-10 absolute'
                >
                    <div
                        className="absolute w-[50vh] h-[50vh] flex items-center justify-center bg-amber-400 z-20 border-t-8 invisible pointer-events-none  "
                        style={{ top: `-${yd}px ` }}
                        ref={ref2}
                    />
                </div>



                <div className='flex h-full w-full absolute items-center'>
                    <div className='w-full h-full relative '>
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

function MobileSkillComponent({ title, description, yd }) {
    const ref2 = useRef(null);

    // Her bir bileşen için scroll durumunu al
    const { scrollYProgress } = useScroll({
        target: ref2,
        offset: ["start end", "center center"],
    });

    // Scroll durumuna göre width değerini hesapla
    const width = useSpring(useTransform(scrollYProgress, [0, 0.5, 1], ["0%", "100%", "100%"]), {
        stiffness: 100,
        damping: 25,
    });

    // Scroll durumuna göre scale ve opacity değerlerini hesapla
    const descriptionScale = useSpring(useTransform(scrollYProgress, [0.2, 0.6], [0.9, 1]), {
        stiffness: 100,
        damping: 20,
    });

    const descriptionOpacity = useSpring(useTransform(scrollYProgress, [0.3, 0.7], [0, 1]), {
        stiffness: 100,
        damping: 25,
    });

    return (
        <div className='relative w-full mb-16' ref={ref2}>
            {/* Başlık kısmı */}
            <div className='relative h-auto text-4xl font-bold mb-6'>
                <div className='absolute px-2 py-3 h-full w-full flex items-start bg-a'>
                    <div className='text-transparent' style={{ WebkitTextStroke: '1px white' }}>{title}</div>
                </div>

                {/* Kaydırmaya bağlı genişleyen renkli div */}
                <motion.div
                    style={{
                        clipPath: 'polygon(0 0, var(--clip-width) 0, var(--clip-width) 100%, 0 100%)',
                        ['--clip-width']: width,
                    }}
                    className='absolute px-2 py-3 h-full w-full bg-kbeyaz flex items-start'
                >
                    <div className='text-transparent' style={{ WebkitTextStroke: '1px black' }}>{title}</div>
                </motion.div>

                {/* Görünür olmayan boşluk oluşturucu */}
                <div className='invisible px-2 py-3'>{title}</div>
            </div>

            {/* Açıklama bölümü - kaydırmaya bağlı olarak ortaya çıkar */}
            <motion.div
                style={{
                    opacity: descriptionOpacity,
                    scale: descriptionScale,
                    transformOrigin: 'left top'
                }}
                className='relative ml-4 mt-4 border-l-2 border-kbeyaz pl-4'
            >
                <div className='text-lg text-beyaz mb-8'>
                    {typeof description === 'string' ? (
                        <p>{description}</p>
                    ) : (
                        description
                    )}
                </div>

                {/* İnteraktif buton - öğrenme/iletişim için */}

            </motion.div>
        </div>
    );
}
export default Skills;