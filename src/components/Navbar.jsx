import logo from "../assets/TechventureLogo.png"
import { useEffect, useState } from "react"


export default function Navbar(){

    const [scrolled, setScrolled] = useState(false);

    useEffect(()=>{

        const handleScroll = () =>{
                setScrolled(window.scrollY > 50);
        }

        window.addEventListener("scroll", handleScroll);

        return(()=>{
            window.removeEventListener("scroll", handleScroll);
        })

    },[])
    
    return(
            <div className={scrolled ? "fixed p-2 ml-30 mr-32 top-0 w-[1175px] z-50 flex justify-between items-center border border-[#a8c5e4] border-opacity-50 rounded-full bg-black/40 backdrop-blur-md py-1 mt-3" : "fixed p-2 ml-30 mr-32 top-0 w-[1175px] z-50 flex justify-between items-center rounded-full py-1 mt-3"}>
                <div className="flex items-center gap-4">
                    <img className="w-48 p-3 cursor-pointer" src={logo}></img>
                    <ul className="flex items-center gap-8 text-white text-[15px] leading-[18px]">
                        <li className="cursor-pointer">About Us</li>
                        <li className="cursor-pointer">Services</li>
                        <li className="cursor-pointer">Blogs</li>
                        <li className="cursor-pointer">FAQ</li>
                    </ul>
                </div>
                <div className="p-4 text-[15px] leading-[18px]">
                    <button className="text-white rounded-full pt-3 pb-3 pr-5 pl-5 bg-[linear-gradient(90deg,#121f2d,#121f2d,#ff3700,#ff8800)] bg-[length:300%_100%] bg-left hover:bg-right transition-[background-position] duration-700 ease-out">Contact</button>
                </div>
            </div>
    )
}