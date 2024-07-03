import React from 'react'
import { motion } from 'framer-motion'
const Contact = () => {
    return (
        <div >
            <div className='text-center text-[28px] bg-[#e5dfdf] text-[#3a4445]'>Reach Out to Me</div>
            <form action="">
                <input type="text" name="user_email" placeholder="Enter Your Email" className='w-[400px] px-2 py-2 text-[20px] bg-[#3a4445] border border-2 border-[#e5dfdf] rounded-md mt-5' />
                <br />
                <input type="text" name="message" placeholder="Enter your message" className='w-[400px] px-2 py-2 text-[20px] mt-5  bg-[#3a4445] border border-2 border-[#e5dfdf] rounded-md' />
                <br />
                <div className='w-[fit-content] m-auto'>
                    <input type="Submit" className='bg-[#e5dfdf] text-[20px] text-[#3a4445] rounded-md cursor-pointer py-2 w-[350px]  mt-5' />
                </div>
            </form>
        </div>

    )
}

export default Contact