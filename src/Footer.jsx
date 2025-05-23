import React from 'react';

const Footer = ({ lang = 'tr' }) => {
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

    // Metinler
    const texts = {
        menu: { tr: 'Menü', en: 'Menu' },
        socials: { tr: 'Sosyal', en: 'Socials' },
        projects: { tr: 'Projeler', en: 'Projects' },
        copyright: { tr: 'Tüm hakları saklıdır.', en: 'All rights reserved.' },
        localTime: { tr: 'YEREL SAAT', en: 'LOCAL TIME' },
        projectNames: [
            { tr: 'Kuf', en: 'Kuf' },
            { tr: 'Not', en: 'Not' },
            { tr: 'Ekip', en: 'Ekip' },
            { tr: 'Sultan', en: 'Sultan' },
        ],
        menuItems: [
            { id: 'Home', tr: 'Anasayfa', en: 'Home' },
            { id: 'Hakkımda', tr: 'Hakkımda', en: 'About' },
            { id: 'Yetenekler', tr: 'Yetenekler', en: 'Skills' },
            { id: 'Projeler', tr: 'Projeler', en: 'Projects' },
            { id: 'İletişim', tr: 'İletişim', en: 'Contact' },
        ],
        socialsList: [
            { name: { tr: 'Github', en: 'Github' }, url: 'https://github.com/Vi303832' },
            { name: { tr: 'LinkedIn', en: 'LinkedIn' }, url: 'https://www.linkedin.com/in/mehmetakiftanyeri-382458351/' },
            { name: { tr: 'YouTube', en: 'YouTube' }, url: 'https://youtube.com' },
        ],
    };

    return (
        <footer className="w-full bg-[#E1E1E1] text-gray-800 py-12 px-6 md:px-12">
            <div className="max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Menu Column */}
                    <div>
                        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-300">{texts.menu[lang]}</h3>
                        <ul className="space-y-3">
                            {texts.menuItems.map((item) => (
                                <li key={item.id}><a onClick={(e) => handleScroll(e, item.id)} href="#" className="hover:text-black transition-colors cursor-pointer">{item[lang]}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials Column */}
                    <div>
                        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-300">{texts.socials[lang]}</h3>
                        <ul className="space-y-3">
                            {texts.socialsList.map((item, i) => (
                                <li key={i}><a href={item.url} target='_blank' rel="noopener noreferrer" className="hover:text-black transition-colors">{item.name[lang]}</a></li>
                            ))}
                        </ul>
                    </div>

                    {/* Projeler Column */}
                    <div>
                        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-300">{texts.projects[lang]}</h3>
                        <ul className="space-y-3">
                            {texts.projectNames.map((item, i) => (
                                <li key={i}><a onClick={(e) => handleScroll(e, 'Projeler')} href="#" className="hover:text-black transition-colors cursor-pointer">{item[lang]}</a></li>
                            ))}
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="text-2xl font-bold mb-4 md:mb-0">
                        <p>© 2025 AKİF TANYERİ</p>
                        <p>{texts.copyright[lang]}</p>
                    </div>

                    <div className="text-right">
                        <p className="text-gray-600 uppercase text-sm">{texts.localTime[lang]}</p>
                        <p className="text-gray-700">{time}</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;