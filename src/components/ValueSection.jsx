import logo1 from "../assets/values-logos/value1.svg";
import logo2 from "../assets/values-logos/value2.svg";
import logo3 from "../assets/values-logos/value3.svg";
import logo4 from "../assets/values-logos/value4.svg";
import logo5 from "../assets/values-logos/value5.svg";
import logo6 from "../assets/values-logos/value6.svg";
import logo7 from "../assets/values-logos/value7.svg";
import logo8 from "../assets/values-logos/value8.svg";


export default function ValueSection(){

    return(
        <div className="ml-30 mr-12  mt-24">
            <div className="mb-20">
                <h2 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] font-medium text-transparent bg-clip-text text-5xl ">Our Values</h2>
            </div>
            <div className="grid grid-cols-4 gap-4">

                <div className="col-span-1 bg-transparent">
                    <div className="flex items-center justify-center mb-4">
                        <img className="border border-[#662d04] p-4 rounded-lg" src={logo1}></img>
                    </div>
                    <h4 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] font-medium text-transparent bg-clip-text text-xl mb-4">Integrity</h4>
                    <p className="text-white">We have a strong moral principle.</p>
                </div>

                <div className="col-span-1 bg-transparent">
                    <div className="flex items-center justify-center mb-4">
                        <img className="border border-[#662d04] p-4 rounded-lg" src={logo2}></img>
                    </div>
                    <h4 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] font-medium text-transparent bg-clip-text text-xl mb-4">Customer Focus</h4>
                    <p className="text-white">We focus solely on your needs and requirements</p>
                </div>

                <div className="col-span-1 bg-transparent">
                    <div className="flex items-center justify-center mb-4">
                        <img className="border border-[#662d04] p-4 rounded-lg" src={logo3}></img>
                    </div>
                    <h4 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] font-medium text-transparent bg-clip-text text-xl mb-4">Innovation</h4>
                    <p className="text-white">We create new ideas, products and methods consistently.</p>
                </div>

                <div className="col-span-1 bg-transparent">
                    <div className="flex items-center justify-center mb-4">
                        <img className="border border-[#662d04] p-4 rounded-lg" src={logo4}></img>
                    </div>
                    <h4 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text font-medium text-xl mb-4">Accountability</h4>
                    <p className="text-white">We respond to every customer's question and project decisions</p>
                </div>
                <div className="col-span-1 bg-transparent mt-12">
                    <div className="flex items-center justify-center mb-4">
                        <img className="border border-[#662d04] rounded-lg p-4" src={logo5}></img>
                    </div>
                    <h4 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent font-medium text-xl bg-clip-text mb-4">Social Responsibility</h4>
                    <p className="text-white">We always choose ways that benefit society at large.</p>
                </div>
                <div className="col-span-1 bg-transparent mt-12">
                    <div className="flex items-center justify-center mb-4">
                        <img className="border border-[#662d04] rounded-lg p-4" src={logo6}></img>
                    </div>
                    <h4 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent bg-clip-text font-medium text-xl mb-4">Team Work</h4>
                    <p className="text-white">We follow effective teamwork with open communication.</p>
                </div>
                <div className="col-span-1 bg-transparent mt-12">
                    <div className="flex items-center justify-center mb-4">
                        <img className="border border-[#662d04] rounded-lg p-4 mb-4" src={logo7}></img>
                    </div>
                    <h4 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent font-medium bg-clip-text text-xl mb-4">Excellence</h4>
                    <p className="text-white">We have the highest standard for attention to detail.</p>
                </div>
                <div className="col-span-1 bg-transparent mt-12">
                    <div className="flex items-center justify-center mb-4">
                        <img className="border border-[#662d04] rounded-lg p-4 mb-4" src={logo8}></img>
                    </div>
                    <h4 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] text-transparent font-medium bg-clip-text text-xl mb-4">Respect</h4>
                    <p className="text-white">We acknowledge and value the differences in perspectives.</p>
                </div>
            </div>
        </div>
    )
}