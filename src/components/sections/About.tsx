import React from 'react'
import profile from '../../assets/profile.jpeg';
const About = () => {
    return (

        <div className='sm:block lg:flex sm:w-[60%] lg:w-[70%] items-center sm:overflow-scroll md:overflow-hidden md:h-auto'>
            <div className='w-[100%] lg:w-[40%]'>
                <img src={profile} alt="profile" className='rounded-full h-[200px] w-[200px] m-auto lg:m-0 lg:h-[400px] lg:w-[400px]' style={{ objectFit: 'cover' }} />
            </div>
            <div className='w-[100%] lg:w-[60%]'>
                <div className='text-[28px] lg:text-[44px] font-bold text-center text-[#e5dfdf] bg-[#3a4445]'>I'm Sai Narasimha</div>
                <div className='mt-2 text-[18px] lg:text-[20px] text-justify'>
                    Dedicated Frontend Developer with 1.8 years of experience in building responsive and user-friendly web applications. Experienced in collaborating with cross-functional teams to deliver high-quality solutions. Skilled in Agile project management, ensuring efficient project delivery. Known for excellent problem-solving abilities, teamwork, and attention to detail, consistently enhancing user experiences and driving innovation.
                </div>
                <div className="flex gap-1 w-[fit-content] mt-3">
                    <a href="https://drive.google.com/file/d/1WkVTXqSwoHnz3bzdjcP5NA3fAqyHrlDU/view?usp=sharing">
                        <button className="bg-[#3a4445] text-[#e5dfdf] px-4 py-1 text-[18px] rounded-md">Resume</button>
                    </a>
                    <a href="https://github.com/Sai-Narasimha/">
                        <button className="bg-[#3a4445] text-[#e5dfdf] px-4 py-1 text-[18px] rounded-md">Github</button>
                    </a>
                    <a href="https://www.linkedin.com/in/sai-narasimha-sn/">
                        <button className="bg-[#3a4445] text-[#e5dfdf] px-4 py-1 text-[18px] rounded-md">Linkedin</button>
                    </a>
                </div>
            </div>
        </div>

    )
}

export default About