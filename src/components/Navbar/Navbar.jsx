import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineFire} from 'react-icons/ai'
import {IoMdNotificationsOutline} from "react-icons/io"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
export const Navbar = () => {
    const [count,setCount] = useState(0);

  return (
    <div className='shadow-md p-[15px] rounded-md ml-2 mr-2 mb-2  dark:bg-[#282828] flex justify-between' >
        <Link to={"/"}>
            <p className='text-[20px] dark:text-white'>Logo</p>
        </Link>

        <div className='flex items-center'>
            <IoMdNotificationsOutline size={22} className='text-[20px] dark:text-white mr-4'/>
            <div className='flex items-center mr-5'>
                <AiOutlineFire size={20} className='text-[20px] dark:text-white' />
                <p className='pl-1  dark:text-white'>{count}</p>
            </div>
            <div>
                <p className='bg-[#1a1b1b] text-white p-1 rounded-[50%] mr-6 dark:bg-white dark:text-black'>PN</p>
            </div>
            
        </div>
    </div>
  )
}