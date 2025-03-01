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

</div>