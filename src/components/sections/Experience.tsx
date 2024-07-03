import React from 'react'
import {motion} from 'framer-motion'
const Experience = () => {
    return (
        <motion.div
            className="absolute bg-[#3a4445] text-[#e5dfdf] flex items-center justify-center z-0"
            initial={{ width: '0%', height: '0%', top: '0%', left: '0%', borderBottomRightRadius: '50%' }}
            animate={{ width: '100%', height: '100%', top: '0%', left: '0%', borderBottomRightRadius: '0px' }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
        // onClick={resetExpanded}
        >
            <div className="w-[90%] lg:w-[50%] m-auto lg:m-0">

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
    )
}

export default Experience