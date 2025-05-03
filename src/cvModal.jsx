// CVModal.jsx
import { motion } from 'framer-motion';
import { useEffect } from 'react';
import cvPdf from './cv.pdf'; // Make sure this path is correct

const CVModal = ({ isOpen, onClose }) => {
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    if (!isOpen) return null;

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70"
            onClick={onClose}
        >
            <motion.div
                initial={{ scale: 0.8, y: 50 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.8, y: 50 }}
                className="relative bg-white rounded-lg w-full max-w-4xl h-[80vh] overflow-hidden"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-2xl z-10 text-gray-700 hover:text-black"
                    aria-label="Close modal"
                >
                    &times;
                </button>

                <div className="h-full w-full flex flex-col">
                    {/* PDF Viewer */}
                    <iframe
                        src={`${cvPdf}#view=fitH`}
                        className="w-full flex-grow"
                        title="CV Preview"
                        loading="lazy"
                    />

                    {/* Download Button */}
                    <div className="absolute bottom-4 right-4">
                        <a
                            href={cvPdf}
                            download="MehmetAkifTanyeri_CV.pdf"
                            className="bg-[#F1C40F] text-white px-4 py-2 rounded hover:bg-[#B7950B] transition flex items-center gap-2"
                        >
                            <span>CV'yi İndir</span>
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>
                        </a>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    );
};

export default CVModal;