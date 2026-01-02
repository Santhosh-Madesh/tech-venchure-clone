import React from 'react'

import { TestimonialsCard } from './sub-components/TestimonialsCard'
import { TestimonialsCardTwin } from './sub-components/TestimonialsCardTwin'

export const Testimonials = () => {
  return (
    <div className="mt-40 ml-30 mr-12 relative">
        <div className='mb-24'>
            
            <button className='text-[#f9761a] bg-[#0d0f26] rounded-full px-4 py-1 mb-4'>TESTIMONIALS</button>
            
            
            <h2 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent font-medium text-6xl bg-clip-text '>Read reviews from our<br></br> satisfied customers</h2>
        </div>
        <div className='grid grid-cols-3 gap-5 relative'> 

            <TestimonialsCard 
            comment={'“Working with Techvenchure has been a game-changer for our business. They helped us reach new audiences and achieve our goals faster than we ever thought possible.”'}
            name={"Malcolm Reynolds"}
            position={"Co Founder"}
            />

            <TestimonialsCard
            comment={`“Techvenchure's expertise is unmatched, and they've helped us grow our online presence significantly. Their strategies are data-driven and tailored to our specific needs.”`}
            name={'Lisa Nelson'}
            position={'App Developer'}
            />

            <TestimonialsCard
            comment={`“Choosing Techvenchure for our SaaS development was a wise decision. Their team is experienced and dedicated.”`}
            name={'Kenneth Thompson'}
            position={'Operations Manager'}
            />

            <TestimonialsCard
            comment={`“Techvenchure has exceeded our expectations in every way. Their team is dedicated, knowledgeable, and always goes the extra mile to ensure our campaigns are a success.”`}
            name={'Sophia Salazar'}
            position={'App Developer'}
            />

            <TestimonialsCard
            comment={`“Choosing Techvenchure for our app development project was one of the best decisions we made. Their team is highly skilled and dedicated, and they worked tirelessly to ensure that our app met our specifications and was delivered on time. We would definitely work with them again in the future.”`}
            name={'Otis Jordan'}
            position={'Operations Manager'}
            />

            <TestimonialsCard
            comment={`“I would highly recommend Techvenchure for SaaS development. Their team is highly skilled and professional, and they were able to deliver a scalable and robust platform that has been instrumental in our business growth.”`}
            name={'Julia Payne'}
            position={'Co-founder'}
            />

            

        </div>
      </div>
  )
}