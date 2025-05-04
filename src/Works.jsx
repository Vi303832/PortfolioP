import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { IoMdArrowDropdownCircle } from "react-icons/io";
import { IoMdArrowDropupCircle } from "react-icons/io";

// Her bir proje kartı için animasyon bileşeni
const AnimatedProjectCard = ({ project, index }) => {
    const cardRef = useRef(null);
    const isInView = useInView(cardRef, { once: false, amount: 0.3 });
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
    const tickingRef = useRef(false);
    const [isMobile, setIsMobile] = useState(false);
    const [showMobileImage, setShowMobileImage] = useState(false);

    // Check if the device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Fare pozisyonu takibi (sadece hover durumunda ve mobil olmadığında)
    useEffect(() => {
        if (!isHovered || isMobile) return;

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
    }, [isHovered, isMobile]);

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

    // Mobil için görüntü toggle
    const toggleMobileImage = (e) => {
        if (isMobile) {
            e.preventDefault();
            setShowMobileImage(!showMobileImage);
        }
    };

    return (
        <motion.div
            ref={cardRef}
            className="w-full py-4 md:py-8 flex flex-col items-start gap-4 relative"
            variants={cardVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            onClick={toggleMobileImage}
        >
            <div className="w-full flex flex-row items-start gap-2 md:gap-4">
                <div className="text-gray-400 text-sm w-8 md:w-12">{String(index + 1).padStart(2, '0')}</div>

                <div className="flex-1">
                    <h3 className={`text-2xl md:text-4xl lg:text-5xl font-bold mb-1 md:mb-2 relative opacity-60 flex items-center gap-2 ${isHovered ? "opacity-80" : "opacity-60"}`}>
                        {project.title}
                        {showMobileImage ? <IoMdArrowDropupCircle className='max-md:block hidden ' /> : <IoMdArrowDropdownCircle className='max-md:block hidden' />}

                    </h3>
                    <p className="text-gray-400 text-xs md:text-sm lg:text-base mb-3 md:mb-4">{project.category}</p>

                    {/* Mobil ve desktop için farklı buton yerleşimi */}
                    <div className="flex items-center gap-3">
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-sm font-light p-2 bg-a hover:bg-opacity-50 rounded-lg"
                        >
                            <FaGithub className="text-lg md:text-2xl cursor-pointer text-white" />
                            <span className="hidden md:inline">GitHub</span>
                        </a>
                        {project.live && (
                            <a
                                href={project.live}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-2 text-sm font-light p-2 bg-white bg-opacity-10 hover:bg-opacity-20 rounded-lg"
                            >
                                <FaExternalLinkAlt className="text-lg md:text-xl cursor-pointer text-b" />
                                <span className="hidden md:inline text-b">Site</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobil için görsel gösterimi */}
            {isMobile && showMobileImage && (
                <motion.div
                    className="mt-4 w-full rounded-lg overflow-hidden"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-auto object-cover rounded-lg"
                    />
                </motion.div>
            )}

            {/* Desktop için hover görsel */}
            {isHovered && !isMobile && (
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
            link: "https://github.com/Vi303832/CM",
            live: "",
        },
        {
            id: 2,
            title: 'Kuf',
            category: 'E-ticaret Platformu / Firebase, Redux Toolkit, Cloudinary, React',
            image: 'https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif',
            link: "https://github.com/Vi303832/EcommerceP",
            live: "https://kufproject.vercel.app/",
        },
        {
            id: 3,
            title: 'Sultan',
            category: 'Yerel İşletme Websitesi / React, Tailwind CSS',
            image: 'https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif',
            link: "https://github.com/Vi303832/Sultan",
            live: "https://sultan-5i3p.vercel.app/",
        },
        {
            id: 4,
            title: 'Ekip',
            category: 'Yerel İşletme Websitesi / React, Tailwind CSS',
            image: 'https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif',
            link: "https://github.com/Vi303832/EKP",
            live: "https://ekip-beta.vercel.app/",
        },
    ];

    return (
        <div className="min-h-screen bg-a pb-10 max-md:pb-5 font-Poppins text-white flex flex-col items-center border-t rounded-t-4xl" ref={sectionRef}>
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-20">
                <motion.h2
                    className='text-3xl pt-20 pb-10 !opacity-80 px-1 '
                    style={{ opacity: headerOpacity, y: headerY }}
                >
                    Projeler
                </motion.h2>

                <div className="flex flex-col gap-12 md:gap-16 lg:gap-20">
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