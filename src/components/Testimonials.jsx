import React from 'react'
import logo1 from "../assets/profile-logos/profile-logo.svg"

export const Testimonials = () => {
  return (
    <div className="mt-40 ml-30 mr-12">
        <div className='mb-24'>
            
            <button className='text-[#f9761a] bg-[#0d0f26] rounded-full px-4 py-1 mb-4'>TESTIMONIALS</button>
            
            
            <h2 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent font-medium text-6xl bg-clip-text '>Read reviews from our<br></br> satisfied customers</h2>
        </div>
        <div className='grid grid-cols-3 gap-5'>

            <div className='col-span-1 border border-[#f9761a] rounded-2xl px-12 py-8 bg-[#16100d]'>
                <div className='text-left mb-6'>
                    <p className='text-white font-bold'>“Working with Techvenchure has been a game-changer for our business. They helped us reach new audiences and achieve our goals faster than we ever thought possible.”</p>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <img className='w-[48px] rounded-full' src={logo1}></img>
                    </div>
                    <div className='text-left'>
                        <h4 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text'>Malcolm Reynolds</h4>
                        <p className='text-white font-medium'>Co-founder</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 border border-[#f9761a] rounded-xl px-12 py-8 bg-[#16100d]'>
                <div className='text-left mb-6'>
                    <p className='text-white font-bold'>“Techvenchure's expertise is unmatched, and they've helped us grow our online presence significantly. Their strategies are data-driven and tailored to our specific needs.”</p>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <img className='w-[48px] rounded-full' src={logo1}></img>
                    </div>
                    <div className='text-left'>
                        <h4 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text'>Lisa Nelson</h4>
                        <p className='text-white font-medium'>App Developer</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 border border-[#f9761a] rounded-xl px-12 py-8 bg-[#16100d]'>
                <div className='text-left mb-6'>
                    <p className='text-white font-bold'>“Choosing Techvenchure for our SaaS development was a wise decision. Their team is experienced and dedicated.”</p>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <img className='w-[48px] rounded-full' src={logo1}></img>
                    </div>
                    <div className='text-left'>
                        <h4 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text'>Kenneth Thompson</h4>
                        <p className='text-white font-medium'>Operations Manager</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 border border-[#f9761a] rounded-xl px-12 py-8 bg-[#16100d]'>
                <div className='text-left mb-6'>
                    <p className='text-white font-bold'>“Techvenchure has exceeded our expectations in every way. Their team is dedicated, knowledgeable, and always goes the extra mile to ensure our campaigns are a success.”</p>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <img className='w-[48px] rounded-full' src={logo1}></img>
                    </div>
                    <div className='text-left'>
                        <h4 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text'>Sophia Salazar</h4>
                        <p className='text-white font-medium'>App Developer</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 border border-[#f9761a] rounded-xl px-12 py-8 bg-[#16100d]'>
                <div className='text-left mb-6'>
                    <p className='text-white font-bold'>“Choosing Techvenchure for our app development project was one of the best decisions we made. Their team is highly skilled and dedicated, and they worked tirelessly to ensure that our app met our specifications and was delivered on time. We would definitely work with them again in the future.”</p>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <img className='w-[48px] rounded-full' src={logo1}></img>
                    </div>
                    <div className='text-left'>
                        <h4 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text'>Otis Jordan</h4>
                        <p className='text-white font-medium'>Operations Manager</p>
                    </div>
                </div>
            </div>

            <div className='col-span-1 border border-[#f9761a] rounded-xl px-12 py-8 bg-[#16100d]'>
                <div className='text-left mb-6'>
                    <p className='text-white font-bold'>“I would highly recommend Techvenchure for SaaS development. Their team is highly skilled and professional, and they were able to deliver a scalable and robust platform that has been instrumental in our business growth.”</p>
                </div>
                <div className='flex gap-4'>
                    <div>
                        <img className='w-[48px] rounded-full' src={logo1}></img>
                    </div>
                    <div className='text-left'>
                        <h4 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text'>Julia Payne</h4>
                        <p className='text-white font-medium'>Co-founder</p>
                    </div>
                </div>
            </div>

        </div>
    </div>
  )
}
