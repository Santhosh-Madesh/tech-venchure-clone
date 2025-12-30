import React from 'react'
import { useState } from 'react'

export const ContactForm = () => {

    const handleChange = async (e) =>{
        e.preventDefault();

        const formData = new FormData(e.target)

        document.getElementById("name").value = "";
        document.getElementById("email").value = "";
        document.getElementById("subject").value = "";
        document.getElementById("message").value = "";

        await fetch("https://tech-venchure-clone-backend.vercel.app/contact-form", {
            method:'POST',
            body:formData
        })


        
    }
  return (
    <div className='mt-36 ml-32 mr-48 text-white  border border-[#662d04] rounded-xl bg-[#16100d]'>
        <h2 className='bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text text-[80px]'>Contact Form</h2>
        <div className='flex justify-center align-center m-8'>
            <form className='text-left' onSubmit={handleChange}>

            <label className='mr-8'>Name:</label><br></br>
            <input name="name" id="name" className='border border-[#662d04] rounded-lg w-[300px] h-[30px] text-black' type='text' required></input><br></br>

            <label className='mr-9'>Email:</label><br></br>
            <input name="email" id="email" className='border border-[#662d04] rounded-lg w-[300px] h-[30px] text-black' type="email" required></input><br></br>

            <label className='mr-5'>Subject:</label><br></br>
            <input name="subject" id="subject" className='border border-[#662d04] rounded-lg w-[300px] h-[30px] text-black' type='text' required></input><br></br>

            <label className='mr-2'>Message:</label><br></br>
            <textarea name="message" id="message" className='border border-[#662d04] rounded-lg w-[300px] text-black' type='text' ></textarea><br></br>

            <button type="submit" className="text-white rounded-full pt-3 pb-3 pr-5 pl-5 bg-[linear-gradient(90deg,#121f2d,#121f2d,#ff3700,#ff8800)] bg-[length:300%_100%] bg-left hover:bg-right transition-[background-position] duration-700 ease-out">Contact</button>
            </form>
        </div>
        
    </div> 
)
}
