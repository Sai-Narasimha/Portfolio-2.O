import React from 'react'
import {motion} from 'framer-motion'
const Education = () => {
  return (
    <motion.div
    className="absolute bg-[#3a4445] text-[#e5dfdf] flex items-center justify-center z-0"
    initial={{ width: '0%', height: '0%', bottom: '0%', left: '0%', borderTopRightRadius: '50%' }}
    animate={{ width: '100%', height: '100%', bottom: '0%', left: '0%', borderTopRightRadius: '0' }}
    transition={{ duration: 0.5, ease: "easeInOut" }}
// onClick={resetExpanded}
>
    <div className="w-[90%] lg:w-[50%] m-auto lg:m-0">
        <div>
            <div className="text-[36px] text-center bg-[#e5dfdf] text-[#3a4445]">Masai School - Bengaluru</div>
            <div className='flex justify-between'>
                <div className='text-[20px]'>Full Stack Development</div>
                <div className='text-[20px]'>Nov 2021  -  Nov 2022</div>
            </div>
        </div>
        <div>
            <div className="text-[36px] text-center bg-[#e5dfdf] text-[#3a4445] mt-3">Sri Sai Baba National Degree College - Anantapur</div>
            <div className='flex justify-between'>
                <div className='text-[20px]'>Bachelors Of Business Administration</div>
                <div className='text-[20px]'>June 2018  -  Aug 2021</div>
            </div>
        </div>
    </div>
</motion.div>
  )
}

export default Education