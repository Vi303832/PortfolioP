import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import foto from "./assets/bg1.jpg";
import { motion, useScroll, useTransform } from 'framer-motion'; // useScroll ve useTransform eklendi
import Home from './Home';
import Works from './Works';
import { FaReact } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

import { FiArrowDownRight } from "react-icons/fi";
import Skills from './Skills';
import Skills2 from './Skills2';

function App() {


  let [started, setstarted] = useState(false)


  const xDivRef = useRef(null);



  const { scrollYProgress } = useScroll({
    target: xDivRef, // Scroll pozisyonunu X DİV için takip et
    offset: ["0%", "100%"], /// Scroll başlangıcından bitişine kadar
  });


  const aboutText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, corporis. Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, corporis.";
  const words = aboutText.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setstarted(true)
    }, 6500);

    return () => clearTimeout(timer);
  }, []);


  const [hovered, setHovered] = useState(false);

  const ref = useRef(null);


  const { scrollYProgress: ScrollWord } = useScroll({ target: ref, offset: ["0%", "100%"] });



  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [1, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.8, 1], [1, 0.8, 0]);

  return (
    <div className="w-[100%] min-h-screen flex flex-col scroll-smooth  bg-a -z-50 font-Poppins">



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
          className="  z-10  w-full  h-[85%] overflow-hidden   px-10 "
          style={{
            opacity,  // Kaydırmaya göre opaklık değişir
            scale,    // Kaydırmaya göre boyut değişir
          }}
          initial={{ opacity: 0, scale: 0 }} // Başlangıçta gizli ve küçük
          animate={{ opacity: 1, scale: 1 }}  // Scroll ile görünür ve normal boyuta gelir
          transition={{ delay: 2, duration: 1 }} // 3 saniye sonra animasyon başlar
        >
          <div className=' w-full relative h-full  flex flex-col  justify-start font-Poppins '>

            <div className=' text-[12vw] h-[30vh]  w-full overflow-hidden    flex justify-start items-start'>
              <motion.div

                initial={{
                  bottom: "-330px",
                  height: 0,
                  position: 'relative',
                  textSizeAdjust: 0,

                }}
                animate={{
                  height: "100%",
                  bottom: 0,
                  textSizeAdjust: "100%",


                }}
                transition={{ duration: 1, delay: 3.5 }}

                className=' flex items-center  font-bold w-full tracking-wide '>
                KİAF TERANYİ
              </motion.div>
            </div>

            {/*Alt Kısım*/}
            <div className='flex   h-[55vh]   max-md:flex-col   w-full gap-2'>
              <div className=' w-[50%] max-md:w-full'>


                <div className='flex flex-col max-md:hidden  gap-5 w-full  justify-start items-start '>
                  <motion.div

                    initial={{
                      scale: 0,

                    }}
                    animate={{

                      scale: 1,

                    }}
                    transition={{ duration: 1, delay: 6 }}

                  >
                    <FiArrowDownRight className='text-6xl max-md:text-5xl text-b ' />
                  </motion.div>


                  <motion.div
                    initial={{
                      opacity: 0,
                      left: "-100px"
                    }}
                    animate={{
                      left: 0,
                      opacity: 1,

                    }}
                    transition={{ duration: 1, delay: 4.5 }}

                    className='w-[70%] text-b text-xl relative '>
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit saepe aliquam commodi molestias animi voluptatum alias ea maxime rerum esse? Dolore ex sapiente harum veritatis, asperiores vitae expedita corporis sunt.
                  </motion.div>

                  <motion.div


                    initial={{
                      scale: 0,

                    }}
                    animate={{

                      scale: 1,

                    }}
                    transition={{ duration: 1, delay: 4.5 }}


                    className='w-[30vh] h-[10vh] overflow-hidden rounded-full '>
                    <div className="relative flex w-full h-full cursor-pointer ">
                      {/* Üstteki Buton */}
                      <motion.button
                        className="absolute w-full h-full bg-[#3B3835] text-white rounded-full cursor-pointer"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                      >
                        <div className='z-30 absolute  w-full h-full  top-[35%]'>İletişim</div>
                      </motion.button>

                      {/* Alttaki Buton */}
                      <motion.button
                        className="absolute w-0 h-full bg-[#85856F] text-white  rounded-full"
                        onMouseEnter={() => setHovered(true)}
                        onMouseLeave={() => setHovered(false)}
                        initial={{
                          width: "0",
                          left: "-100px",

                        }}
                        animate={{
                          width: hovered ? "100%" : "0",
                          left: hovered ? "0" : "-100px",


                        }}  // Hover durumuna göre genişlik ayarlanır
                        transition={{ duration: 1 }}  // 2 saniyelik geçiş süresi
                      />
                    </div>

                  </motion.div>




                </div>
              </div>


              <motion.div


                initial={{

                  height: 0
                }}
                animate={{

                  height: "100%"

                }}

                transition={{ duration: 1, delay: 5 }}


                className='w-[50%]  flex gap-2 object-cover  max-md:w-full'>

                <img className='h-full w-[70%] object-cover' src='https://www.byhuy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile2.62ed58c9.avif&w=3840&q=75' />
                <div className='h-full w-full flex justify-start flex-col gap-5 items-center'>
                  <motion.div
                    initial={{

                      height: 0
                    }}
                    animate={{

                      height: "70%"

                    }}

                    transition={{ duration: 1, delay: 5 }}

                    className='flex gap-10 flex-col     '
                  >
                    <FaLinkedin className='text-4xl' />
                    <FaGithub className='text-4xl' />
                    <FaInstagram className='text-4xl' />

                    <FaYoutube className='text-4xl' />
                  </motion.div>
                  <div className='relative h-[30px]  '>
                    <motion.div

                      initial={{
                        opacity: 0,


                      }}
                      animate={{

                        opacity: "100%"
                      }}
                      transition={{ duration: 3, delay: 4 }}
                      className='relative'
                    >
                      <motion.div

                        initial={{
                          left: "-400px",


                        }}
                        animate={{
                          left: 0,


                        }}
                        transition={{ duration: 1, delay: 4 }}
                        className='relative'
                      >
                        (Bridging Design & Development)
                      </motion.div>
                    </motion.div>

                  </div>

                </div>

              </motion.div>





            </div>



          </div>
        </motion.div>
      </div >


      <div className={`min-h-screen bg-beyaz text-kbeyaz font-Poppins ${started ? "" : "hidden"} `}>
        {/* Sayfa içeriği */}

        <div className="h-screen relative flex justify-center flex-col items-center bg-a  max-lg:h-[120vh] max-md:h-[140vh] max-sm:h-[170vh]  rounded-t-4xl" ref={ref}>
          <motion.div className=" flex flex-col  w-[90%] h-[70%]  max-md:h-[90%] gap-10 ">
            <div className='text-3xl text-beyaz'>Hakkımda</div>
            <div className='text-5xl'>
              {words.map((word, index) => {

                const opacity = useTransform(
                  scrollYProgress,
                  [index / words.length, (index + 1) / words.length],
                  [0.1, 1]
                );

                return (
                  <motion.span
                    key={index}
                    style={{ opacity }} // Kelimenin opaklığını ayarla
                    className="inline-block mr-2"
                  >
                    {word}
                  </motion.span>
                );
              })}

            </div>



          </motion.div>

          <div className='h-2 w-[90%] absolute bottom-0 '>
            <hr></hr>
            <hr></hr>
          </div>
        </div>


        <Skills2 />

        <div className='w-full relative'>
          <hr className='w-[90%]' />
        </div>


        <Works />
      </div>

    </div >
  );
}

export default App;