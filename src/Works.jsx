import React, { useState, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

function Works() {
    const projectsRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: projectsRef,
        offset: ["start end", "end end"]
    });

    const opacity = useTransform(scrollYProgress, [0, 0.3], [0, 1]);
    const y = useTransform(scrollYProgress, [0, 0.3], [100, 0]);

    const projects = [
        {
            id: 1,
            title: "MeetMate",
            category: "Web Development / Design",
            image: "https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif"
        },
        {
            id: 2,
            title: "fishtrack.",
            category: "iOS Development / Product Design",
            image: "https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif"
        },
        {
            id: 3,
            title: "TCG-Home",
            category: "Web Development",
            image: "https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif"
        },
        {
            id: 4,
            title: "Portfolio",
            category: "Web Development",
            image: "https://media1.tenor.com/m/lSHTHwjvbrUAAAAC/ai-dog.gif"
        }
    ];

    return (
        <div className='min-h-screen bg-a font-Poppins text-beyaz flex flex-col items-center p-10' ref={projectsRef}>
            <motion.div
                className='w-full max-w-7xl'
                style={{ opacity, y }}
            >
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

function ProjectCard({ project, index }) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <motion.div
            className='w-full border-t border-gray-700 py-8 flex flex-col sm:flex-row gap-4'
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
        >
            <div className='text-gray-400 text-sm w-12'>{String(index + 1).padStart(2, '0')}</div>

            <div className='flex-1'>
                <h3 className='text-4xl font-bold mb-1'>{project.title}</h3>
                <p className='text-gray-400 text-sm mb-6'>{project.category}</p>

                <div
                    className='w-full overflow-hidden rounded-lg relative h-64 md:h-80 cursor-pointer'
                    onMouseEnter={() => setIsHovered(true)}
                    onMouseLeave={() => setIsHovered(false)}
                >
                    {isHovered ? (
                        <img
                            src={project.image}
                            alt={project.title}
                            className='w-full h-full object-cover'
                        />
                    ) : (
                        <div className='w-full h-full bg-gray-800 flex items-center justify-center text-gray-400'>
                            <span className='text-lg font-medium'>Hover to preview</span>
                        </div>
                    )}
                </div>
            </div>
        </motion.div>
    );
}

export default Works;