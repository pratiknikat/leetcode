import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { Problems } from '../../components/Problem/Problems'

export const HomePage = () => {
  return (
    <div className='min-h-screen' >
        <Navbar/>
        <div style={{width:"60%"}}>
            <Problems/>
        </div>
    </div>
  )
}