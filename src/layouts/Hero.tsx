import React from 'react'
import profile from '../assets/profile.jpeg'
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

    return (
        <div className="h-[100vh] flex justify-center items-center bg-[#e5dfdf]" >
            <div className={`${expanded.experience ? 'w-full h-full bg-[#3a4445] transition-all duration-1000 ease-in-out' : 'absolute text-[#e5dfdf]  left-0 top-0 text-[22px] bg-[#3a4445] p-4  text-center'}`} style={{
                borderRadius: expanded.experience ? '0%' : '0% 0% 40% 0%',
            }}
                onClick={() => toggleExpanded('experience')}>Experience</div>
            <div className={`${expanded.projects ? 'w-full h-full bg-[#3a4445] transition-all duration-1000 ease-in-out' : 'absolute text-[#e5dfdf] right-0 top-0 text-[22px] bg-[#3a4445] p-4  text-center'}`} style={{ borderRadius: expanded.projects ? '0%' : "0% 0% 0% 50%" }} onClick={() => toggleExpanded('projects')}>Projects</div>
            <div className={`${expanded.education ? 'w-full h-full bg-[#3a4445] transition-all duration-1000 ease-in-out' : 'absolute text-[#e5dfdf] left-0 bottom-0 text-[22px] bg-[#3a4445] p-4  text-center'}`} style={{ borderRadius: expanded.education ? '0%' : "0% 50% 0% 0%" }} onClick={() => toggleExpanded('education')}>Education</div>
            <div className={`${expanded.contact ? 'w-full h-full bg-[#3a4445] transition-all duration-1000 ease-in-out' : 'absolute text-[#e5dfdf] right-0 bottom-0 text-[22px] bg-[#3a4445] p-4  text-center'}`} style={{ borderRadius: expanded.contact ? '0%' : "50% 0% 0% 0%" }} onClick={() => toggleExpanded('contact')}>Contact</div>

            {!expanded.experience && !expanded.contact && !expanded.education && !expanded.projects && <div className='sm:block lg:flex sm:w-[60%] lg:w-[70%] items-center'>
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
                </div>
            </div>}
        </div>
    )
}

export default Hero