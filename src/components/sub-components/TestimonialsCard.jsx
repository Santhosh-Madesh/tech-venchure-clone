import React from 'react'
import logo from "../../assets/profile-logos/profile-logo.svg"

export const TestimonialsCard = ({comment, name, position}) => {
  return (
        <div className='col-span-1 border border-[#662d04] rounded-2xl px-12 py-8 bg-[#16100d]'>
            <div className='text-left mb-6'>
                <p className='text-white font-bold'>{comment}</p>
            </div>
            <div className='flex gap-4'>
                <div>
                    <img className='w-[48px] rounded-full' src={logo}></img>
                </div>
                <div className='text-left'>
                    <h4 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text'>{name}</h4>
                    <p className='text-white font-medium'>{position}</p>
                </div>
            </div>
        </div>
  )
}


