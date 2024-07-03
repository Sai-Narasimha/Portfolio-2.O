import React from 'react'
import { motion } from 'framer-motion'
import Contact from './Contact'
const Skills = () => {
    const [techSkills, setTechSkills] = React.useState<any>([{ name: "HTML", projects: 4, experience: '1.0 Years' }, { name: "CSS", projects: 4, experience: '1.7 Years' }, { name: "Bootstrap", projects: 2, experience: ' 0.6 Years' }, { name: "Tailwind CSS", projects: 2, experience: '0.6 Years' }, { name: "Material UI", projects: 3, experience: '1.0 Years' }, { name: "Chakra UI", projects: 1, experience: '0.3 Years' }, { name: 'JavaScript', projects: 4, experience: '1.5 Years' }, { name: 'React JS', projects: 5, experience: '1.7 Years' }, { name: "Redux/Toolkit", projects: 4, experience: '1.7 Years' }, { name: 'Node Js', projects: 1, experience: '0.3 Years' }, { name: 'Express Js', projects: 1, experience: '0.3 Years' }, { name: "MongoDB", projects: 1, experience: '0.3 Years' }, { name: "Github", projects: 7, expereience: '2.0 Years' },])
    return (
        <motion.div
            className="absolute bg-[#3a4445] text-[#e5dfdf] flex items-center justify-center z-0"
            initial={{ width: '0%', height: '0%', bottom: '0%', right: '0%', borderTopLeftRadius: '50%' }}
            animate={{ width: '100%', height: '100%', bottom: '0%', right: '0%', borderTopLeftRadius: '0px' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        // onClick={resetExpanded}
        >
            <div className="flex gap-5 w-[90%] justify-around">
                <div className='grid grid-cols-1 lg:grid-cols-4 gap-7 '>
                    {techSkills.map((tech: any, index: number) => (<div className='grid-item text-[28px] bg-[#e5dfdf] text-[#3a4445] shadow-md shadow-[#e5dfdf] rounded-md text-center p-1' key={index}>{tech.name}</div>))}
                </div>
                <Contact/>
            </div>
        </motion.div>
    )
}

export default Skills