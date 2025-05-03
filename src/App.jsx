import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import foto from "./assets/bg1.jpg";
import { motion, useScroll, useTransform } from 'framer-motion';
import Home from './Home';
import Works from './Works';
import { FaReact } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FiArrowDownRight } from "react-icons/fi";
import parse from 'html-react-parser';

import Skills2 from './Skills2';

import bg from "./assets/bg1.jpg";
import Contact from './Contact';
import Footer from './Footer';


function App() {





  let [started, setstarted] = useState(false)


  const xDivRef = useRef(null);
  const contentref = useRef(null);

  const ref = useRef(null);
  const ref4 = useRef(null);

  const { scrollYProgress } = useScroll({
    target: xDivRef, // Scroll pozisyonunu X DİV için takip et
    offset: ["0%", "100%"], /// Scroll başlangıcından bitişine kadar
  });



  const { scrollYProgress: scrollY2Progress } = useScroll({
    target: xDivRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: scrollY3Progress } = useScroll({
    target: ref, // Scroll pozisyonunu X DİV için takip et
    offset: ["0%", "100%"], /// Scroll başlangıcından bitişine kadar
  });


  const { scrollYProgress: scrollY4Progress } = useScroll({
    target: contentref, // Scroll pozisyonunu X DİV için takip et
    offset: ["0%", "100%"], /// Scroll başlangıcından bitişine kadar
  });


  const { scrollYProgress: ScrollWord } = useScroll({ target: ref, offset: ["0%", "100%"] });



  const o1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [1, 0.8, 0.6, 0.4, 0.2, 0]);
  const size1 = useTransform(scrollYProgress, [0.5, 1], [1, 0.5]);
  const opacity = useTransform(scrollY3Progress, [0, 0.3, 1], [1, 0.3, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.4, 1], [1, 0.6, 0.6]);


  const y1 = useTransform(scrollYProgress, [0, 1, 0], [0, 600, 0]);
  const y2 = useTransform(scrollYProgress, [0, 1, 0], [0, 100, 0]);
  const y3 = useTransform(scrollY4Progress, [0, 1, 0], [0, -400, 0]);

  {/*
  const y1 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 1], [0, 80, 160, 240, 320, 400]);
  const y2 = useTransform(scrollYProgress, [0, 0.2, 0.4, 0.6, 0.8, 0.9, 1], [0, 40, 80, 120, 140, 160, 200]);
*/}


  const aboutText = `
  <strong>Frontend geliştirme konusunda uzmanlaştım.</strong> 
  <br/><br/>
  Aynı zamanda backend tarafında da <strong>gerekli düzeyde teknik bilgiye sahibim</strong>; 
  projelerde tüm yapıyı anlayarak ilerliyorum.
  <br/><br/> 
  Çözüm odaklı, sürdürülebilir ve işlevsel ürünler üretmeye odaklanırım.
  <br/><br/>
  <strong>Sorumluluk almayı</strong> ve başladığım işi bitirmeyi önemserim.
  <br/><br/> 
  Yazılımı sadece kod değil, işe yarayan ürünler ortaya koymak olarak görüyorum.
`;

  const words = aboutText.split(" ");

  useEffect(() => {
    const timer = setTimeout(() => {
      setstarted(true)
    }, 100);

    {/*6000 */ }

    return () => clearTimeout(timer);
  }, []);


  const [hovered, setHovered] = useState(false);








  return (

    <div className="w-[100%] min-h-screen flex flex-col !scroll-smooth  bg-a -z-50 font-Poppins">

      {
        started
          ? <div className='bg-[#E1E1E1]  h-full w-full absolute' /> // Burada bg kullanılıyor
          : <div className="h-screen w-full bg-a absolute z-20"></div>
      }

      {/* Home Section */}
      <div


        id='home'
        className='h-screen !z-20     flex flex-col '>


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
          className="  z-10  w-full  h-[90%] overflow-hidden   px-10 "
          style={{
            opacity: o1,  // Kaydırmaya göre opaklık değişir
            y: y1,   // Kaydırmaya göre boyut değişir
            scale,
          }}
          initial={{ opacity: 0, scale: 0 }} // Başlangıçta gizli ve küçük
          animate={{ opacity: 1, scale: 1 }}  // Scroll ile görünür ve normal boyuta gelir
          transition={{ delay: 2, duration: 1 }} // 3 saniye sonra animasyon başlar
        >
          <div className=' w-full relative h-full   flex flex-col  justify-start font-Poppins '>

            <div className=' text-[13vw] h-[35vh]    w-full overflow-hidden    flex justify-start items-start'>
              <motion.div>
                <motion.div

                  initial={{
                    bottom: "-300px",

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

                  className=' flex items-center justify-between gap-10 font-bold w-full tracking-wide  max-xl:gap-5 flex-nowrap  max-md:items-start max-md:gap-10 max-sm:flex-col max-sm:gap-0 max-md:text-[10vw] '>

                  <div
                  >KİFA</div>
                  <div>TAYNERİ</div>

                </motion.div>
              </motion.div>

            </div>

            {/*Alt Kısım*/}
            <div className='flex   h-[55vh]   max-md:flex-col  w-full gap-2 '>
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
                    Modern ve kullanıcı odaklı web uygulamaları geliştiriyorum.
                    React, Next.js ve Node.js ile hızlı, ölçeklenebilir çözümler üretiyorum.

                  </motion.div>

                  <div className='flex gap-5 w-full justify-start items-center max-md:gap-2'>

                    {/*İletişim Butonu*/}
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


                    {/* CV Butonu */}
                    <div

                      className='w-[30vh] h-[10vh] overflow-hidden rounded-full  justify-center items-center cursor-pointer bg-yellow-700  text-white opacity-80 hidden ' >


                      Cv indir
                    </div>


                  </div>



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

                <img className='h-full w-[50%] object-cover' src='https://www.byhuy.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fprofile2.62ed58c9.avif&w=3840&q=75' />
                <div className='h-full w-[30%] flex justify-center flex-col  gap-10 items-center'>


                  <motion.a
                    initial={{ height: 0 }}
                    animate={{ height: "10%" }}
                    transition={{
                      duration: 1,
                      delay: 5
                    }}


                    href='https://github.com/Vi303832'
                    target='_blank'>
                    <FaGithub className='text-4xl max-xl:text-7xl w-full cursor-pointer hover:text-gray-700 h-full  ' />
                  </motion.a>
                  <motion.a
                    initial={{ height: 0 }}
                    animate={{ height: "10%" }}
                    transition={{
                      duration: 1,
                      delay: 5
                    }}


                    href=''>
                    <FaInstagram className='text-4xl max-xl:text-7xl w-full cursor-pointer hover:text-[#E1306C]  h-full  ' />
                  </motion.a>
                  <motion.a
                    initial={{ height: 0 }}
                    animate={{ height: "10%" }}
                    transition={{
                      duration: 1,
                      delay: 5
                    }}


                    href='https://www.linkedin.com/in/mehmetakiftanyeri-382458351/'
                    target='_blank'>
                    <FaLinkedin className='text-4xl max-xl:text-7xl w-full cursor-pointer hover:text-[#0A66C2]  h-full  ' />
                  </motion.a>

                  <motion.a
                    initial={{ height: 0 }}
                    animate={{ height: "10%" }}
                    transition={{
                      duration: 1,
                      delay: 5
                    }}


                    href='https://www.linkedin.com/in/mehmetakiftanyeri-382458351/'
                    target='_blank'>
                    <FaYoutube className='text-4xl max-xl:text-7xl w-full   h-full hover:text-[#FE0033]' />
                  </motion.a>

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
                        <span className='text-center flex items-center justify-center '>   (Frontend Developer)</span>
                      </motion.div>
                    </motion.div>

                  </div>

                </div>

              </motion.div>





            </div>



          </div>
        </motion.div >
      </div >

      {/* İçerik DİV */}
      <div






        className={`min-h-screen bg-transparent z-20 text-kbeyaz font-Poppins  ${started ? "" : "hidden"} `
        }>
        {/* Sayfa içeriği */}

        {/* Hakkımda Kısmı */}
        <div


          className="h-screen relative flex justify-center flex-col items-center bg-a  max-lg:h-[130vh]  rounded-t-4xl pb-40" >


          <motion.div

            className=" flex flex-col  w-[90%] h-[70%]  gap-10 ">

            {/*Home hitbox*/}
            <div
              ref={ref}

              className='w-[60vw] h-150 bg-amber-300 z-30 absolute opacity-30 -top-120 pointer-events-none   invisible'
            >


            </div>
            <div className='text-3xl text-beyaz'>Hakkımda</div>
            <div className='text-4xl  max-md:text-2xl  '>
              {words.map((word, index) => {
                // Her kelime için daha geniş bir scroll aralığı ve daha yumuşak geçiş
                const opacity = useTransform(
                  ScrollWord,
                  [
                    0.3 + (index / words.length * 0.6),  // Başlangıç pozisyonu (daha erken)
                    0.4 + (index / words.length * 0.6)   // Bitiş pozisyonu (daha geç)
                  ],
                  [0.1, 1]  // Tamamen görünmezden tamamen görünüre
                );

                return (
                  <motion.span
                    key={index}
                    style={{ opacity }}
                    className="inline-block  mr-2 my-1 whitespace-nowrap "
                    transition={{ duration: 0.5 }}  // Daha yavaş geçiş için
                  >
                    {word}
                  </motion.span>
                );
              })}

            </div>



          </motion.div>


        </div>

        {/*  Yetenekler*/}
        <motion.div


          style={{
            y: y3,
          }}
          initial={{ y: 100, }} // Başlangıçta gizli ve küçük
          animate={{ y: 0 }}  // Scroll ile görünür ve normal boyuta gelir
          className='z-20  '

        >


          <Skills2 />

        </motion.div>


        {/* Projeler */}
        <motion.div>
          <Works />
        </motion.div>

        {/* İletişim */}
        <motion.div>
          <Contact />
        </motion.div>

        {/* Footer */}
        <motion.div>
          <Footer />
        </motion.div>




      </div>

    </div >
  );
}

export default App;