<div className='w-[30vh] h-[10vh] overflow-hidden rounded-full '>
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
        left: hovered ? "0" : "-100px"


      }}  // Hover durumuna göre genişlik ayarlanır
      transition={{ duration: 1 }}  // 2 saniyelik geçiş süresi
    />
  </div>


  {/*s*/}
  <div className='relative flex w-[52px]   '>
    <motion.div

      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}

      className="relative flex w-full h-full  overflow-hidden cursor-pointer ">
      {/* İlk buton - yukarı hareket eden buton */}
      <motion.button
        className="absolute h-full w-full  cursor-pointer"

        initial={{
          top: "-20px",
        }}
        animate={{
          top: hovered ? "0" : "-30px", // Hover durumu ile aşağı/ yukarı hareket
        }}
        transition={{ duration: 0.2 }} // 1 saniye geçiş süresi
      >Home</motion.button>

      {/* İkinci buton - içerik ile birlikte sabit kalan buton */}
      <motion.button
        className="absolute  w-full h-full  flex cursor-pointer"

        initial={{
          bottom: "0px",
        }}
        animate={{
          bottom: hovered ? "-20px" : "0px", // Hover durumu ile aşağı/ yukarı hareket
        }}
        transition={{ duration: "0.2" }}
      >
        <div className='z-30 absolute w-full h-full flex justify-center items-center cursor-pointer'>
          Home
        </div>
      </motion.button>

    </motion.div>
  </div>

  <div className='relative flex w-[80px]   '>
    <motion.div

      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}

      className="relative flex w-full h-full  overflow-hidden cursor-pointer ">
      {/* İlk buton - yukarı hareket eden buton */}
      <motion.button
        className="absolute h-full w-full  cursor-pointer"

        initial={{
          top: "-20px",
        }}
        animate={{
          top: hovered ? "0" : "-30px", // Hover durumu ile aşağı/ yukarı hareket
        }}
        transition={{ duration: 0.2 }} // 1 saniye geçiş süresi
      >About Me</motion.button>

      {/* İkinci buton - içerik ile birlikte sabit kalan buton */}
      <motion.button
        className="absolute  w-full h-full  flex cursor-pointer"

        initial={{
          bottom: "0px",
        }}
        animate={{
          bottom: hovered ? "-20px" : "0px", // Hover durumu ile aşağı/ yukarı hareket
        }}
        transition={{ duration: "0.2" }}
      >
        <div className='z-30 absolute w-full h-full flex justify-center items-center cursor-pointer'>
          About Me
        </div>
      </motion.button>

    </motion.div>
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
