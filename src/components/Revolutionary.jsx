import React from 'react'
import sphere from "../assets/orangeSphere.png"

export const Revolutionary = () => {
  return (
    <div className='mt-40 ml-3- mr-32 flex align-center '>
        <div className='space-x-6'>
            <img className='w-screen' src={sphere}></img>
        </div>
        <div className='text-left'>
            <button className='text-[#f9761a] bg-[#0d0f26] rounded-full px-4 py-1 mb-4'>REVOLUTIONARY</button>
            <h2 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text text-6xl font-medium mb-12'>How We Can Help<br></br>You?</h2>
            <p className='text-white font-bold text-xl break-word'>Empowered by a spectrum of cutting-edge skills, Techvenchure pioneers in software development, cloud solutions, and IT architecture – ensuring unparalleled expertise for your Digital journey.</p>
        </div>
    </div>
  )
}
