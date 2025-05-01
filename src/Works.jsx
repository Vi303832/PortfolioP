import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useAnimation, useInView } from 'framer-motion';

// Her bir proje kartı için animasyon bileşeni
const AnimatedProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, amount: 0.3 });
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const tickingRef = useRef(false);

    // Fare pozisyonu takibi (sadece hover durumunda)
    useEffect(() => {
        if (!isHovered) return;

        const handleMouseMove = (e) => {
            if (!tickingRef.current) {
                requestAnimationFrame(() => {
                    setMousePos({ x: e.clientX, y: e.clientY });
                    tickingRef.current = false;
                });
                tickingRef.current = true;
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
        };
    }, [isHovered]);

    // Card varyantları
    const cardVariants = {
        hidden: {
            opacity: 0,
            y: 50
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <motion.div
            ref={cardRef}
            className="w-full border-t border-a py-8   flex flex-col sm:flex-row items-start gap-4 relative"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="text-gray-400 text-sm w-12 ">{String(index + 1).padStart(2, '0')}</div>

            <div className="flex-1 ">
                <h3 className="text-4xl font-bold mb-2 relative bottom-2  ">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-6">{project.category}</p>
            </div>

            {isHovered && (
                <motion.div
                    className="fixed z-50 pointer-events-none"
                    style={{
                        left: mousePos.x,
                        top: mousePos.y,
                        transform: 'translate(-50%, -50%)',
                    }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.15 }}

                >
                    <div className="relative w-72 h-48 rounded-lg shadow-lg overflow-hidden">
                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-x-0 top-0 bg-gradient-to-b from-a/60 to-transparent p-3 rounded-t-lg">
                            <h4 className="text-sm font-medium text-white">{project.title}</h4>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

const Works = () => {
    const sectionRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const headerY = useTransform(scrollYProgress, [0, 0.1], [30, 0]);

    const projects = [
        {
            id: 1,
            title: 'Not Defteri',
            category: 'Not Alma Uygulaması / MERN Stack (MongoDB, Express, React, Node.js)',
            image: 'https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif',
        },
        {
            id: 2,
            title: 'Kuf',
            category: 'E-ticaret Platformu / Firebase, Redux Toolkit, Cloudinary, React',
            image: 'https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif',
        },
        {
            id: 3,
            title: 'Sultan',
            category: 'Yerel İşletme Websitesi / React, Tailwind CSS',
            image: 'https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif',
        },
        {
            id: 4,
            title: 'Ekip',
            category: 'Yerel İşletme Websitesi / React, Tailwind CSS',
            image: 'https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif',
        },
    ];

    return (
        <div className="min-h-screen bg-a pb-20  font-Poppins text-white flex flex-col items-center  border-t rounded-t- " ref={sectionRef}>
            <div className="w-full px-20 ">
                <motion.h2
                    className="text-6xl font-bold py-24 "
                    style={{ opacity: headerOpacity, y: headerY }}
                >
                    Projeler
                </motion.h2>

                <div className="flex flex-col gap-20">
                    {projects.map((project, index) => (
                        <AnimatedProjectCard
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Works;