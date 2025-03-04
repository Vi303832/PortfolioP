import React, { useState } from 'react'
import { FaBars } from "react-icons/fa";
import { motion } from 'framer-motion';
import { IoClose } from "react-icons/io5";




function Navbar() {

    let [open, setopen] = useState(false)
    let [hovered, setHovered] = useState(false)
    const [hoveredIndex, setHoveredIndex] = useState(null);

    const navItems = [
        { id: 1, label: 'Home' },
        { id: 2, label: 'About Me' },
        { id: 3, label: 'Skills' },
        { id: 4, label: 'Works' },
        { id: 5, label: 'Contact' }
    ];



    return (
        <div className='relative'>
            {open &&
                <div className='min-md:hidden'>

                    <motion.div


                        initial={{
                            height: 0,
                            y: -600,
                        }}
                        animate={{
                            height: "100vh",
                            y: 0
                        }}
                        transition={{
                            duration: 1, // Toplam animasyon süresi

                            y: {
                                duration: 1, // y animasyonunun süresi


                            },
                            height: {
                                duration: 1.5,


                            },

                            backgroundColor: {
                                duration: 1, // Arka plan rengi değişim süresi

                            },
                        }}


                        className='h-screen bg-b absolute  z-10 w-full'
                    >
                        <div className='text-5xl p-5 text-a  flex justify-end  '>
                            <IoClose onClick={() => setopen(false)} className='cursor-pointer' />
                        </div>

                        <div className='flex  gap-10 min-md:hidden flex-col py-10 items-center justify-center text-white'>
                            <div>
                                Home,
                            </div>
                            <div>
                                About Me,
                            </div>
                            <div>
                                Skills,
                            </div>
                            <div>
                                Works,
                            </div>
                            <div>
                                Contact,
                            </div>



                        </div>



                    </motion.div>
                </div>
            }
            <div className='h-[84px] w-[100%] font-Poppins '>
                <div className='flex justify-between items-center h-full w-full overflow-hidden px-10'>
                    <div className='text-4xl  p-3 font-bold'>
                        A.T
                    </div>
                    {!open &&
                        <div onClick={() => setopen(true)} className='text-3xl min-md:hidden cursor-pointer z-20  '>
                            <FaBars />
                        </div>}

                    <div className='flex text-b gap-2 max-md:hidden  h-full items-center'>

                        {navItems.map((item, index) => (
                            <div key={item.id} className='relative flex w-[80px] h-[15px]'>
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
                                        <div className='z-30 absolute w-full h-full flex justify-center items-center cursor-pointer'>
                                            {item.label}
                                        </div>
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