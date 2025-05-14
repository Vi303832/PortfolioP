import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt, FaChevronDown, FaChevronUp } from 'react-icons/fa';
import Sultan from "./assets/gifs/Sultan.webm"
import Ekip from "./assets/gifs/Ekip.webm"
import Kuf from "./assets/gifs/Kuf.webm"
import Zynote from "./assets/gifs/Zynote.webm"


const ProjectCard = ({ project, index, activeProject, setActiveProject, onHover }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [showMobileImage, setShowMobileImage] = useState(false);
    const cardRef = useRef(null);

    // Check if device is mobile
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 768);
        };

        checkMobile();
        window.addEventListener("resize", checkMobile);
        return () => window.removeEventListener("resize", checkMobile);
    }, []);

    // Toggle mobile image display
    const toggleMobileImage = (e) => {
        if (isMobile) {
            e.preventDefault();
            setShowMobileImage(!showMobileImage);
        }
    };

    // Handle hover for desktop
    const handleMouseEnter = () => {
        if (!isMobile) {
            setActiveProject(project.id);
            // Pass the card's position to parent for positioning the preview
            if (cardRef.current) {
                const rect = cardRef.current.getBoundingClientRect();
                onHover(rect);
            }
        }
    };

    const handleMouseLeave = () => {
        if (!isMobile) {
            setActiveProject(null);
        }
    };

    const isActive = activeProject === project.id;

    return (
        <motion.div
            ref={cardRef}
            className={`w-full py-4 md:py-5 flex flex-col items-start gap-3 relative border-b border-zinc-800 last:border-b-0 cursor-pointer transition-colors duration-300 ${isActive ? "bg-zinc-900/30" : ""
                }`}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            onClick={toggleMobileImage}
        >
            <div className="w-full flex flex-row items-start gap-2 md:gap-4 px-4">
                <div className="text-zinc-500 text-sm w-8 md:w-10">{String(index + 1).padStart(2, "0")}</div>

                <div className="flex-1 py-10">
                    <h3
                        className={`text-xl md:text-2xl lg:text-3xl font-bold mb-1 md:mb-2 relative flex items-center gap-2 transition-colors duration-300 ${isActive ? "text-white" : "text-zinc-300"
                            }`}
                    >
                        {project.title}
                        {isMobile &&
                            (showMobileImage ? (
                                <FaChevronUp className="block md:hidden h-5 w-5" />
                            ) : (
                                <FaChevronDown className="block md:hidden h-5 w-5" />
                            ))}
                    </h3>
                    <p className="text-zinc-400 text-xs md:text-sm mb-3">{project.description}</p>

                    <div className="flex items-center gap-3">
                        <a
                            href={project.githubLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex items-center gap-2 text-sm p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                        >
                            <FaGithub className="h-4 w-4" />
                            <span className="hidden md:inline">GitHub</span>
                        </a>

                        {project.siteLink && (
                            <a
                                href={project.siteLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => e.stopPropagation()}
                                className="flex items-center gap-2 text-sm p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                            >
                                <FaExternalLinkAlt className="h-4 w-4" />
                                <span className="hidden md:inline">Site</span>
                            </a>
                        )}
                    </div>
                </div>
            </div>

            {/* Mobile image display */}
            {isMobile && showMobileImage && (
                <motion.div
                    className="mt-2 w-full px-4"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <div className="rounded-lg overflow-hidden">
                        {project.isGif ? (
                            <video autoPlay loop muted playsInline className="w-full h-auto object-cover rounded-lg">
                                <source src={project.imageUrl} type="video/mp4" />
                                Your browser does not support the video tag.
                            </video>
                        ) : (
                            <img
                                src={project.imageUrl || "/placeholder.svg"}
                                alt={project.title}
                                className="w-full h-auto object-cover rounded-lg"
                            />
                        )}
                    </div>
                </motion.div>
            )}
        </motion.div>
    );
};

