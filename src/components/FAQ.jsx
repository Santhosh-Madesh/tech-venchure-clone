import React from 'react'
import { QNA } from './QNA'

export const FAQ = () => {
  return (
    <div className='mt-40 ml-30 mr-12'>


        <div className='flex justify-center align-center'>

            <div className='mb-8'>

                <button className='text-[#f9761a] bg-[#0d0f26] rounded-full px-4 py-1 mb-4'>FAQ</button>
                <h2 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text font-medium text-6xl'>Get answers to common<br></br> questions</h2>

            </div>
            
        </div>
        

        <div className='mt-8'>
            <QNA question={"What services does Techvenchure offer?"} answer={"We offer a wide range of services including UI/UX design, app development, custom software solutions, cloud migration and server services, SaaS development services, and technology management & advisory services."} />
            <QNA question={"How do we approach UI/UX design?"} answer={"We follow a user-centered design approach, focusing on understanding the needs and behaviors of users to create intuitive and engaging interfaces."} />
            <QNA question={"Can we develop apps for both iOS and Android platforms?"} answer={"es, our team is experienced in developing apps for both iOS and Android platforms, ensuring a seamless user experience across devices."} />
            <QNA question={"What is the process for custom software development at our company ?"} answer={"Our custom software development process includes requirements gathering, design, development, testing, and deployment, with regular communication and feedback loops to ensure client satisfaction."} />
            <QNA question={"How do we help funding and bring investments ?"} answer={"We are registered in a the investors angel sectors where in we make the pitch and help you crack the funding"} />
            <QNA question={"What is the AI agent generation for ads ?"} answer={"We have built an ai agent stitching 7 tools , to make ads 400% more efficient !"} />
            <QNA question={"How does organic marketing work?"} answer={"scaling up your brand presence to 10x by creating a loyal community for your personal brand and business."} />
        </div>
    </div>
  )
}
