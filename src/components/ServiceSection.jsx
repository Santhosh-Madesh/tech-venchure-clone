import logo1 from "../assets/service-logos/service-grid-1.png";
import logo2 from "../assets/service-logos/service-grid-2.png";
import logo3 from "../assets/service-logos/service-grid-3.png";
import logo4 from "../assets/service-logos/service-grid-4.png";
import logo5 from "../assets/service-logos/service-grid-5.png";

export default function ServiceSection(){

    return(
        <div className="mt-40 ml-30 mr-12 ">
            <div className="mb-8">
                <button className="border-transparent rounded-full text-[#ff9900] mb-4 px-4 py-1 bg-[#0d0f26]">SERVICES</button>
                <h2 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] bg-clip-text text-transparent font-medium text-5xl">How We Can Help You?</h2>
            </div>
            <div className="grid grid-cols-6 gap-4">
                <div className="col-span-3 bg-[#16100d] border border-[#662d04] rounded-xl">
                    <img src={logo1}></img>
                    <div className="text-left p-8">
                        <h3 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] bg-clip-text text-transparent font-medium text-2xl ">Marketing and funding</h3>
                        <p className="text-white mt-4">Grow your business with AI-powered organic and performance marketing strategies that drive traction and visibility. From brand positioning to high-converting paid campaigns, we ensure rapid growth and sustainable community building.</p>
                    </div>
                </div>
                <div className="col-span-3 bg-[#16100d] border border-[#662d04] rounded-xl">
                    <div className="text-left p-8">
                        <h3 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] bg-clip-text text-transparent font-medium text-2xl">UI/UX Design & Web Development</h3>
                        <p className="text-white mt-4">Transform your digital presence with our bespoke UI/UX design services with our precision-crafted web development services, where innovation meets functionality to bring your digital vision to life.</p>
                    </div>
                    <img src={logo2}></img>
                </div>
                <div className="col-span-2 bg-[#16100d] border border-[#662d04] rounded-xl">
                    <img src={logo3}></img>
                    <div className="text-left p-8">
                        <h3 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] bg-clip-text text-transparent font-medium text-2xl">Application Development & Custom Software Solutions</h3>
                        <p className="text-white mt-4">Transform ideas into immersive experiences with our mobile application development, where innovation and user-centric design converge for seamless digital solutions on the go.</p>
                    </div>
                </div>
                <div className="col-span-2 bg-[#16100d] border border-[#662d04] rounded-xl">
                    <div className="text-left p-8">
                        <h3 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] bg-clip-text text-transparent font-medium text-2xl">Cloud, Migration & Server Services</h3>
                        <p className="text-white mt-4">With our expertise in UI/UX design, app development, custom software solutions, cloud migration and server services, SaaS development services, and technology management.</p>
                    </div>
                    <img src={logo4}></img>
                </div>
                <div className="col-span-2 bg-[#16100d] border border-[#662d04] rounded-xl">
                    <img src={logo5}></img>
                    <div className="text-left p-8">
                        <h3 className="bg-gradient-to-r from-[#fbfaf9] to-[#cbbab5] bg-clip-text text-transparent font-medium text-2xl">SaaS Development Services</h3>
                        <p className="text-white mt-4">Empower your business with our cutting-edge SaaS development services. From conceptualization to deployment, we specialize in building scalable software solutions.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}