import React from 'react'
import profile from '../assets/profile.jpeg'
import { motion } from 'framer-motion';
interface ExpandedState {
    experience: boolean;
    projects: boolean;
    education: boolean;
    contact: boolean;
};
const Hero = () => {

    const [expanded, setExpanded] = React.useState<ExpandedState>({
        experience: false,
        projects: false,
        education: false,
        contact: false
    })
    const toggleExpanded = (component: keyof ExpandedState) => {
        setExpanded((prev) => ({
            experience: component === 'experience' ? !prev.experience : false,
            projects: component === 'projects' ? !prev.projects : false,
            education: component === 'education' ? !prev.education : false,
            contact: component === 'contact' ? !prev.contact : false
        }));

    };
    const resetExpanded = () => {
        setExpanded({
            experience: false,
            projects: false,
            education: false,
            contact: false
        })
    }

    return (
        <div className="h-[100vh] flex justify-center items-center bg-[#e5dfdf]" >
            {/* experience */}
            <div className={`absolute bg-[#3a4445] text-[#e5dfdf] left-0 top-0 text-[22px] p-4 text-center`} style={{ borderRadius: "0% 0% 50% 0%", cursor: 'pointer' }} onClick={() => toggleExpanded('experience')}>
                <h1>Experience</h1>
            </div>
            {expanded.experience && (
                <motion.div
                    className="absolute bg-[#3a4445] text-[#e5dfdf] text-center text-[22px] flex items-center justify-center"
                    initial={{ width: '0%', height: '0%', top: '0%', left: '0%' }}
                    animate={{ width: '100%', height: '100%', top: '0%', left: '0%' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={resetExpanded}
                >
                    <div className="h-[200px] w-[200px]  ">


                    </div>
                </motion.div>
            )
            }

            {/* projects */}
            <div className={` bg-[#3a4445] text-[#e5dfdf] absolute right-0 top-0 text-[22px]  p-4  text-center`} style={{ borderRadius: "0% 0% 0% 50%", cursor: 'pointer' }} onClick={() => toggleExpanded('projects')}><h1>Projects</h1>
            </div>

            {expanded.projects && (
                <motion.div
                    className="absolute bg-[#3a4445] text-[#e5dfdf] text-center text-[22px] flex items-center justify-center"
                    initial={{ width: '0%', height: '0%', top: '0%', right: '0%' }}
                    animate={{ width: '100%', height: '100%', top: '0%', right: '0%' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={resetExpanded}
                >
                    <div className="h-[200px] w-[200px]  ">


                    </div>
                </motion.div>
            )}

            <div className={`  ${expanded.education ? 'text-[#3a4445] bg-[#e5dfdf] ' : 'bg-[#3a4445] text-[#e5dfdf]'} absolute text-[#e5dfdf] left-0 bottom-0 text-[22px] bg-[#3a4445] p-4  text-center`} style={{ borderRadius: "0% 50% 0% 0%", cursor: 'pointer' }} onClick={() => toggleExpanded('education')}><h1>Education</h1> </div>

            {expanded.education && (
                <motion.div
                    className="absolute bg-[#3a4445] text-[#e5dfdf] text-center text-[22px] flex items-center justify-center"
                    initial={{ width: '0%', height: '0%', bottom: '0%', left: '0%' }}
                    animate={{ width: '100%', height: '100%', bottom: '0%', left: '0%' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={resetExpanded}
                >
                    <div className="h-[200px] w-[200px]  ">


                    </div>
                </motion.div>
            )}
            <div className={`${expanded.contact ? 'text-[#3a4445] bg-[#e5dfdf] ' : 'bg-[#3a4445] text-[#e5dfdf]'} absolute text-[#e5dfdf] right-0 bottom-0 text-[22px] bg-[#3a4445] p-4  text-center`} style={{ borderRadius: "50% 0% 0% 0%", cursor: 'pointer' }} onClick={() => toggleExpanded('contact')}> <h1>Contact</h1></div>
            {expanded.contact && (
                <motion.div
                    className="absolute bg-[#3a4445] text-[#e5dfdf] text-center text-[22px] flex items-center justify-center"
                    initial={{ width: '0%', height: '0%', bottom: '0%', right: '0%' }}
                    animate={{ width: '100%', height: '100%', bottom: '0%', right: '0%' }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    onClick={resetExpanded}
                >
                    <div className="h-[200px] w-[200px]  ">


                    </div>
                </motion.div>
            )}
            {
                !expanded.experience && !expanded.contact && !expanded.education && !expanded.projects && <div className='sm:block lg:flex sm:w-[60%] lg:w-[70%] items-center'>
                    <div className='w-[100%] lg:[40%]'>
                        <img src={profile} alt="profile" className='rounded-[100%] h-[400px] w-[400px]' style={{ objectFit: 'cover', }} />
                    </div>
                    <div className='w-[100%] lg:[60%]'>
                        <div className='text-[44px] font-bold text-center text-[#e5dfdf] bg-[#3a4445]' >I'm Sai Narasimha</div>
                        <div className='mt-2 text-[18px] text-justify'>Dedicated Frontend Developer with 1.8 years of experience in building responsive and user-friendly web
                            applications. Experienced in collaborating with cross-functional teams to deliver high-quality solutions.
                            Skilled in Agile project management, ensuring efficient project delivery. Known for excellent problemsolving abilities, teamwork, and attention to detail, consistently enhancing user experiences and driving
                            innovation.
                        </div>
                        <div className="flex gap-1 w-[fit-content] mt-3">
                            <a href="https://drive.google.com/file/d/1WkVTXqSwoHnz3bzdjcP5NA3fAqyHrlDU/view?usp=sharing"><button className="bg-[#3a4445] text-[#e5dfdf] px-4 py-1 text-[18px] rounded-md">Resume</button></a>
                            <a href="https://github.com/Sai-Narasimha/"><button className="bg-[#3a4445] text-[#e5dfdf] px-4 py-1 text-[18px] rounded-md">Github</button></a>
                            <a href="https://www.linkedin.com/in/sai-narasimha-sn/"><button className="bg-[#3a4445] text-[#e5dfdf] px-4 py-1 text-[18px] rounded-md">Linkedin</button></a>
                        </div>
                    </div>
                </div>
            }
        </div >
    )
}

export default Hero