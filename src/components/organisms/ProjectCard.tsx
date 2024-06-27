// Carousel.js

import React, { useState } from 'react';
import { motion } from 'framer-motion'
const ProjectCard = ({ projects }: any) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const nextImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === projects.length - 1 ? 0 : prevIndex + 1));
    };

    const prevImage = () => {
        setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? projects.length - 1 : prevIndex - 1));
    };

    return (
        <div className="relative">
            <div className="overflow-hidden">
                {projects.map((project: any, index: any) => {
                    if (currentImageIndex === index) {
                        return (
                            <motion.div
                                key={index}
                                className="w-full h-auto object-cover"
                                style={{ minWidth: '100%' }}
                                initial={{ opacity: 0 }}
                                animate={{ opacity: 1 }}
                                exit={{ opacity: 0 }}
                                transition={{ duration: 0.3 }}
                            >
                                <div className="flex">
                                    <img
                                        src={project.image}
                                        alt={`Slide ${index + 1}`}
                                        className="h-auto object-cover w-[60%]"
                                    />
                                    <div className='w-[40%] border border-1 border-[red]'>
                                        <div>
                                            project Name : {project.title}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>

                        )
                    }
                }
                )}

            </div>
            <div className="absolute inset-y-0 left-0 flex items-center">
                <button
                    className="bg-gray-800 text-white px-4 py-2 mr-2 rounded z-10"
                    onClick={prevImage}
                >
                    Prev
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                    className="bg-gray-800 text-white px-4 py-2 ml-2 rounded"
                    onClick={nextImage}
                >
                    Next
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
