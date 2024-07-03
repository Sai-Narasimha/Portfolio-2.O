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
        <div className="relative ">
            <div className="overflow-hidden  p-4">
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
                                <div className="text-center text-[34px] font-bold underline">
                                    <a href={project.link} target="_blank">{project.title} - {project.role}</a>
                                </div>
                                <div className="block lg:flex gap-5 w-[90%] m-auto">
                                    <img
                                        src={project.image}
                                        alt={`Slide ${index + 1}`}
                                        className="h-auto object-cover w-[100%] lg:w-[60%] rounded-md"
                                    />
                                    <div className='w-[100%] lg:w-[40%] '>
                                        <div className={'text-[18px] text-justify'}>{project.description}</div>
                                        <div className='block lg:flex mt-2 justify-around'>
                                            <div >
                                                <div className=' underline text-[17px]'>
                                                    Key Features
                                                </div>
                                                <ul className='list-disc '>
                                                    {project.keys.map((key: string, index: number) => (
                                                        <li key={index}>{key}</li>
                                                    ))}
                                                </ul>
                                            </div>
                                            <div >
                                                <div className='underline text-[17px]'>Tech Stack</div>
                                                <ul className='list-disc'>
                                                    {project.techStack.map((tech: string, index: number) => (
                                                        <li key={index}>{tech}</li>
                                                    ))}
                                                </ul>
                                            </div>
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
                    className="bg-gray-800 text-white text-[28px] px-4  mr-2 rounded z-10"
                    onClick={prevImage}
                >
                    &lt;
                </button>
            </div>
            <div className="absolute inset-y-0 right-0 flex items-center">
                <button
                    className="bg-gray-800 text-white text-[28px] px-4  mr-2 rounded z-10"
                    onClick={nextImage}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default ProjectCard;
