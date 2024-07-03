import React from 'react';
import { motion } from 'framer-motion';
import About from '../components/sections/About';
import Education from '../components/sections/Education';
import Projects from '../components/sections/Projects';
import Experience from '../components/sections/Experience';
import Contact from '../components/sections/Contact';
import Skills from '../components/sections/Skills';

const Hero = () => {
    const [expanded, setExpanded] = React.useState<string>('');

    const toggleExpanded = (component: string) => {
        setExpanded(component === expanded ? '' : component);
    };

    return (
        <div className="h-[100vh] flex justify-center items-center bg-[#e5dfdf] relative">
            {/* Experience */}
            <div className={`absolute left-0 top-0 text-[22px] p-4 text-center ${expanded !== 'experience' ? 'bg-[#e5dfdf] text-[#3a4445]' : 'bg-[#3a4445] text-[#e5dfdf]'} cursor-pointer z-10`}
                style={{ borderRadius: "0% 0% 50% 0%" }}
                onClick={() => toggleExpanded('experience')}>
                <h1>Experience</h1>
            </div>
            {expanded === 'experience' && (
                <Experience />
            )}

            {/* Projects */}
            <div className={`absolute right-0 top-0 text-[22px] p-4 text-center ${expanded !== 'projects' ? 'bg-[#e5dfdf] text-[#3a4445]' : 'bg-[#3a4445] text-[#e5dfdf]'} cursor-pointer z-10`}
                style={{ borderRadius: "0% 0% 0% 50%" }}
                onClick={() => toggleExpanded('projects')}>
                <h1>Projects</h1>
            </div>
            {expanded === 'projects' && (
                <Projects />
            )}

            {/* Education */}
            <div className={`absolute left-0 bottom-0 text-[22px] p-4 text-center ${expanded !== 'education' ? 'bg-[#e5dfdf] text-[#3a4445]' : 'bg-[#3a4445] text-[#e5dfdf]'} cursor-pointer z-10`}
                style={{ borderRadius: "0% 50% 0% 0%" }}
                onClick={() => toggleExpanded('education')}>
                <h1>Education</h1>
            </div>
            {expanded === 'education' && (
                <Education />
            )}

            {/* Contact */}
            <div className={`absolute right-0 bottom-0 text-[22px] p-4 text-center ${expanded !== 'skills' ? 'bg-[#e5dfdf] text-[#3a4445]' : 'bg-[#3a4445] text-[#e5dfdf]'} cursor-pointer z-10`}
                style={{ borderRadius: "50% 0% 0% 0%" }}
                onClick={() => toggleExpanded('skills')}>
                <h1>Skills</h1>
            </div>
            {expanded === 'skills' && (
                <Skills />
            )}

            {/* Profile and Description */}
            {expanded === '' && (
                <About />
            )}

        </div>
    );
};

export default Hero;
