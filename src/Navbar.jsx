import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";

import { IoClose } from "react-icons/io5";
import { HiMenuAlt3 } from 'react-icons/hi';
import { motion, AnimatePresence } from 'framer-motion';






function Navbar() {

    let [open, setopen] = useState(false)
    let [hovered, setHovered] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null);


    const navItems = [
        { id: 1, label: 'Home' },
        { id: 2, label: 'Hakkımda' },
        { id: 3, label: 'Yetenekler' },
        { id: 4, label: 'Projeler' },
        { id: 5, label: 'İletişim' }
    ];



    return (
        <div className='relative'>
            <AnimatePresence>
                {open && (
                    <div className="min-md:hidden fixed inset-0 z-20 pointer-events-none">
                        <motion.div
                            className="bg-b absolute top-5 right-10"
                            initial={{ height: 40, width: 40, borderRadius: "50%" }}
                            animate={{
                                height: "100vh",
                                width: "100vw",
                                top: 0,
                                right: 0,
                                borderRadius: ["20%", "0%"],
                            }}
                            exit={{
                                height: 40,
                                width: 40,
                                top: "20px",
                                right: "40px",
                                borderRadius: ["0%", "20%"],
                            }}
                            transition={{
                                duration: 0.8,
                                ease: "easeInOut"
                            }}
                        >
                            <div className="flex gap-8 flex-col h-screen max-sm:justify-start max-sm:pt-40 items-center justify-center text-white pointer-events-auto">
                                {['Home', 'Hakkımda', 'Yetenekler', 'Projeler', 'İletişim'].map((item, index) => (
                                    <motion.div
                                        key={index}
                                        initial={{ opacity: 0, y: 20 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{
                                            opacity: 0,
                                            y: 10,
                                            transition: {
                                                duration: 0.3,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        transition={{
                                            delay: 0.5 + (index * 0.1),
                                            duration: 0.3
                                        }}
                                        className="text-2xl font-light tracking-wider border-b border-transparent hover:border-white  transition-all duration-300 cursor-pointer"
                                    >
                                        {item}
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <div className='h-[84px]  w-[100%] font-Poppins'>
                <div className='flex justify-between items-center h-full w-full overflow-hidden px-10'>
                    <div className='text-4xl p-3 font-bold'>
                        A.T
                    </div>

                    <div className="relative min-md:hidden flex items-center justify-center h-10 w-10">
                        <AnimatePresence mode="wait">
                            {!open ? (
                                <motion.div
                                    key="menu-icon"
                                    onClick={() => setopen(true)}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{
                                        delay: 0.70,
                                        duration: 0.3,
                                        ease: "easeOut"
                                    }}



                                    exit={{
                                        scale: [1, 1.4, 0.9, 0],
                                        opacity: [1, 1, 0.5, 0],
                                        transition: {
                                            duration: 0.5,
                                            times: [0, 0.3, 0.6, 1],
                                            ease: "easeInOut"
                                        }
                                    }}
                                    className="cursor-pointer z-30 flex items-center justify-center h-10 w-10"
                                >
                                    <HiMenuAlt3 className="text-3xl" />
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="close-icon"
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: 1,
                                        scale: 1,
                                        rotate: 180,
                                        transition: {
                                            delay: 0.3,
                                            duration: 0.3,
                                            ease: "easeOut"
                                        }
                                    }}
                                    className="cursor-pointer z-30 flex items-center justify-center h-10 w-10"
                                >
                                    <IoClose
                                        onClick={() => setopen(false)}
                                        className="text-3xl cursor-pointer"
                                    />
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                    <div className='flex text-b gap-2 max-md:hidden  h-full items-center'>

                        {navItems.map((item, index) => (
                            <div key={item.id} className='relative flex w-[100px] h-[20px] items-center justify-center'>
                                <motion.div
                                    onMouseEnter={() => setHoveredIndex(index)}
                                    onMouseLeave={() => setHoveredIndex(null)}
                                    className="relative flex w-full h-full overflow-hidden cursor-pointer"
                                >
                                    <motion.button
                                        className="absolute w-full h-full flex cursor-pointer"
                                        initial={{
                                            top: "-20px",
                                        }}
                                        animate={{
                                            top: hoveredIndex === index ? "0px" : "-20px",
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <div className='z-30 absolute w-full h-full flex justify-center items-center cursor-pointer'>
                                            {item.label}
                                        </div>
                                    </motion.button>
                                    <motion.button
                                        className="absolute w-full h-full flex cursor-pointer"
                                        initial={{
                                            bottom: "0px",
                                        }}
                                        animate={{
                                            bottom: hoveredIndex === index ? "-20px" : "0px",
                                        }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <a href={item.label} className='z-30 absolute w-full h-full flex justify-center items-center cursor-pointer'>
                                            {item.label}
                                        </a>
                                    </motion.button>
                                </motion.div>
                            </div>
                        ))}



                    </div>


                </div>


            </div>
        </div>

    )
}

export default Navbar