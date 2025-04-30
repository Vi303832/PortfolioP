import React, { useState, useRef, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Works() {
    const projectsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: projectsRef,
        offset: ['start end', 'end end'],
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

    const projects = [
        {
            id: 1,
            title: 'MeetMate',
            category: 'Web Development / Design',
            image: 'https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif',
        },
        {
            id: 2,
            title: 'fishtrack.',
            category: 'iOS Development / Product Design',
            image: 'https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif',
        },
        {
            id: 3,
            title: 'TCG-Home',
            category: 'Web Development',
            image: 'https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif',
        },
        {
            id: 4,
            title: 'Portfolio',
            category: 'Web Development',
            image: 'https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif',
        },
    ];

    return (
        <div className='min-h-screen bg-black font-Poppins text-white flex flex-col items-center p-10' ref={projectsRef}>
            <motion.div className='w-full max-w-7xl' style={{ opacity, y }}>
                <h2 className='text-4xl font-bold mb-16'>Selected Projects</h2>
                <div className='flex flex-col gap-10'>
                    {projects.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} />
                    ))}
                </div>
            </motion.div>
        </div>
    );
}

const ProjectCard = React.memo(({ project, index }) => {
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

    return (
        <motion.div
            className='w-full border-t border-gray-700 py-8 flex flex-col sm:flex-row gap-4 relative'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className='text-gray-400 text-sm w-12'>{String(index + 1).padStart(2, '0')}</div>

            <div className='flex-1'>
                <h3 className='text-4xl font-bold mb-1'>{project.title}</h3>
                <p className='text-gray-400 text-sm mb-6'>{project.category}</p>
            </div>

            {isHovered && (
                <motion.div
                    className='fixed z-50 pointer-events-none'
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
                    <div className='relative w-72 h-48 rounded-lg shadow-lg overflow-hidden'>
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover'
                        />
                        <div className='absolute inset-x-0 top-0 bg-gradient-to-b from-black/60 to-transparent p-3 rounded-t-lg'>
                            <h4 className='text-sm font-medium text-white'>{project.title}</h4>
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
});

export default Works;