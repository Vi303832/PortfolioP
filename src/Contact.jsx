import { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaInstagram, FaYoutube, FaTimes, FaEnvelope, FaShare, FaPaperPlane, FaArrowRight } from "react-icons/fa";

export default function Contact({ lang = 'tr' }) {
    const [hovered, setHovered] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [formStatus, setFormStatus] = useState({
        submitted: false,
        submitting: false,
        info: { error: false, msg: null }
    });
    const [inputs, setInputs] = useState({
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    // Metinler
    const texts = {
        contact: { tr: 'İletişim', en: 'Contact' },
        heroDesc: { tr: '(Sade, hızlı ve etkili uygulamalar geliştiriyorum.)', en: '(I develop simple, fast and effective applications.)' },
        heroTitle: { tr: 'SIRADAKİ SİZİN OLABİLİR', en: 'YOU COULD BE NEXT' },
        contactBtn: { tr: 'İletişime Geç', en: 'Contact Me' },
        modalDesc: { tr: 'Projeniz veya iş birliği teklifiniz için bana ulaşın. En kısa sürede dönüş yapacağım.', en: 'Contact me for your project or collaboration offer. I will get back to you as soon as possible.' },
        infoTitle: { tr: 'İletişim Bilgileri', en: 'Contact Information' },
        email: { tr: 'Email', en: 'Email' },
        phone: { tr: 'Telefon', en: 'Phone' },
        location: { tr: 'Konum', en: 'Location' },
        locationValue: { tr: 'Bursa, Türkiye', en: 'Bursa, Turkey' },
        socialTitle: { tr: 'Sosyal Medya', en: 'Social Media' },
        sendMsg: { tr: 'Mesaj Gönder', en: 'Send Message' },
        name: { tr: 'İsim', en: 'Name' },
        namePh: { tr: 'Adınız Soyadınız', en: 'Your Name' },
        emailPh: { tr: 'ornek@email.com', en: 'example@email.com' },
        phonePh: { tr: '+90 555 123 4567', en: '+90 555 123 4567' },
        msg: { tr: 'Mesaj', en: 'Message' },
        msgPh: { tr: 'Mesajınızı buraya yazın...', en: 'Write your message here...' },
        send: { tr: 'Gönder', en: 'Send' },
        sending: { tr: 'Gönderiliyor...', en: 'Sending...' },
        success: { tr: 'Mesajınız başarıyla gönderildi!', en: 'Your message has been sent successfully!' },
        error: { tr: 'Bir hata oluştu. Lütfen tekrar deneyin.', en: 'An error occurred. Please try again.' },
    };

    const handleOnChange = e => {
        setInputs(prev => ({
            ...prev,
            [e.target.id]: e.target.value
        }));
    };

    const handleOnSubmit = async e => {
        e.preventDefault();
        setFormStatus(prevStatus => ({ ...prevStatus, submitting: true }));

        try {
            const res = await fetch('https://formspree.io/f/xqaqpvwv', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(inputs)
            });

            const json = await res.json();

            if (res.ok) {
                setFormStatus({
                    submitted: true,
                    submitting: false,
                    info: { error: false, msg: texts.success[lang] }
                });
                setInputs({
                    name: '',
                    email: '',
                    phone: '',
                    message: ''
                });
            } else {
                setFormStatus({
                    submitted: false,
                    submitting: false,
                    info: { error: true, msg: json.error || texts.error[lang] }
                });
            }
        } catch (error) {
            setFormStatus({
                submitted: false,
                submitting: false,
                info: { error: true, msg: texts.error[lang] }
            });
        }
    };

    return (
        <div className="min-h-screen w-full flex flex-col px-6 md:px-10 lg:px-16 pb-24 bg-[#E1E1E1] overflow-hidden text-a z-100 max-md:pt-80">
            {/* İletişim Header - Left aligned with reduced height */}
            <div className="w-full relative min-h-[30vh] flex flex-col justify-center items-start font-Poppins my-10">
                <div className="text-[13vw] w-full overflow-hidden flex justify-start items-center">
                    <motion.div
                        id="İletişim"
                        className="flex items-center justify-start gap-10 font-bold w-full tracking-wide max-xl:gap-5 flex-nowrap max-md:items-start max-md:gap-10 max-sm:flex-col max-sm:gap-0"
                    >
                        <div>{texts.contact[lang].toUpperCase()}</div>
                    </motion.div>
                </div>
            </div>

            {/* Hero Section with dark background */}
            <div className="w-full bg-[#131311] text-white py-32 rounded-lg">
                <div className="max-w-4xl flex items-center justify-center mx-auto">
                    <motion.div
                        className="mb-12"
                    >
                        <p className="text-sm text-gray-400 mb-2 flex justify-center w-full max-md:text-center">{texts.heroDesc[lang]}</p>
                        <h2 className="text-5xl md:text-6xl max-md:text-center font-bold mb-10">{texts.heroTitle[lang]}</h2>

                        {/* Button with improved animation */}
                        <div className="flex justify-center cursor-pointer">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.6, ease: "easeOut" }}
                                className="w-[30vh] h-[10vh] overflow-hidden rounded-full cursor-pointer"
                            >
                                <div className="relative flex w-full h-full cursor-pointer" onClick={() => setIsModalOpen(true)}>
                                    {/* Üstteki Buton */}
                                    <motion.button
                                        className="absolute w-full h-full bg-[#3B3835] text-white rounded-full cursor-pointer flex items-center justify-center"
                                        onMouseEnter={() => setHovered(true)}
                                        onMouseLeave={() => setHovered(false)}
                                    >
                                        <div className="z-30 absolute w-full h-full flex items-center justify-center cursor-pointer">{texts.contactBtn[lang]}</div>
                                    </motion.button>

                                    {/* Alttaki Buton */}
                                    <motion.button
                                        className="absolute h-full bg-[#85856F] text-white rounded-full cursor-pointer"
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
                <div className="fixed inset-0 bg-black bg-opacity-60 flex items-center justify-center z-50 p-4 overflow-y-scroll">
                    <div className="sm:max-w-[850px] w-full bg-[#131311] text-white rounded-lg shadow-xl overflow-hidden mx-auto my-auto">
                        <div className="flex justify-between items-center p-6 border-b border-gray-700">
                            <h2 className="text-2xl font-bold text-white">{texts.contact[lang]}</h2>
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="rounded-full p-1 hover:bg-gray-700 transition-colors cursor-pointer"
                            >
                                <FaTimes className="h-5 w-5 text-gray-300 cursor-pointer" />
                                <span className="sr-only">Close</span>
                            </button>
                        </div>

                        <div className="p-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div className="space-y-6">
                                    <p className="text-gray-300 text-lg">
                                        {texts.modalDesc[lang]}
                                    </p>

                                    <div className="space-y-5">
                                        <div className="bg-[#1a1a18] p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold mb-3 flex items-center">
                                                <FaEnvelope className="mr-2 text-[#85856F]" />
                                                {texts.infoTitle[lang]}
                                            </h3>
                                            <div className="space-y-2 pl-1">
                                                <p className="text-gray-300 flex items-center">
                                                    <span className="w-20 inline-block text-gray-400">{texts.email[lang]}:</span>
                                                    <span>mehmetakiftanyerii@hotmail.com</span>
                                                </p>
                                                <p className="text-gray-300 flex items-center">
                                                    <span className="w-20 inline-block text-gray-400">{texts.phone[lang]}:</span>
                                                    <span>+90 530 023 85 80</span>
                                                </p>
                                                <p className="text-gray-300 flex items-center">
                                                    <span className="w-20 inline-block text-gray-400">{texts.location[lang]}:</span>
                                                    <span>{texts.locationValue[lang]}</span>
                                                </p>
                                            </div>
                                        </div>

                                        <div className="bg-[#1a1a18] p-4 rounded-lg">
                                            <h3 className="text-lg font-semibold mb-3 flex items-center">
                                                <FaShare className="mr-2 text-[#85856F]" />
                                                {texts.socialTitle[lang]}
                                            </h3>
                                            <div className="flex space-x-5 pl-1">
                                                <a
                                                    href="https://www.linkedin.com/in/mehmetakiftanyeri-382458351/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaLinkedin className="text-2xl text-gray-300 hover:text-[#85856F] cursor-pointer transition-colors" />
                                                </a>
                                                <a
                                                    href="https://github.com/Vi303832"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    <FaGithub className="text-2xl text-gray-300 hover:text-[#85856F] cursor-pointer transition-colors" />
                                                </a>
                                                <a

                                                >
                                                    <FaInstagram className="text-2xl text-gray-300 pointer-events-none cursor-pointer transition-colors" />
                                                </a>
                                                <a

                                                >
                                                    <FaYoutube className="text-2xl text-gray-300  pointer-events-none cursor-pointer transition-colors" />
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="bg-[#1a1a18] p-5 rounded-lg">
                                    <h3 className="text-lg font-semibold mb-4 flex items-center">
                                        <FaPaperPlane className="mr-2 text-[#85856F]" />
                                        {texts.sendMsg[lang]}
                                    </h3>

                                    {formStatus.submitted ? (
                                        <div className="bg-a bg-opacity-20 border border-[#85856F] rounded-md p-4 text-center">
                                            <p className="text-green-400 font-medium">{formStatus.info.msg}</p>
                                        </div>
                                    ) : (
                                        <form onSubmit={handleOnSubmit} className="space-y-4">
                                            {formStatus.info.error && (
                                                <div className="bg-red-800 bg-opacity-20 border border-red-700 rounded-md p-3">
                                                    <p className="text-red-400 text-sm">{formStatus.info.msg}</p>
                                                </div>
                                            )}

                                            <div>
                                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-1">
                                                    {texts.name[lang]}
                                                </label>
                                                <input
                                                    id="name"
                                                    name="name"
                                                    value={inputs.name}
                                                    onChange={handleOnChange}
                                                    required
                                                    className="w-full bg-[#222] border border-gray-700 rounded-md p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#85856F] focus:border-[#85856F]"
                                                    placeholder={texts.namePh[lang]}
                                                />
                                            </div>

                                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                                <div>
                                                    <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                                                        {texts.email[lang]}
                                                    </label>
                                                    <input
                                                        id="email"
                                                        name="email"
                                                        type="email"
                                                        value={inputs.email}
                                                        onChange={handleOnChange}
                                                        required
                                                        className="w-full bg-[#222] border border-gray-700 rounded-md p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#85856F] focus:border-[#85856F]"
                                                        placeholder={texts.emailPh[lang]}
                                                    />
                                                </div>

                                                <div>
                                                    <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-1">
                                                        {texts.phone[lang]}
                                                    </label>
                                                    <input
                                                        id="phone"
                                                        name="phone"
                                                        type="tel"
                                                        value={inputs.phone}
                                                        onChange={handleOnChange}
                                                        className="w-full bg-[#222] border border-gray-700 rounded-md p-2.5 text-white focus:outline-none focus:ring-1 focus:ring-[#85856F] focus:border-[#85856F]"
                                                        placeholder={texts.phonePh[lang]}
                                                    />
                                                </div>
                                            </div>

                                            <div>
                                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-1">
                                                    {texts.msg[lang]}
                                                </label>
                                                <textarea
                                                    id="message"
                                                    name="message"
                                                    value={inputs.message}
                                                    onChange={handleOnChange}
                                                    required
                                                    className="w-full bg-[#222] border border-gray-700 rounded-md p-2.5 text-white min-h-[140px] focus:outline-none focus:ring-1 focus:ring-[#85856F] focus:border-[#85856F]"
                                                    placeholder={texts.msgPh[lang]}
                                                />
                                            </div>

                                            <button
                                                type="submit"
                                                disabled={formStatus.submitting}
                                                className="w-full bg-[#85856F] hover:bg-[#6d6d5c] text-white py-3 rounded-md transition-colors duration-300 flex items-center justify-center font-medium cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
                                            >
                                                {formStatus.submitting ? texts.sending[lang] : (
                                                    <>
                                                        {texts.send[lang]}
                                                        <FaArrowRight className="ml-2" />
                                                    </>
                                                )}
                                            </button>
                                        </form>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}