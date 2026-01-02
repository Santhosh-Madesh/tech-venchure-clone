import React from 'react'
import { useRef, useEffect } from "react"
import logo from "../../assets/profile-logos/profile-logo.svg"

export const TestimonialsCardTwin = ({comment, name, position}) => {

    const TestimonialRef = useRef(null);

    useEffect(()=>{

        const el = TestimonialRef.current;
        if(!el){
            return
        }
        
        const handleHover = (e)=>{

            
            const rect = el.getBoundingClientRect();

            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            el.style.setProperty(`--x`, `${x}px`);
            el.style.setProperty('--y', `${y}px`);
            el.style.setProperty('--opacity', 1);
        }

        el.addEventListener("mousemove", handleHover);


        return(
            ()=>{el.removeEventListener("mousemove", handleHover)}
        )
    }, [])

  return (
        <div className='col-span-1 border border-[#662d04] rounded-2xl px-12 py-8 bg-[#ed6606]' ref={TestimonialRef} style={{

            WebkitMaskImage:'radial-gradient(circle at var(--x) var(--y), rgba(0,0,0,0.15) 20%, transparent)',
            maskImage:'radial-gradient(circle at var(var(--x) var(--y)), rgba(0,0,0,0.15) 20%, transparent)',
            opacity:'var(--opacity, 0)'
            

        }}>
            <div className='text-left mb-6'>
                <p className='text-transparent font-bold'>{comment}</p>
            </div>
            <div className='flex gap-4'>
                <div>
                    <img className='w-[48px] rounded-full'></img>
                </div>
                <div className='text-left'>
                    <h4 className=' text-transparent bg-clip-text'>{name}</h4>
                    <p className='text-transparent font-medium'>{position}</p>
                </div>
            </div>
        </div>
  )
}


