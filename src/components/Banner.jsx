import React from 'react'
import { useRef, useEffect } from 'react'

export const Banner = () => {

    const cardRef = useRef(null);

    useEffect(()=>{

        const el = cardRef.current;

        const handleHover = (e)=>{
            
            const rect = el.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            el.style.setProperty('--x',`${x}px`);
            el.style.setProperty('--y',`${y}px`);
            el.style.setProperty('--opacity',1);
        }


        el.addEventListener("mousemove", handleHover);

        return(
            ()=>{el.removeEventListener("mousemove", handleHover)}
        )
    }, [])
  return (
    <div className='relative'>
    <div className='mt-44 ml-30 mr-12 flex justify-center align-center border border-[#662d04] rounded-xl px-20 py-8 bg-[#16100d] '>
        <div className='mt-14'>
            <h2 className='bg-gradient-to-r from-[#fbfaf9] to-[#a4a2a0] text-transparent bg-clip-text font-medium text-5xl mb-12'>We manage your IT and<br></br> Marketing so that you <br></br>can manage your<br></br> business and sales</h2>
            <p className='text-white font-bold mb-12'>Elevate your enterprise with Techvenchure – where<br></br> innovation meets excellence in IT solutions.<br></br> Transforming challenges into opportunities for a digital<br></br> future.</p>
            <button className="rounded-full py-2 pr-6 pl-6 bg-[linear-gradient(90deg,#ff3700,#ff8800,#672d04,#ff8800)] bg-[length:300%_100%] bg-left hover:bg-right transition-[background-position] duration-700 ease-out cursor-pointer text-white text-xl font-medium mb-12">Get Started</button>
        </div>
    </div> 

    {/* Twin Card */}
    <div className=' ml-30 mr-12 flex justify-center align-center border border-[#662d04] rounded-xl px-20 py-8 bg-[#ba672b] text-transparent select-none absolute inset-0' ref={cardRef} style={{
          WebkitMaskImage: 'radial-gradient(circle at var(--x) var(--y), rgba(0, 0, 0, 0.15) 20%, transparent)',
        maskImage:'radial-gradient(circle at var(--x) var(--y), rgba(0, 0, 0, 0.15) 20%, transparent)',
        opacity:'var(--opacity, 0)',
        }}>
        <div className='mt-14'>
            <h2 className=' text-transparent bg-clip-text font-medium text-5xl mb-12'>We manage your IT and<br></br> Marketing so that you <br></br>can manage your<br></br> business and sales</h2>
            <p className=' font-bold mb-12 text-transparent'>Elevate your enterprise with Techvenchure – where<br></br> innovation meets excellence in IT solutions.<br></br> Transforming challenges into opportunities for a digital<br></br> future.</p>
            <button className="rounded-full py-2 pr-6 pl-6 bg-[#d95e06] bg-[length:300%_100%]bg-left ">Get Started</button>
        </div>
    </div> 
    </div>
    )
}
