import React from 'react';

const Footer = () => {
    const handleScroll = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    };

    // Function to get current local time
    const getCurrentTime = () => {
        const now = new Date();
        const hours = now.getHours().toString().padStart(2, '0');
        const minutes = now.getMinutes().toString().padStart(2, '0');
        const seconds = now.getSeconds().toString().padStart(2, '0');
        return `${hours}:${minutes}:${seconds} PM, İST`;
    };

    const [time, setTime] = React.useState(getCurrentTime());

    React.useEffect(() => {
        const timer = setInterval(() => {
            setTime(getCurrentTime());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return (
        <footer className="w-full bg-[#E1E1E1] text-gray-800 py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Menu Column */}
                    <div>
                        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-300">Menu</h3>
                        <ul className="space-y-3">
                            <li><a onClick={(e) => handleScroll(e, 'Home')} href="#" className="hover:text-black transition-colors cursor-pointer">Home</a></li>
                            <li><a onClick={(e) => handleScroll(e, 'Hakkımda')} href="#" className="hover:text-black transition-colors cursor-pointer">Hakkımda</a></li>
                            <li><a onClick={(e) => handleScroll(e, 'Yetenekler')} href="#" className="hover:text-black transition-colors cursor-pointer">Yetenekler</a></li>
                            <li><a onClick={(e) => handleScroll(e, 'Projeler')} href="#" className="hover:text-black transition-colors cursor-pointer">Projeler</a></li>
                            <li><a onClick={(e) => handleScroll(e, 'İletişim')} href="#" className="hover:text-black transition-colors cursor-pointer">İletişim</a></li>
                        </ul>
                    </div>

                    {/* Socials Column */}
                    <div>
                        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-300">Socials</h3>
                        <ul className="space-y-3">
                            <li><a href='https://github.com/Vi303832'
                                target='_blank' rel="noopener noreferrer" className="hover:text-black transition-colors">Github</a></li>
                            <li><a href='https://www.linkedin.com/in/mehmetakiftanyeri-382458351/'
                                target='_blank' rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a></li>
                            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">YouTube</a></li>
                        </ul>
                    </div>

                    {/* Projeler Column */}
                    <div>
                        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-300">Projeler</h3>
                        <ul className="space-y-3">
                            <li><a onClick={(e) => handleScroll(e, 'Projeler')} href="#" className="hover:text-black transition-colors cursor-pointer">Kuf</a></li>
                            <li><a onClick={(e) => handleScroll(e, 'Projeler')} href="#" className="hover:text-black transition-colors cursor-pointer">Not</a></li>
                            <li><a onClick={(e) => handleScroll(e, 'Projeler')} href="#" className="hover:text-black transition-colors cursor-pointer">Ekip</a></li>
                            <li><a onClick={(e) => handleScroll(e, 'Projeler')} href="#" className="hover:text-black transition-colors cursor-pointer">Sultan</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="text-2xl font-bold mb-4 md:mb-0">
                        <p>© 2024 AKİF TANYERİ</p>
                        <p>All rights reserved.</p>
                    </div>

                    <div className="text-right">
                        <p className="text-gray-600 uppercase text-sm">LOCAL TIME</p>
                        <p className="text-gray-700">{time}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;