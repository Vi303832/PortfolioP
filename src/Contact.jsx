import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaTimes, FaEnvelope, FaClock, FaShare, FaPaperPlane, FaArrowRight } from "react-icons/fa";

export default function Contact() {
    const [hovered, setHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <div className="min-h-screen w-full flex flex-col px-6 md:px-10 lg:px-16 pb-24 bg-[#E1E1E1] overflow-hidden  text-a ">
            {/* İletişim Header - Left aligned with reduced height */}
            <div className="w-full relative min-h-[30vh] flex flex-col justify-center items-start font-Poppins my-10">
                <div className="text-[13vw] w-full overflow-hidden flex justify-start items-center">
                    <motion.div

                        className="flex items-center justify-start gap-10 font-bold w-full tracking-wide max-xl:gap-5 flex-nowrap max-md:items-start max-md:gap-10 max-sm:flex-col max-sm:gap-0  "
                    >
                        <div>İLETİŞİM</div>
                    </motion.div>
                </div>
            </div>

            {/* Hero Section with dark background */}
            <div className="w-full bg-[#131311] text-white py-32 rounded-lg">
                <div className="max-w-4xl flex items-center justify-center mx-auto   ">
                    <motion.div

                        className="mb-12"
                    >
                        <p className="text-sm text-gray-400 mb-2 flex justify-center w-full">(Sade, hızlı ve etkili uygulamalar geliştiriyorum.)</p>
                        <h2 className="text-5xl md:text-6xl font-bold mb-10">SIRADAKİ SİZİN OLABİLİR</h2>

                        {/* Button with improved animation */}
                        <div className="flex justify-center">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-[30vh] h-[10vh] overflow-hidden rounded-full"
                            >
                                <div className="relative flex w-full h-full cursor-pointer" onClick={() => setIsModalOpen(true)}>
                                    {/* Üstteki Buton */}
                                    <motion.button
                                        className="absolute w-full h-full bg-[#3B3835] text-white rounded-full cursor-pointer flex items-center justify-center"
                                        onMouseEnter={() => setHovered(true)}
                                        onMouseLeave={() => setHovered(false)}
                                    >
                                        <div className="z-30 absolute w-full h-full flex items-center justify-center">İletişime Geç</div>
                                    </motion.button>

                                    {/* Alttaki Buton */}
                                    <motion.button
                                        className="absolute h-full bg-[#85856F] text-white rounded-full"
                                        onMouseEnter={() => setHovered(true)}
                                        onMouseLeave={() => setHovered(false)}
                                        initial={{
                                            width: "0",
                                            left: "-100px",
                                        }}
                                        animate={{
                                            width: hovered ? "100%" : "0",
                                            left: hovered ? "0" : "-100px",
                                        }}
                                        transition={{ duration: 0.8 }}
                                    />
                                </div>
                            </motion.div>
                        </div>
                    </motion.div>
                </div>
            </div>

            {isModalOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4">
                    <div className="sm:max-w-[850px] w-full bg-[#131311] text-white rounded-lg shadow-xl overflow-hidden mx-auto my-auto">
                        <div className="flex justify-between items-center p-6 border-b border-gray-700">
                            <h2 className="text-2xl font-bold text-white">İletişim</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="rounded-full p-1 hover:bg-gray-700 transition-colors cursor-pointer"
                            >
                                <FaTimes className="h-5 w-5 text-gray-300 " />
                                <span className="sr-only">Close</span>
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <p className="text-gray-300 text-lg">
                                        Projeniz veya iş birliği teklifiniz için bana ulaşın. En kısa sürede dönüş yapacağım.
                                    </p>

                                    <div className="space-y-5">
                                        <div className="bg-[#1a1a18] p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold mb-3 flex items-center">
                                                <FaEnvelope className="mr-2 text-[#85856F]" />
                                                İletişim Bilgileri
                                            </h3>
                                            <div className="space-y-2 pl-1">
                                                <p className="text-gray-300 flex items-center">
                                                    <span className="w-20 inline-block text-gray-400">Email:</span>
                                                    <span>contact@kifa.com</span>
                                                </p>
                                                <p className="text-gray-300 flex items-center">
                                                    <span className="w-20 inline-block text-gray-400">Telefon:</span>
                                                    <span>+90 555 123 4567</span>
                                                </p>
                                                <p className="text-gray-300 flex items-center">
                                                    <span className="w-20 inline-block text-gray-400">Konum:</span>
                                                    <span>İstanbul, Türkiye</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-[#1a1a18] p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold mb-3 flex items-center">
                                                <FaClock className="mr-2 text-[#85856F]" />
                                                Çalışma Saatleri
                                            </h3>
                                            <div className="space-y-2 pl-1">
                                                <p className="text-gray-300">Pazartesi - Cuma: 9:00 - 18:00</p>
                                                <p className="text-gray-300">Hafta sonu: Kapalı</p>
                                            </div>
                                        </div>

                                        <div className="bg-[#1a1a18] p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold mb-3 flex items-center">
                                                <FaShare className="mr-2 text-[#85856F]" />
                                                Sosyal Medya
                                            </h3>
                                            <div className="flex space-x-5 pl-1">
                                                <FaLinkedin className="text-2xl text-gray-300 hover:text-[#85856F] cursor-pointer transition-colors" />
                                                <FaGithub className="text-2xl text-gray-300 hover:text-[#85856F] cursor-pointer transition-colors" />
                                                <FaInstagram className="text-2xl text-gray-300 hover:text-[#85856F] cursor-pointer transition-colors" />
                                                <FaYoutube className="text-2xl text-gray-300 hover:text-[#85856F] cursor-pointer transition-colors" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#1a1a18] p-5 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                                        <FaPaperPlane className="mr-2 text-[#85856F]" />
                                        Mesaj Gönder
                                    </h3>
                                    <div className="space-y-4">
                                        <div>
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                                İsim
                                            </label>
                                            <input
                                                id="name"
                                                className="w-full bg-[#222] border border-gray-700 rounded-md p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#85856F] focus:border-[#85856F]"
                                                placeholder="Adınız Soyadınız"
                                            />
                                        </div>

                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                                    Email
                                                </label>
                                                <input
                                                    id="email"
                                                    type="email"
                                                    className="w-full bg-[#222] border border-gray-700 rounded-md p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#85856F] focus:border-[#85856F]"
                                                    placeholder="ornek@email.com"
                                                />
                                            </div>

                                            <div>
                                                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                                                    Telefon
                                                </label>
                                                <input
                                                    id="phone"
                                                    type="tel"
                                                    className="w-full bg-[#222] border border-gray-700 rounded-md p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#85856F] focus:border-[#85856F]"
                                                    placeholder="+90 555 123 4567"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                                Mesaj
                                            </label>
                                            <textarea
                                                id="message"
                                                className="w-full bg-[#222] border border-gray-700 rounded-md p-2.5 text-white min-h-[140px] focus:outline-none focus:ring-1 focus:ring-[#85856F] focus:border-[#85856F]"
                                                placeholder="Mesajınızı buraya yazın..."
                                            />
                                        </div>

                                        <button className="w-full bg-[#85856F] hover:bg-[#6d6d5c] text-white py-3 rounded-md transition-colors duration-300 flex items-center justify-center font-medium cursor-pointer">
                                            Gönder
                                            <FaArrowRight className="ml-2" />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            )}
        </div>
    );
}