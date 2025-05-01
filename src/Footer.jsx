import React from 'react';

const Footer = () => {
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
                            <li><a href="/" className="hover:text-black transition-colors">Home</a></li>
                            <li><a href="/hakkimda" className="hover:text-black transition-colors">Hakkımda</a></li>
                            <li><a href="/yetenekler" className="hover:text-black transition-colors">Yetenekler</a></li>
                            <li><a href="/projeler" className="hover:text-black transition-colors">Projeler</a></li>
                            <li><a href="/iletisim" className="hover:text-black transition-colors">İletişim</a></li>
                        </ul>
                    </div>

                    {/* Socials Column */}
                    <div>
                        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-300">Socials</h3>
                        <ul className="space-y-3">
                            <li><a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">Github</a></li>
                            <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">LinkedIn</a></li>
                            <li><a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">YouTube</a></li>
                        </ul>
                    </div>

                    {/* Projeler Column */}
                    <div>
                        <h3 className="text-xl font-medium mb-4 pb-2 border-b border-gray-300">Projeler</h3>
                        <ul className="space-y-3">
                            <li><a href="/projeler/kuf" className="hover:text-black transition-colors">Kuf</a></li>
                            <li><a href="/projeler/not" className="hover:text-black transition-colors">Not</a></li>
                            <li><a href="/projeler/ekip" className="hover:text-black transition-colors">Ekip</a></li>
                            <li><a href="/projeler/sultan" className="hover:text-black transition-colors">Sultan</a></li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 flex flex-col md:flex-row justify-between items-start md:items-center">
                    <div className="text-2xl font-bold mb-4 md:mb-0">
                        <p>© 2024 KIFA TAYNERI</p>
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