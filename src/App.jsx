import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
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
import TransitionSection from './transaction.jsx';
import Skills2 from './Skills2';
import CVModal from './cvModal.jsx';
import Contact from './Contact';
import Footer from './Footer';
import profile from './assets/profile.jpeg';

const MAX_WORDS = 50;

function App() {
  const [isCVModalOpen, setIsCVModalOpen] = useState(false);
  const openCVModal = () => setIsCVModalOpen(true);
  const closeCVModal = () => setIsCVModalOpen(false);

  // İletişim modalı için state
  const [isContactModalOpen, setIsContactModalOpen] = useState(false);

  let [started, setstarted] = useState(false);

  // Dil state'i
  const [lang, setLang] = useState('tr');
  const toggleLang = () => setLang((prev) => (prev === 'tr' ? 'en' : 'tr'));

  // Main container reference for parallax scrolling
  const mainContainerRef = useRef(null);
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const skillsRef = useRef(null);
  const worksRef = useRef(null);
  const contentRef = useRef(null);
  const contactRef = useRef(null);

  // Reference for ScrollWords effect - keeping this as requested
  const scrollWordsRef = useRef(null);

  // Main scroll progress
  const { scrollYProgress } = useScroll({
    target: mainContainerRef,
    offset: ["start start", "end end"],
  });

  const { scrollYProgress: homeProgress } = useScroll({
    target: homeRef,
    offset: ["start ", " end"],
  });

  // Parallax etkileri - yumuşak ve daha az şiddetli
  const homeParallax = useTransform(scrollYProgress, [0, 0.3, 0.4], [0, 500, 0]);
  const aboutParallax = useTransform(scrollYProgress, [0.1, 0.4, 0.5], [0, 80, 0]);
  const skillsParallax = useTransform(scrollYProgress, [0.1, 0.7, 0.8], [0, -400, 0]);
  const worksParallax = useTransform(scrollYProgress, [0.3, 0.6, 0.7], [0, -800, 0]);

  // For the words animation in About section - keeping the ScrollWord functionality
  const { scrollYProgress: ScrollWord } = useScroll({
    target: scrollWordsRef,
    offset: ["0%", "100%"]
  });

  const aboutText = `
  <strong>Frontend geliştirme </strong>konusunda <strong>uzmanlaşan bir geliştiriciyim.</strong><br/>
  Aynı zamanda <strong>backend</strong>  tarafında da  <strong>gerekli düzeyde</strong> teknik bilgiye sahibim;
  projelerde tüm yapıyı anlayarak  işimi ileriye taşıyorum.<br/>
  Çözüm odaklı, sürdürülebilir ve işlevsel ürünler üretmeye odaklanırım.
  <strong>Sorumluluk</strong> almayı ve başladığım <strong>işi bitirmeyi önemserim.</strong>
  Yazılımı sadece kod değil, işe yarayan ürünler ortaya koymak olarak görüyorum.
`;

  const aboutTextEn = `
  <strong>Frontend development</strong> is where I <strong>specialize as a developer.</strong><br/>
  I also possess <strong>necessary technical knowledge</strong> in <strong>backend</strong> development;
  I advance my work by understanding the entire structure of projects.<br/>
  I focus on creating solution-oriented, sustainable, and functional products.
  I value taking <strong>responsibility</strong> and <strong>completing what I start.</strong>
  I see software development not just as code, but as creating products that make a difference.
`;
  // useTransform hook'larını bileşen dışında önceden tanımlayalım
  const useWordOpacity = (scrollProgress, index) => {
    return useTransform(
      scrollProgress,
      [0.3 + (index / 100 * 0.6), 0.4 + (index / 100 * 0.6)],
      [0.1, 1]
    );
  };

  // Ana bileşen içinde
  const wordOpacities = Array.from({ length: MAX_WORDS }, (_, i) =>
    useTransform(
      ScrollWord,
      [0.3 + (i / 100 * 0.6), 0.4 + (i / 100 * 0.6)],
      [0.1, 1]
    )
  );

  // 3. Orijinal render fonksiyonunuz (sadece opacity kaynağını değiştirin)
  const renderWords = () => {
    const text = lang === 'tr' ? aboutText : aboutTextEn;
    const elements = [];
    let wordIndex = 0;

    const processNode = (node) => {
      if (typeof node === 'string') {
        node.split(' ').forEach((word) => {
          if (word.trim() && wordIndex < MAX_WORDS) {
            elements.push(
              <motion.span
                key={`word-${wordIndex}`}
                style={{ opacity: wordOpacities[wordIndex] }}
                className="inline-block mr-1.5 my-1 whitespace-nowrap"
              >
                {word}
              </motion.span>
            );
            wordIndex++;
          }
        });
      } else if (node.type === 'strong') {
        node.props.children.split(' ').forEach((word) => {
          if (word.trim() && wordIndex < MAX_WORDS) {
            elements.push(
              <motion.span
                key={`strong-${wordIndex}`}
                style={{ opacity: wordOpacities[wordIndex] }}
                className="inline-block font-bold text-[#85856F] mr-1.5 whitespace-nowrap"
              >
                {word}
              </motion.span>
            );
            wordIndex++;
          }
        });
      } else if (node.type === 'br') {
        elements.push(<br key={`br-${wordIndex}`} className="my-4" />);
      }
    };

    parse(text).forEach(processNode);

    // Eksik kelimeler için boş span'ler (hook sırasını korumak için)
    while (wordIndex < MAX_WORDS) {
      elements.push(
        <span
          key={`empty-${wordIndex}`}
          className="inline-block opacity-0"
          style={{ width: "10px" }}
        />
      );
      wordIndex++;
    }

    return elements;
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      setstarted(true)
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  const [hovered, setHovered] = useState(false);
  const [cvHovered, setcvHovered] = useState(false);

  return (
    <div ref={mainContainerRef} className="w-[100%] min-h-screen flex flex-col !scroll-smooth
    -z-999
    bg-[#E1E1E1] font-Poppins">

      {started ? "" : <div className="h-screen w-full bg-a absolute"></div>}

      {/* Home Section with Parallax */}
      <motion.div
        ref={homeRef}
        style={{
          y: homeParallax,
        }}
        id='Home'
        className='h-screen max-h-[700px] !z-20 flex flex-col'
      >
        <Home />

        <motion.div
          className="z-50 w-full relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
        >
          <Navbar lang={lang} />
        </motion.div>

        <div className="!z-30 w-full h-[90%] overflow-hidden px-10">
          <div className='w-full relative h-full flex flex-col justify-start font-Poppins'>
            <div className='text-[13vw] h-[35vh] max-md:h-fit max-md:text-[20vw] w-full overflow-hidden flex justify-start items-start'>
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
                  className='flex items-center justify-between gap-10 font-bold w-full tracking-wide max-xl:gap-5 flex-nowrap max-md:items-start max-md:gap-10 max-sm:flex-col max-sm:gap-0 max-md:text-[10vw]'
                >
                  <div>AKİF</div>
                  <div>TANYERİ</div>
                </motion.div>
              </motion.div>
            </div>

            {/*Alt Kısım*/}
            <div className='flex h-[55vh] max-md:flex-col w-full gap-2'>
              <div className='w-[50%] max-md:w-full'>
                <div className='flex flex-col gap-5 w-full justify-start items-start'>
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 1, delay: 6 }}
                  >
                    <FiArrowDownRight className='text-6xl max-md:text-5xl text-b' />
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, left: "-100px" }}
                    animate={{ left: 0, opacity: 1 }}
                    transition={{ duration: 1, delay: 4.5 }}
                    className='w-[70%] text-b text-xl relative max-md:w-full'
                  >
                    {lang === 'tr'
                      ? 'Modern ve kullanıcı odaklı web uygulamaları geliştiriyorum. React, Next.js ve Node.js ile hızlı, ölçeklenebilir çözümler üretiyorum.'
                      : 'I develop modern and user-oriented web applications. I produce fast, scalable solutions with React, Next.js and Node.js.'}
                  </motion.div>

                  <div className='flex gap-5 w-full justify-start items-center max-md:gap-2'>
                    {/*Dil Butonu*/}
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, delay: 4.5 }}
                      className='w-[30vh] h-[10vh] overflow-hidden rounded-full'
                    >
                      <div className="relative flex w-full h-full cursor-pointer">
                        {/* Üstteki Buton */}
                        <motion.button
                          className="absolute w-full h-full bg-[#3B3835] text-white rounded-full cursor-pointer"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                          onClick={toggleLang}
                        >
                          <div className='z-30 absolute w-full h-full top-[35%]'>
                            {lang === 'tr' ? 'For English' : 'Türkçe için'}
                          </div>
                        </motion.button>

                        {/* Alttaki Buton */}
                        <motion.button
                          className="absolute w-0 h-full bg-[#85856F] text-white rounded-full"
                          onMouseEnter={() => setHovered(true)}
                          onMouseLeave={() => setHovered(false)}
                          initial={{ width: "0", left: "-100px" }}
                          animate={{
                            width: hovered ? "100%" : "0",
                            left: hovered ? "0" : "-100px",
                          }}
                          transition={{ duration: 1 }}
                        />
                      </div>
                    </motion.div>

                    {/* CV Butonu
                          <motion.div
                      className='w-[30vh] h-[10vh] overflow-hidden rounded-full relative'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, delay: 4.5 }}
                    >
                      <div className="relative flex w-full h-full cursor-pointer">
                        
                        <motion.button
                          className="absolute w-full h-full bg-[#B7950B] text-white rounded-full cursor-pointer"
                          onMouseEnter={() => setcvHovered(true)}
                          onMouseLeave={() => setcvHovered(false)}
                          onClick={openCVModal}
                        >
                          <div className='z-30 absolute w-full h-full top-[35%]'>{lang === 'tr' ? 'CV İndir' : 'Download CV'}</div>
                        </motion.button>

                        
                        <motion.button
                          className="absolute w-0 h-full bg-[#F1C40F] text-white rounded-full"
                          onMouseEnter={() => setcvHovered(true)}
                          onMouseLeave={() => setcvHovered(false)}
                          initial={{ width: "0", left: "-100px" }}
                          animate={{
                            width: cvHovered ? "100%" : "0",
                            left: cvHovered ? "0" : "-100px",
                          }}
                          transition={{ duration: 1 }}
                          onClick={openCVModal}
                        />
                      </div>
                    </motion.div>


                    */}

                    <motion.div
                      className='w-[30vh] h-[10vh] overflow-hidden rounded-full relative'
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 1, delay: 4.5 }}
                    >
                      <div className="relative flex w-full h-full cursor-pointer">
                        {/* Üstteki Buton */}
                        <motion.button
                          className="absolute w-full h-full bg-[#B7950B] text-white rounded-full cursor-pointer"
                          onMouseEnter={() => setcvHovered(true)}
                          onMouseLeave={() => setcvHovered(false)}
                          onClick={() => {
                            contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            setTimeout(() => {
                              setIsContactModalOpen(true);
                            }, 1000);
                          }}
                        >
                          <div className='z-30 absolute w-full h-full top-[35%]'>{lang === 'tr' ? 'İletişim' : 'Contact'}</div>
                        </motion.button>

                        {/* Alttaki Buton */}
                        <motion.button
                          className="absolute w-0 h-full bg-[#F1C40F] text-white rounded-full"
                          onMouseEnter={() => setcvHovered(true)}
                          onMouseLeave={() => setcvHovered(false)}
                          initial={{ width: "0", left: "-100px" }}
                          animate={{
                            width: cvHovered ? "100%" : "0",
                            left: cvHovered ? "0" : "-100px",
                          }}
                          transition={{ duration: 1 }}
                          onClick={() => {
                            contactRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                            setTimeout(() => {
                              setIsContactModalOpen(true);
                            }, 2000);
                          }}
                        />
                      </div>
                    </motion.div>


                  </div>
                </div>
              </div>

              <motion.div
                initial={{ height: 0 }}
                animate={{ height: "100%" }}
                transition={{ duration: 1, delay: 5 }}
                className='w-[50%] flex gap-2 object-cover max-md:hidden'
              >
                <img className='h-full w-[50%] object-cover' src={profile} />
                <div className='h-full w-[30%] flex justify-center flex-col gap-10 items-center'>
                  <motion.a
                    initial={{ height: 0 }}
                    animate={{ height: "10%" }}
                    transition={{ duration: 1, delay: 5 }}
                    href='https://github.com/Vi303832'
                    target='_blank'
                  >
                    <FaGithub className='text-4xl max-xl:text-7xl w-full cursor-pointer hover:text-gray-700 h-full' />
                  </motion.a>
                  <motion.a
                    initial={{ height: 0 }}
                    animate={{ height: "10%" }}
                    transition={{ duration: 1, delay: 5 }}

                  >
                    <FaInstagram className='text-4xl max-xl:text-7xl w-full cursor-pointer hover:text-[#E1306C] h-full pointer-events-none ' />
                  </motion.a>
                  <motion.a
                    initial={{ height: 0 }}
                    animate={{ height: "10%" }}
                    transition={{ duration: 1, delay: 5 }}
                    href='https://www.linkedin.com/in/mehmetakiftanyeri-382458351/'
                    target='_blank'
                  >
                    <FaLinkedin className='text-4xl max-xl:text-7xl w-full cursor-pointer hover:text-[#0A66C2] h-full' />
                  </motion.a>
                  <motion.a
                    initial={{ height: 0 }}
                    animate={{ height: "10%" }}
                    transition={{ duration: 1, delay: 5 }}

                  >
                    <FaYoutube className='text-4xl max-xl:text-7xl w-full h-full hover:text-[#FE0033] pointer-events-none' />
                  </motion.a>
                  <div className='relative h-[30px]'>
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: "100%" }}
                      transition={{ duration: 3, delay: 4 }}
                      className='relative'
                    >
                      <motion.div
                        initial={{ left: "-400px" }}
                        animate={{ left: 0 }}
                        transition={{ duration: 1, delay: 4 }}
                        className='relative'
                      >
                        <span className='text-center flex items-center justify-center'>
                          {lang === 'tr' ? '(Frontend Geliştirici)' : '(Frontend Developer)'}
                        </span>
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Content Section with Parallax */}
      <div className={`min-h-screen bg-[#E1E1E1] z-20 text-kbeyaz font-Poppins ${started ? "" : "hidden"}`}>
        {/* Hakkımda Section with Parallax */}
        <motion.div
          ref={aboutRef}
          style={{ y: aboutParallax }}
          className="h-fit relative flex justify-center flex-col items-center bg-a max-md:text-lg rounded-t-4xl pb-40 pt-20"
        >
          <motion.div className="flex flex-col w-[90%] h-[70%] gap-10">
            {/* ScrollWords reference */}
            <div

              ref={scrollWordsRef}
              className='w-[60vw] h-280 z-30 absolute -top-150 pointer-events-none max-md:h-400  opacity-30'
            />

            <div
              id="Hakkımda"
              className='text-3xl text-beyaz'>{lang === 'tr' ? 'Hakkımda' : 'About'}</div>
            <div

              className="text-[40px] max-md:text-2xl leading-relaxed max-[400px]:!text-xl">
              {renderWords()}
            </div>
          </motion.div>
        </motion.div>

        {/* Yetenekler Section with Parallax */}
        <motion.div

          ref={skillsRef}
          style={{ y: skillsParallax }}
          className='z-20'
        >
          <Skills2 lang={lang} />
        </motion.div >

        {/* Projeler Section with Parallax - worksRef ekleme */}
        <motion.div

          ref={worksRef}
          style={{ y: worksParallax }}
          className="relative works-container"
        >
          <Works lang={lang} />

          {/* TransitionSection artık sabit pozisyonlu değil */}
          <motion.div className="relative min-md:pt-15">
            <TransitionSection lang={lang} />
          </motion.div>
        </motion.div>

        {/* İletişim */}
        <motion.div
          ref={contactRef}
          className=''>
          <Contact lang={lang} isModalOpen={isContactModalOpen} setIsModalOpen={setIsContactModalOpen} />
        </motion.div>

        {/* Footer */}
        <motion.div>
          <Footer lang={lang} />
        </motion.div>

        <CVModal isOpen={isCVModalOpen} onClose={closeCVModal} lang={lang} />
      </div>
    </div>
  );
}

export default App;