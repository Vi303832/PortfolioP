import React from 'react'
import { motion } from 'framer-motion';
import foto from "./assets/bg1.jpg";
import bg from "./assets/bg1.jpg";

function Home() {
    return (
        <div className='w-full h-full flex justify-center absolute items-end'>
            <motion.div
                initial={{
                    height: "0vh", // Başlangıçta sıfır yükseklik
                    borderTopLeftRadius: "100% 100%",  // Üst sol köşe tamamen yuvarlak
                    borderTopRightRadius: "100% 100%", // Üst sağ köşe tamamen yuvarlak
                    borderBottomLeftRadius: "0px", // Alt sol köşe düz
                    borderBottomRightRadius: "0px" // Alt sağ köşe düz
                }}
                animate={{
                    height: "100vh", // Tam ekran yüksekliği
                    borderTopLeftRadius: "0px", // Üst sol köşe düz
                    borderTopRightRadius: "0px", // Üst sağ köşe düz
                    borderBottomLeftRadius: "0px", // Alt sol köşe düz
                    borderBottomRightRadius: "0px" // Alt sağ köşe düz
                }}
                transition={{

                    height: {
                        duration: 1,
                        delay: 1,
                    },
                    borderTopLeftRadius: {
                        duration: 2,
                        delay: 1,
                    },
                    borderTopRightRadius: {
                        duration: 2,
                        delay: 1,
                    },
                }}
                style={{ overflow: 'hidden' }}
            >

                <div className='min-h-full w-[100vw] bg-[#E1E1E1] ' />
            </motion.div>
        </div>

    )
}

export default Home