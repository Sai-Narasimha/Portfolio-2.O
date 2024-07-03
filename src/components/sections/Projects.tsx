import React from 'react'
import { motion } from 'framer-motion'

import rini from '../../assets/rini.png'
import maigrate from '../../assets/maigrate.png'
import maigrateLanding from '../../assets/maigrateLanding.png'
import gift4day from '../../assets/gift4day.png'
import ProjectCard from '../organisms/ProjectCard'
const Projects = () => {
    const [projects, setProjects] = React.useState([
        {
            title: 'Gift4Day',
            location: 'UK',
            role: 'Frontend Engineer',
            techStack: ['React Js', 'Redux/Toolkit', 'MUI',],
            image: gift4day,
            link: "https://www.gift4day.com/",
            description: 'A UK-based event management platform to streamline event organization and sharing. Users can create custom event links, invite guests via social media, and manage contributions and RSVPs easily.The platform enhances engagement and planning by integrating key features into a user- friendly interface.',
            keys: ['Generate Event Links', 'Admin Panel for All User Insights', 'Managing Landing Page Contents (CMS type)', 'Role based access']
        },
        {
            title: 'Maigrate',
            location: 'UK',
            role: 'Frontend Engineer',
            techStack: ['React Js', 'Redux/Toolkit', 'Tailwind'],
            image: maigrate,
            link: 'https://app.maigrate.com/',
            description: 'Maigrate revolutionizes knowledge interaction by enabling users to build bespoke copilot GPTs tailored to any subject or document. Utilizing provided materials such as articles or PDFs, It delivers precise answers, valuable suggestions, and curated images, enhancing information retrieval and user engagement.',
            keys: ['Clear Code Readablility', 'Google & Facebook Authentication', 'Embeded Chatbot', 'CRUD For Copilots']

        },
        {
            title: 'Maigrate Landing',
            location: 'UK',
            role: 'Frontend Engineer',
            techStack: ['React js', 'Tailwind'],
            image: maigrateLanding,
            link: 'https://www.maigrate.com/',
            description: 'Maigrate revolutionizes knowledge interaction by enabling users to build bespoke copilot GPTs tailored to any subject or document. Utilizing provided materials such as articles or PDFs, It delivers precise answers, valuable suggestions, and curated images, enhancing information retrieval and user engagement.',
            keys: ['Responisveness']

        },
        {
            title: 'RINI Landing',
            location: 'UK',
            role: 'Frontend Engineer',
            techStack: ['HTML', 'CSS', 'JavaScript'],
            image: rini,
            link: 'https://rini.truequations.com/',
            description: '',
            keys: ['User Friendly Access']
        },
        // {
        //     title: 'QLM Enterprises',
        //     location: 'Arab',
        //     role: 'Frontend Engineer',
        //     techStack: ['React Native'],
        //     image: '',
        //     link: '',
        //     description: '',
        //     keys:[]

        // },
        // {
        //     title: 'My Hooxy',
        //     location: 'Arab',
        //     role: 'Frontend Engineer',
        //     techStack: ['React Native'],
        //     image: '',
        //     link: "",
        //     description: '',
        //     keys:[]
        // },

        // {
        //     title: 'Dikazo',
        //     location: 'UK',
        //     role: 'Frontend Engineer',
        //     techStack: ['HTML','CSS','JavaScript',],
        //     image: '',
        //     link: '',
        //     description: '',
        //     keys:[]
        // },
    ])
    return (
        <motion.div
            className="absolute bg-[#3a4445] text-[#e5dfdf] flex items-center justify-center z-0"
            initial={{ width: '0%', height: '0%', top: '0%', right: '0%', borderBottomLeftRadius: '50%' }}
            animate={{ width: '100%', height: '100%', top: '0%', right: '0%', borderBottomLeftRadius: '0' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        // onClick={resetExpanded}
        >
            <div className="w-[fit-content] h-[80vh] lg:h-[auto] lg:w-[90%] m-auto lg:m-0 overflow-scroll hide_scrollbar">
                {/* {projects.map((project, index) => ( */}
                {/* <div key={index}> */}
                <ProjectCard projects={projects} />
                {/* </div>
        ))} */}
            </div>
        </motion.div>
    )
}

export default Projects