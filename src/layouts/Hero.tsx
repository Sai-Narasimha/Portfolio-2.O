import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/organisms/About';


const Hero = () => {
    const [expanded, setExpanded] = React.useState<string>('');

    const toggleExpanded = (component: string) => {
        setExpanded(component === expanded ? '' : component);
    };

    const resetExpanded = () => {
        setExpanded('');
    };

    return (
        <div className="h-[100vh] flex justify-center items-center bg-[#e5dfdf] relative">
            {/* Experience */}
            <div className={`absolute left-0 top-0 text-[22px] p-4 text-center ${expanded === 'experience' ? 'bg-[#e5dfdf] text-[#3a4445]' : 'bg-[#3a4445] text-[#e5dfdf]'} cursor-pointer z-10`}
                style={{ borderRadius: "0% 0% 50% 0%" }}
                onClick={() => toggleExpanded('experience')}>
                <h1>Experience</h1>
            </div>
            {expanded === 'experience' && (
                <motion.div
                    className="absolute bg-[#3a4445] text-[#e5dfdf] flex items-center justify-center z-0"
                    initial={{ width: '0%', height: '0%', top: '0%', left: '0%', borderBottomRightRadius: '50%' }}
                    animate={{ width: '100%', height: '100%', top: '0%', left: '0%', borderBottomRightRadius: '0px' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={resetExpanded}
                >
                    <div className="w-[50%] ">

                        <div className="text-[36px] text-center bg-[#e5dfdf] text-[#3a4445]">TrueEquations Pvt Ltd</div>
                        <div className='flex justify-between'>
                            <div className='text-[20px]'>Software Developer 1</div>
                            <div className='text-[20px]'>Nov 2021  -  Present</div>
                        </div>

                        <div className='text-[22px] text-justify'>I have been a proactive Frontend Developer, significantly contributing to the success of various projects. My
                            primary focus has been on developing and enhancing web applications using React.js and React Native,
                            ensuring high performance and an excellent user experience.</div>
                    </div>
                </motion.div>
            )}

            {/* Projects */}
            <div className={`absolute right-0 top-0 text-[22px] p-4 text-center ${expanded === 'projects' ? 'bg-[#e5dfdf] text-[#3a4445]' : 'bg-[#3a4445] text-[#e5dfdf]'} cursor-pointer z-10`}
                style={{ borderRadius: "0% 0% 0% 50%" }}
                onClick={() => toggleExpanded('projects')}>
                <h1>Projects</h1>
            </div>
            {expanded === 'projects' && (
                <motion.div
                    className="absolute bg-[#3a4445] text-[#e5dfdf] flex items-center justify-center z-0"
                    initial={{ width: '0%', height: '0%', top: '0%', right: '0%', borderBottomLeftRadius: '50%' }}
                    animate={{ width: '100%', height: '100%', top: '0%', right: '0%', borderBottomLeftRadius: '0' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={resetExpanded}
                >
                    <div className="h-[200px] w-[200px]">Projects Content</div>
                </motion.div>
            )}

            {/* Education */}
            <div className={`absolute left-0 bottom-0 text-[22px] p-4 text-center ${expanded === 'education' ? 'bg-[#e5dfdf] text-[#3a4445]' : 'bg-[#3a4445] text-[#e5dfdf]'} cursor-pointer z-10`}
                style={{ borderRadius: "0% 50% 0% 0%" }}
                onClick={() => toggleExpanded('education')}>
                <h1>Education</h1>
            </div>
            {expanded === 'education' && (
                <motion.div
                    className="absolute bg-[#3a4445] text-[#e5dfdf] flex items-center justify-center z-0"
                    initial={{ width: '0%', height: '0%', bottom: '0%', left: '0%', borderTopRightRadius: '50%' }}
                    animate={{ width: '100%', height: '100%', bottom: '0%', left: '0%', borderTopRightRadius: '0' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={resetExpanded}
                >
                    <div className="h-[200px] w-[200px]">Education Content</div>
                </motion.div>
            )}

            {/* Contact */}
            <div className={`absolute right-0 bottom-0 text-[22px] p-4 text-center ${expanded === 'contact' ? 'bg-[#e5dfdf] text-[#3a4445]' : 'bg-[#3a4445] text-[#e5dfdf]'} cursor-pointer z-10`}
                style={{ borderRadius: "50% 0% 0% 0%" }}
                onClick={() => toggleExpanded('contact')}>
                <h1>Contact</h1>
            </div>
            {expanded === 'contact' && (
                <motion.div
                    className="absolute bg-[#3a4445] text-[#e5dfdf] flex items-center justify-center z-0"
                    initial={{ width: '0%', height: '0%', bottom: '0%', right: '0%', borderTopLeftRadius: '50%' }}
                    animate={{ width: '100%', height: '100%', bottom: '0%', right: '0%', borderTopLeftRadius: '0px' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={resetExpanded}
                >
                    <div className="h-[200px] w-[200px]">Contact Content</div>
                </motion.div>
            )}

            {/* Profile and Description */}
            {expanded === '' && (
                <About />
            )}

        </div>
    );
};

export default Hero;
