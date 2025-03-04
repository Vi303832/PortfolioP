import React from 'react'
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';


function Skills() {

    const scrollRef = useRef(null);

    // 2. useScroll hook'u ile kaydırma durumunu alıyoruz
    const { scrollYProgress } = useScroll({
        target: scrollRef,
        offset: ["0 1", "1 1"], // Bileşen ekranın ortasına geldiğinde animasyon başlar
    });

    const opacity = useTransform(
        scrollYProgress,         // Girdi değeri (scrollYProgress)
        [0, 0.1, 1],             // Kaydırma oranı aralığı (0'dan 1'e kadar)
        [0, 1, 1]                // İlgili opaklık aralığı (0 opaklıktan 1 opaklığa ve tekrar 0 opaklığa)
    );




    return (
        <div className='min-h-screen w-full bg-a text-beyaz flex justify-center' ref={scrollRef} >
            <div className='w-[90%] bg-amber-500 flex flex-col justify-center' >
                <div className='text-3xl'>Yetenekler</div>


                {/*Session*/}
                <div className='bg-amber-800 h-full flex flex-col' >

                    {/*Component*/}

                    <div className='relative w-full h-[30vh] text-7xl font-bold flex  items-center justify-between  gap-5  ' >

                        <div className='flex h-full w-full  absolute  items-center ' >
                            <div className='w-full h-full '>
                                <motion.div




                                    className='absolute px-2    h-full w-full flex items-center bg-black hover:bg-red-800 '>
                                    <div className=''>
                                        LOREM İPSUM DOLOR
                                    </div>
                                </motion.div>
                                <motion.div

                                    style={{
                                        opacity,

                                    }}

                                    className='absolute px-2 text-red-500 h-full w-full flex items-center bg-black hover:bg-red-800'>
                                    <div>
                                        LOREM İPSUM DOLOR
                                    </div>
                                </motion.div>
                            </div>

                        </div>

                        <div className=' text-2xl w-[40%] right-10 absolute h-full flex items-center py-2 text-black'>
                            <div className='absolute'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum minus maiores. Necessitatibus quos aut eius expedita excepturi facere nihil.
                            </div>

                        </div>

                    </div>


                    <div className='relative w-full h-[30vh] text-7xl font-bold flex  items-center justify-between  gap-5  '>

                        <div className='flex h-full w-full  absolute  items-center'>
                            <div className='w-full h-full '>
                                <div className='absolute px-2  h-full w-full flex items-center bg-black hover:bg-red-800'>
                                    <div>
                                        RESPONSİVE DESİGN
                                    </div>
                                </div>
                                <motion.div

                                    style={{
                                        opacity,

                                    }}

                                    className='absolute px-2 text-red-500 h-full w-full flex items-center bg-black hover:bg-red-800'>
                                    <div>
                                        RESPONSİVE DESİGN
                                    </div>
                                </motion.div>
                            </div>

                        </div>

                        <div className=' text-2xl w-[40%] right-10 absolute h-full flex items-center py-2 text-black'>
                            <div className='absolute'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum minus maiores. Necessitatibus quos aut eius expedita excepturi facere nihil.
                            </div>

                        </div>

                    </div>


                    <div className='relative w-full h-[30vh] text-7xl font-bold flex  items-center justify-between  gap-5  '>

                        <div className='flex h-full w-full  absolute  items-center'>
                            <div className='w-full h-full '>
                                <div className='absolute px-2 text-red-500 h-full w-full flex items-center bg-black hover:bg-red-800'>
                                    <div>
                                        RESPONSİVE DESİGN
                                    </div>
                                </div>
                                <div className='absolute px-2 text-red-500 h-full w-full flex items-center bg-black hover:bg-red-800'>
                                    <div>
                                        RESPONSİVE DESİGN
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=' text-2xl w-[40%] right-10 absolute h-full flex items-center py-2 text-black'>
                            <div className='absolute'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum minus maiores. Necessitatibus quos aut eius expedita excepturi facere nihil.
                            </div>

                        </div>

                    </div>


                    <div className='relative w-full h-[30vh] text-7xl font-bold flex  items-center justify-between  gap-5  '>

                        <div className='flex h-full w-full  absolute  items-center'>
                            <div className='w-full h-full '>
                                <div className='absolute px-2 text-red-500 h-full w-full flex items-center bg-black hover:bg-red-800'>
                                    <div>
                                        RESPONSİVE DESİGN
                                    </div>
                                </div>
                                <div className='absolute px-2 text-red-500 h-full w-full flex items-center bg-black hover:bg-red-800'>
                                    <div>
                                        RESPONSİVE DESİGN
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=' text-2xl w-[40%] right-10 absolute h-full flex items-center py-2 text-black'>
                            <div className='absolute'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum minus maiores. Necessitatibus quos aut eius expedita excepturi facere nihil.
                            </div>

                        </div>

                    </div>


                    <div className='relative w-full h-[30vh] text-7xl font-bold flex  items-center justify-between  gap-5  '>

                        <div className='flex h-full w-full  absolute  items-center'>
                            <div className='w-full h-full '>
                                <div className='absolute px-2 text-red-500 h-full w-full flex items-center bg-black hover:bg-red-800'>
                                    <div>
                                        RESPONSİVE DESİGN
                                    </div>
                                </div>
                                <div className='absolute px-2 text-red-500 h-full w-full flex items-center bg-black hover:bg-red-800'>
                                    <div>
                                        RESPONSİVE DESİGN
                                    </div>
                                </div>
                            </div>

                        </div>

                        <div className=' text-2xl w-[40%] right-10 absolute h-full flex items-center py-2 text-black'>
                            <div className='absolute'>
                                Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae ipsum minus maiores. Necessitatibus quos aut eius expedita excepturi facere nihil.
                            </div>

                        </div>

                    </div>



                </div>
                {/*Column end */}


                {/*Session*/}
            </div>




        </div>

    )
}

export default Skills