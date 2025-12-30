import sphere from "../assets/orangeSphere.png"
import "../styles/hero.css";

export default function HeroSection(){

    return(
        <div className="my-28 ml-30 mr-12">
        <div className="flex justify-between items-center text-white text-left">
            <div className="space-y-8">
                <div className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text">
                    <h2 className=" text-[96px] leading-[96px] font-medium font-">Experience <br></br>the Future</h2>
                </div>
                <p className="text-[18px] leading-[31px]">AI-Powered Marketing, Your Pathway to<br></br>
                Success in the Digital Age. We build<br></br>
                brands and accelerate startups in MENA.</p>

                <button className="rounded-full p-2 pr-4 pl-4 bg-gradient-to-r from-[#ff3700] to-[#ff8800] hover:bg-[#672d04] cursor-pointer">Get Started</button>
            </div>
            <div>
                <img src={sphere}></img>
            </div>
        </div>
        </div>
    )
}