// Preview component for desktop
const ProjectPreview = ({ project, isActive }) => {
    return (
        <AnimatePresence mode="wait">
            {isActive ? (
                <motion.div
                    key={project?.id || "active"}
                    className="w-full h-full rounded-lg overflow-hidden bg-zinc-900"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    {project?.isGif ? (
                        <video autoPlay loop muted playsInline className="w-full h-full object-cover">
                            <source src={project.imageUrl} type="video/mp4" />
                        </video>
                    ) : (
                        <img
                            src={project?.imageUrl || "/placeholder.svg"}
                            alt={project?.title || "Project preview"}
                            className="w-full h-full object-cover"
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/30 flex flex-col justify-between p-4 md:p-6">
                        <div className="text-sm text-white/70">Preview</div>
                        <div>
                            <h3 className="text-xl font-bold text-white">{project?.title}</h3>
                            <p className="text-sm text-white/70">{project?.description}</p>
                        </div>
                    </div>
                </motion.div>
            ) : (
                <motion.div
                    key="empty"
                    className="w-full h-full flex items-center justify-center"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <p className="text-zinc-600 text-sm md:text-base">Hover over a project to see preview</p>
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default function Works() {
    const [activeProject, setActiveProject] = useState(null);
    const [isMobile, setIsMobile] = useState(false);
    const [windowHeight, setWindowHeight] = useState(0);
    const [previewPosition, setPreviewPosition] = useState({ top: 0 });
    const projectsRef = useRef(null);
    const sectionRef = useRef(null);

    // Scroll animations
    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const headerOpacity = useTransform(scrollYProgress, [0, 0.1], [0, 1]);
    const headerY = useTransform(scrollYProgress, [0, 0.1], [30, 0]);

    // Check if device is mobile and get window height
    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
            setWindowHeight(window.innerHeight);
        };

        handleResize();
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    // Calculate preview height based on window height
    const getPreviewHeight = () => {
        if (windowHeight < 600) return 180;
        if (windowHeight < 800) return 220;
        if (windowHeight < 1000) return 280;
        return 320;
    };

    // Handle hover position for preview
    const handleHover = (rect) => {
        if (!projectsRef.current) return;

        const containerRect = projectsRef.current.getBoundingClientRect();
        const previewHeight = getPreviewHeight();

        // Calculate the ideal position (centered with the hovered card)
        let idealTop = rect.top - containerRect.top + rect.height / 2 - previewHeight / 2;

        // Make sure the preview doesn't go above the container
        idealTop = Math.max(0, idealTop);

        // Make sure the preview doesn't go below the container
        const maxTop = containerRect.height - previewHeight;
        idealTop = Math.min(maxTop, idealTop);

        setPreviewPosition({ top: idealTop });
    };

    const projects = [
        {
            id: 1,
            title: "Zynote",
            description: "Not Alma Uygulaması / MERN Stack (MongoDB, Express, React, Node.js)",
            imageUrl: Zynote,
            githubLink: "https://github.com/Vi303832/CM",
            siteLink: "https://zynote.vercel.app/",
            isGif: true,
        },
        {
            id: 2,
            title: "Sultan",
            description: "Yerel İşletme Websitesi / React, Tailwind CSS",
            imageUrl: Sultan,
            githubLink: "https://github.com/Vi303832/Sultan",
            siteLink: "https://www.sultandugunsalonlari.com.tr/",
            isGif: true,
        },
        {
            id: 3,
            title: "Ekip",
            description: "Yerel İşletme Websitesi / React, Tailwind CSS",
            imageUrl: Ekip,
            githubLink: "https://github.com/Vi303832/ekip-boya-insaat",
            siteLink: "https://www.ekipboya.com/",
            isGif: true,
        },
        {
            id: 4,
            title: "Kuf",
            description: "E-ticaret Platformu / Firebase, Redux Toolkit, Cloudinary, React",
            imageUrl: Kuf,
            githubLink: "https://github.com/Vi303832/EcommerceP",
            siteLink: "https://kufproject.vercel.app/",
            isGif: true,
        },
    ];

    const activeProjectData = projects.find((p) => p.id === activeProject);
    const previewHeight = getPreviewHeight();

    return (
        <section

            ref={sectionRef} className="bg-a rounded-t-4xl border-t text-white py-6 md:py-10" >
            <div className="container mx-auto px-20 max-md:px-5">
                <h2

                    className="text-3xl  pt-5 pb-10 max-md:pl-3 opacity-80"
                >
                    Projeler
                </h2>

                <div className="flex flex-col md:flex-row gap-6 md:gap-8"

                    ref={projectsRef}>
                    {/* Projects list */}
                    <div className="w-full md:w-1/2 flex flex-col">
                        {projects.map((project, index) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                index={index}
                                activeProject={activeProject}
                                setActiveProject={setActiveProject}
                                onHover={handleHover}
                            />
                        ))}
                    </div>

                    {/* Preview area - only visible on desktop */}
                    <div className="hidden md:block md:w-1/2 relative">
                        <div
                            className="w-full rounded-lg overflow-hidden bg-zinc-900/30 absolute transition-all duration-300"
                            style={{
                                height: `${previewHeight}px`,
                                top: `${previewPosition.top}px`,
                            }}
                        >
                            <ProjectPreview project={activeProjectData} isActive={!!activeProject} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}