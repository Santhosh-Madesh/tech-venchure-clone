import React from 'react'

export const Banner = () => {
  return (
    <div className='mt-44 ml-30 mr-12 flex justify-center align-center border border-[#662d04] rounded-xl px-20 py-8 bg-[#16100d]'>
        <div className='mt-14'>
            <h2 className='bg-gradient-to-r from-[#fbfaf9] to-[#a4a2a0] text-transparent bg-clip-text font-medium text-5xl mb-12'>We manage your IT and<br></br> Marketing so that you <br></br>can manage your<br></br> business and sales</h2>
            <p className='text-white font-bold mb-12'>Elevate your enterprise with Techvenchure – where<br></br> innovation meets excellence in IT solutions.<br></br> Transforming challenges into opportunities for a digital<br></br> future.</p>
            <button className="rounded-full py-2 pr-6 pl-6 bg-gradient-to-r from-[#ff3700] to-[#ff8800] hover:bg-[#672d04] cursor-pointer text-white text-xl font-medium mb-12">Get Started</button>
        </div>
    </div> 
    )
}
