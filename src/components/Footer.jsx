import React from 'react'
import logo from "../assets/TechventureLogo.png";
import mailLogo from "../assets/footer-logos/mail-logo.svg";

export const Footer = () => {
  return (
    <div className='flex gap-32 mt-48'>

        <div className='text-left'>
            <img className='w-[250px] mb-5' src={logo}></img>
            <p className='text-white font-bold mb-6'>We manage your IT, so you can manage your<br></br> Business.</p>
            
                
            <div className="flex gap-4 text-white rounded-xl cursor-pointer bg-[#121f2d] hover:bg-gradient-to-r from-[#ff3700] to-[#ff8800] mt-4 py-2 px-4 mr-40">
                <img src={mailLogo}></img>
                <p>info@techvenchure.com</p>
            </div>

        </div>

        <div className='text-white text-left'>
            <p className='mb-4'>QUICK LINKS</p>
            <ul className='cursor-pointer'>
                <li className='mb-1 font-medium'>About us</li>
                <li className='mb-1 font-medium'>Services</li>
                <li className='mb-1 font-medium'>Contact</li>
                <li className='font-medium'>Blog</li>
            </ul>
        </div>

        <div className='text-white text-left'>
            <p className='mb-4'>LINKS</p>
            <ul className='cursor-pointer'>
                <li className='mb-1 font-medium'>Style Guide</li>
                <li className='mb-1 font-medium'>Instructions</li>
                <li className='mb-1 font-medium'>Changelog</li>
                <li className='font-medium'>Licensing</li>
            </ul>
        </div>

        <div className='text-white text-left'>
            <p className='mb-4'>SOCIAL</p>
            <ul className='cursor-pointer'>
                <li className='mb-1 font-medium'>Facebook</li>
                <li className='mb-1 font-medium'>Twitter</li>
                <li className='mb-1 font-medium'>YouTube</li>
                <li className='font-medium'>Whatsapp</li>
            </ul>
        </div>

    </div>
  )
}
