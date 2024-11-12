import { CustomSlider } from "../../components";
import shape from "../../assets/images/shapes.png";
import content from "../../assets/images/content.png";
import tally_prime_logo from "../../assets/images/tally_prime_logo.png";
import tally_prime_server_logo from "../../assets/images/tally_prime_server_logo.png";
import cloud_tally from "../../assets/images/cloud_tally.png";
import rocket from "../../assets/images/rocket.svg";
import Path from "../../assets/images/path.svg";
import FooterTop from "../../assets/images/footer_top.jpg";
import { RiArrowRightDoubleLine, RiPieChart2Fill } from "react-icons/ri";
import { GiNetworkBars } from "react-icons/gi";
import { CgNotes } from "react-icons/cg";

const Home = () => {
    return (
        <div className="text-center ">
            <div className="lg:bg-custome-blue-dark">
                <CustomSlider />
            </div>
            {/* Content */}

            <div className="bg-white my-14">
                <div className="mx-5 lg:mx-auto flex flex-col lg:flex-row items-center justify-between max-w-webContainer gap-10 my-24">
                    {/* Left Side Content */}
                    <div className="flex flex-col items-start max-w-full lg:max-w-[100%] text-center lg:text-left h-full">
                        <img src={shape} alt="shape" className="mb-2  lg:mx-0" />
                        <h2 className="text-custome-blue-light text-2xl lg:text-4xl font-semibold items-start mb-7">
                            <span className="border-b-2 border-b-custome-yellow">Tally –</span> The Best Choice For Oman!
                        </h2>
                        <p className="font-roboto my-5 text-base lg:text-lg">
                            Your search for a good, easy, simplified, cost-effective, VAT Compliant, VAT Simplified,
                            Business Solution including Accounting and Inventory Software begins here.
                        </p>
                        <div className="flex items-center gap-1">
                            <p className="text-custome-blue-light py-2 uppercase cursor-pointer hover:text-gray-500 transition-all duration-300 ">
                                Know More
                            </p>
                            <RiArrowRightDoubleLine className="text-custome-blue-light text-lg" />
                        </div>

                    </div>

                    {/* Right Side Image */}
                    <div className="w-full lg:max-w-[100%] mt-5 lg:mt-0  h-full flex items-center">
                        <img src={content} alt="ContentImage" className="w-full object-cover ml-auto" />
                    </div>

                </div>
                {/* Second cart */}
                <div className="mx-5 lg:mx-auto flex flex-col lg:flex-row items-center justify-around lg:max-w-[55%] my-24">
                    {/* Left Side Content */}
                    <div className="my-5 flex flex-col items-center max-w-full lg:max-w-[47%] text-center p-6 bg-white shadow-2xl border-gray-200 border-2 rounded-md py-10">

                        {/* Button at the top */}
                        <div className="mb-4">
                            <button className="text-black bg-custome-blue-light-bg py-2 px-6 rounded-full text-sm uppercase transition-all duration-300">
                                For Single and Multi User
                            </button>
                        </div>

                        {/* Image */}
                        <div className="my-6 ">
                            <img src={tally_prime_logo} alt="tally_prime_logo" className="mb-2  lg:w-1/2 mx-auto" />
                        </div>

                        {/* Text Description */}
                        <p className="text-base  font-roboto mb-6 max-w-96 text-custome-gray">
                            The All New Powerful Business Management Software For Small And Medium Enterprises
                        </p>

                        {/* Explore Section */}
                        <div className="flex items-center gap-1">
                            <p className="text-custome-blue-light py-2 uppercase cursor-pointer hover:text-gray-500 transition-all duration-300">
                                Explore
                            </p>
                            <RiArrowRightDoubleLine className="text-custome-blue-light text-lg" />
                        </div>

                    </div>

                    {/* Right Side Image */}
                    <div className="my-5 flex flex-col items-center max-w-full lg:max-w-[47%] text-center p-6 bg-white shadow-2xl border-gray-200 border-2 rounded-md py-10">

                        {/* Button at the top */}
                        <div className="mb-4">
                            <button className="text-black bg-custome-blue-light-bg py-2 px-6 rounded-full text-sm uppercase transition-all duration-300">
                                For Medium and Large Enterprises
                            </button>
                        </div>

                        {/* Image */}
                        <div className="my-6">
                            <img src={tally_prime_server_logo} alt="tally_prime_server_logo" className="mb-2  lg:w-3/4 mx-auto" />
                        </div>

                        {/* Text Description */}
                        <p className="text-base  font-roboto mb-6 max-w-96 text-custome-gray">
                            TallyPrime Server Is Truly An Enterprise Class Product For Your Growing Business
                        </p>

                        {/* Explore Section */}
                        <div className="flex items-center gap-1">
                            <p className="text-custome-blue-light py-2 uppercase cursor-pointer hover:text-gray-500 transition-all duration-300">
                                Explore
                            </p>
                            <RiArrowRightDoubleLine className="text-custome-blue-light text-lg" />
                        </div>
                    </div>
                </div>
            </div>

            {/* Second Skip */}
            <div className="bg-custome-blue-light my-14 p-4 mx-5 rounded-xl flex flex-col items-center text-center text-white py-16 px-5 relative">
                <div className="max-w-2xl">
                    <h1 className="text-4xl mb-4">
                        <span className="font-semibold">2 Million+</span> Businesses trust in Tally across <span className="font-semibold">140+</span> countries worldwide.
                    </h1>
                </div>
                <div className="border-t-2 border-custome-yellow p-2 lg:w-32 w-14"></div>
                <p className="text-xl font-roboto my-10">We want you to experience the product and understand how it suits your business. Go ahead, give us a try.</p>
                <div className="lg:flex lg:gap-9">
                    <h3 className="lg:text-3xl text-2xl">
                        Think <span className="font-semibold lg:text-5xl text-4xl">TALLY </span> Call <span className="font-semibold lg:text-5xl text-4xl"> 977 TALLY </span> ( 977 82559 )
                    </h3>
                    <button className="bg-custome-yellow text-black hover:text-custome-blue-light hover:bg-white rounded-full px-12 py-3 lg:my-0 my-5">Ask for FREE Demo</button>
                </div>

                {/* Container for Rocket and Path Images */}
                <div className="absolute lg:left-[25%] lg:top-[20%] bottom-10 left-10 w-[150px] h-[150px] lg:w-[200px] lg:h-[200px]">
                    {/* Rocket Image */}
                    <img src={rocket} alt="rocket" className="absolute lg:top-0 lg:left-28 left-8 opacity-90" />

                    {/* Path Image, positioned within container */}
                    <img src={Path} alt="Path" className="absolute lg:-left-9 lg:top-2 -bottom-8 -left-24 opacity-90" />
                </div>
            </div>





            {/* Third Start */}
            <div className="bg-white my-14">
                <div className="mx-5 lg:mx-auto flex flex-col lg:flex-row items-center justify-between max-w-webContainer gap-10 my-24">
                    {/* Left Side Content */}

                    <div className="w-full lg:max-w-[100%] mt-5 lg:mt-0  h-full flex items-center">
                        <img src={cloud_tally} alt="CloudTallyImage" className="lg:w-[80%] object-cover ml-auto" />
                    </div>

                    {/* Right Side Image */}

                    <div className="flex flex-col items-start max-w-full lg:max-w-[45%] text-center lg:text-left h-full mt-5">
                        <h2 className="text-custome-yellow font-semibold uppercase"> Businesses run BETTER with Tally</h2>
                        <h2 className="text-custome-blue-light text-2xl lg:text-4xl font-semibold items-start mb-7">
                            Businesses run BEST with <br />
                            <span className="border-b-2 border-b-custome-yellow">Tally on</span> Cloud
                        </h2>
                        <p className="font-roboto my-5 text-base lg:text-lg">
                            Tally on Cloud makes Tally to run on any OS – Windows, Linux, MacOS, iOS and Android. It works with amazing speed, updating to centralized data from multiple remote locations over the internet in real time with faster access to
                        </p>
                        <div className="flex items-center gap-1">
                            <p className="text-custome-blue-light py-2 uppercase cursor-pointer hover:text-gray-500 transition-all duration-300 ">
                                Know More
                            </p>
                            <RiArrowRightDoubleLine className="text-custome-blue-light text-lg" />
                        </div>

                    </div>
                </div>
            </div>

            {/* Forth Start */}
            <div
                className="bg-white my-14 bg-cover bg-center relative" // Added flex, items-center, justify-center
                style={{ backgroundImage: `url(${FooterTop})` }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black opacity-70"></div>

                {/* Content */}
                <div className="lg:flex justify-around  text-white relative text-center py-16 px-10">
                    <h3 className="lg:text-3xl text-2xl">
                        Think <span className="font-semibold lg:text-5xl text-3xl">TALLY</span> Call{" "}
                        <span className="font-semibold lg:text-5xl text-3xl"> 977 TALLY</span> ( 977 82559 )
                    </h3>
                    <button className="bg-custome-yellow text-black hover:text-custome-blue-light hover:bg-white rounded-full px-12 py-3 lg:my-0 my-5">
                        Ask for FREE Demo
                    </button>
                </div>
            </div>

            {/* Fifth Start */}
            <div className="bg-white my-14">
                <div className="mx-5 lg:mx-auto  max-w-webContainer mt-24">
                    <div className="flex flex-col items-start max-w-full lg:max-w-[100%] text-center lg:text-left h-full">
                        <img src={shape} alt="shape" className="mb-2  lg:mx-0" />
                        <h2 className="text-custome-blue-light text-2xl lg:text-4xl font-semibold items-start mb-7">
                            Real-time services
                            <div className="border-t-2 border-custome-yellow p-2 lg:w-32 w-14 my-4"></div>
                        </h2>
                    </div>

                    <div className="lg:flex lg:gap-8 ">
                        {/* First Section */}
                        <div className="flex gap-6 items-start mb-8 lg:mb-0">
                            <div className="bg-custome-light-pink p-4 rounded-full">
                                <RiPieChart2Fill className="text-custome-dark-pink text-3xl" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold lg:text-2xl text-lg lg:mb-5 mb-2">Tally Software Services</h3>
                                <p className="text-base font-roboto">Includes continuous product upgrades & updates, online data exchange, data sync between branches, remote access services etc..</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <p className="text-custome-blue-light py-2 uppercase cursor-pointer hover:text-gray-500 transition-all duration-300">
                                        Know More
                                    </p>
                                    <RiArrowRightDoubleLine className="text-custome-blue-light text-lg" />
                                </div>
                            </div>
                        </div>

                        {/* Second Section */}
                        <div className="flex gap-6 items-start mb-8 lg:mb-0">
                            <div className="bg-custome-light-green p-4 rounded-full">
                                <GiNetworkBars className="text-custome-dark-green text-2xl" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold lg:text-2xl text-lg lg:mb-5 mb-2">Tally Software Services</h3>
                                <p className="text-base font-roboto">Enables the programmers to build extensions, customization’s and integrations using Tally Definition Language (TDL).</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <p className="text-custome-blue-light py-2 uppercase cursor-pointer hover:text-gray-500 transition-all duration-300">
                                        Know More
                                    </p>
                                    <RiArrowRightDoubleLine className="text-custome-blue-light text-lg" />
                                </div>
                            </div>
                        </div>

                        {/* Third Section */}
                        <div className="flex gap-6 items-start mb-8 lg:mb-0">
                            <div className="bg-custome-light-purple p-4 rounded-full">
                                <CgNotes className="text-custome-light-blue text-2xl" />
                            </div>
                            <div className="text-left">
                                <h3 className="font-semibold lg:text-2xl text-lg lg:mb-5 mb-2">Tally Software Services</h3>
                                <p className="text-base font-roboto">Looking for feature or functionality to meet your unique business requirement? Build it for your business in a way you want.</p>
                                <div className="flex items-center gap-1 mt-2">
                                    <p className="text-custome-blue-light py-2 uppercase cursor-pointer hover:text-gray-500 transition-all duration-300">
                                        Know More
                                    </p>
                                    <RiArrowRightDoubleLine className="text-custome-blue-light text-lg" />
                                </div>
                            </div>
                        </div>
                    </div>


                </div>
            </div>

        </div>
    );
};

export default Home;
