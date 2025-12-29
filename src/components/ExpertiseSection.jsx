import logo1 from "../assets/expertise-logos/expertise-logo1.svg";
import logo2 from "../assets/expertise-logos/expertise-logo2.svg";
import logo3 from "../assets/expertise-logos/expertise-logo3.svg";

export default function ExpertiseSection(){

    return(
        <div className="mt-40 ml-30 mr-12 ">

            <div className="mb-12">
                <h2 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text font-medium text-5xl">10+ Years of Industry<br></br>Expertise</h2>
            </div>

            <div className="grid grid-cols-3 gap-2">
                <div className="border border-[#f89500] rounded-xl pt-6 pb-8 px-8 mr-2">
                    <div className="flex items-center justify-center">
                        <img src={logo1}></img>
                    </div>
                    <p className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text">10+</p>
                    <p className="text-white">Years of Industry Expertise</p>
                </div>

                <div className="border border-[#f89500] rounded-xl pt-6 pb-8 px-8 mx-2">
                    <div className="flex items-center justify-center">
                        <img src={logo2}></img>
                    </div>
                    <p className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text">100%</p>
                    <p className="text-white">Comprehensive Maintenance and Support</p>
                </div>

                <div className="border border-[#f89500] rounded-xl pt-6 pb-8 px-8 ml-2">
                    <div className="flex items-center justify-center">
                        <img src={logo3}></img>
                    </div>
                    <p className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text">2-3</p>
                    <p className="text-white">Months To Launch Sprints</p>
                </div>
            </div>
        </div>
    )
}