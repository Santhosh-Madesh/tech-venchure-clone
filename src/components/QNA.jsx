import React from 'react'
import { useState, useEffect, useRef } from 'react';
import plusMark from "../assets/QNA-logos/plus-mark.svg";
import xMark from "../assets/QNA-logos/x-mark.svg";

export const QNA = ({question, answer}) => {

    const [clicked, setClicked] = useState(false);
    const QNARef = useRef(null);

    useEffect(()=>{

        const handleClick = () =>{
            setClicked(!clicked);
        }

        const el = QNARef.current
        el.addEventListener("click", handleClick)

        return(
            ()=>{
                el.removeEventListener("click", handleClick);
            }
        )

    },[clicked])
    
    const Q = question;
    const A = answer;

  return (
    <div className={clicked ? ' mb-4 ml-24 mr-16 border border-[#662d04] rounded-xl py-4 px-7 cursor-pointer bg-[#ff0000]':' mb-4 ml-24 mr-16 border border-[#662d04] rounded-xl py-4 px-7 cursor-pointer'}>
        <div className='flex justify-between align-center' ref={QNARef}>
    
            <div className='text-left'>
                <h4 className={clicked ? 'bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text text-xl font-medium mb-4' : 'bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text text-xl font-medium'}>{Q}</h4>
            </div>
            <div className='flex align-center justify-center ml-40'>
                <img src={clicked ? plusMark : xMark}></img>
            </div>

        </div>
        {clicked ? <p className='text-left text-white font-bold cursor-text mb-2'>{A}</p> : null}
    </div>
    
    
  )
}
