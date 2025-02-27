import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import foto from "./assets/bg1.jpg";
import { motion, useScroll, useTransform } from 'framer-motion'; // useScroll ve useTransform eklendi
import Home from './Home';
import { FiArrowDownRight } from "react-icons/fi";

function App() {


  // Scroll pozisyonunu takip etmek için bir ref oluştur
  const xDivRef = useRef(null);

  // useScroll hook'u ile scroll pozisyonunu al
  const { scrollYProgress } = useScroll({
    target: xDivRef, // Scroll pozisyonunu X DİV için takip et
    offset: ["0%", "100%"], /// Scroll başlangıcından bitişine kadar
  });

  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.3, 0]); // Yüksekliğin yarısında opaklık yarıya düşer ve sonuna gelindiğinde 0 olur
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0]); // Yüksekliğin yarısında boyut yarıya düşer ve sonuna gelindiğinde 0 olur

  return (
    <div className="w-[100%] min-h-screen flex flex-col  bg-black -z-20 font-Poppins">

      {/* Home Section */}
      <div className='h-screen   flex flex-col'>


        <Home />


        <motion.div
          className="z-30 w-full relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <Navbar />
        </motion.div>

        {/* X DİV için kalan tüm yüksekliği kapla */}
        <motion.div
          ref={xDivRef}
          className="  z-10  w-full  h-[85%] overflow-hidden  px-10 "
          style={{
            opacity,  // Kaydırmaya göre opaklık değişir
            scale,    // Kaydırmaya göre boyut değişir
          }}
          initial={{ opacity: 0, scale: 0 }} // Başlangıçta gizli ve küçük
          animate={{ opacity: 1, scale: 1 }}  // Scroll ile görünür ve normal boyuta gelir
          transition={{ delay: 3, duration: 1 }} // 3 saniye sonra animasyon başlar
        >
          <div className=' w-full relative h-full  flex flex-col  justify-start font-Poppins '>

            <div className=' text-[12vw] h-[30vh] w-full   flex justify-start items-start'>
              <div className=' flex items-center h-full font-bold w-full  '>
                KİAF TERANYİ
              </div>
            </div>

            {/*Alt Kısım*/}
            <div className='flex   h-[55vh]   max-md:flex-col   w-full gap-2'>
              <div className=' w-[50%] max-md:w-full'>


                <div className='flex flex-col max-md:hidden  gap-5 w-full  justify-start items-start '>
                  <FiArrowDownRight className='text-6xl max-md:text-5xl text-b ' />

                  <div className='w-[70%] text-b text-xl '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe aliquam commodi molestias animi voluptatum alias ea maxime rerum esse? Dolore ex sapiente harum veritatis, asperiores vitae expedita corporis sunt.
                  </div>

                  <div className=" outline-0 h-[70px] w-50 flex justify-center  rounded-4xl items-center cursor-pointer  text-beyaz  text-2xl overflow-hidden">
                    <motion.div
                      style={{
                        backgroundColor: "#3B3835",


                      }}
                      whileHover={{
                        backgroundColor: "#85856F",
                        y: [0, -2, 0],
                        scale: [1, 1.2, 1],
                      }}
                      initial={{
                        scale: 1,
                        y: 0,
                      }}
                      animate={{
                        scale: 1,
                        y: 0
                      }}
                      transition={{
                        duration: 1, // Toplam animasyon süresi

                        y: {
                          duration: 1, // y animasyonunun süresi


                        },
                        scale: {
                          duration: 1,


                        },

                        backgroundColor: {
                          duration: 1, // Arka plan rengi değişim süresi

                        },
                      }}
                      className='h-full w-full flex items-center justify-center rounded-4xl'
                    >
                      İletişim

                    </motion.div>
                  </div>


                </div>
              </div>


              <div className='w-[50%]  flex gap-2  max-md:w-full'>
                <img className='h-full w-[70%] object-cover' src='https://www.byhuy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile2.62ed58c9.avif&w=3840&q=75' />
                <div className='h-full w-full flex justify-start items-center'>
                  (Frontend Dev)
                </div>
              </div>





            </div>



          </div>
        </motion.div>
      </div >


      <div className='min-h-[1000vh]  bg-black z-10' >
        sadasdasdasdasds
      </div>

    </div >
  );
}

export default App;