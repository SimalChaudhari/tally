import React from 'react';
import Slider from 'react-slick'; // Import the Slider component from react-slick
import "slick-carousel/slick/slick.css"; // Import the slick slider's CSS
import "slick-carousel/slick/slick-theme.css"; // Import the theme for the slider

import slider1 from "../../assets/images/slider1.jpg";
import slider2 from "../../assets/images/slider2.jpg";
import slider3 from "../../assets/images/slider3.jpg";
import slider4 from "../../assets/images/slider4.jpg";
import slider5 from "../../assets/images/slider5.jpg";

import content1 from "../../assets/images/oman_logo.png";
import content2 from "../../assets/images/gold_partner.png";

function CustomSlider() {
    // Slider settings
    const settings = {
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
    };

    return (
        <div className="slider-container">
            <Slider {...settings}> {/* Pass settings to the Slider */}
                {/* Slider Items */}
                <div className='lg:h-[600px] h-[400px] relative'>
                    <img src={slider1} alt="Slide 1" className="sm:w-full sm:h-full h-0 w-0 object-cover" />
                    <div className="absolute inset-0 flex items-center  justify-start text-black max-w-[1300px] mx-auto">
                        <div className='flex flex-col items-center justify-center'>
                            <b className="font-roboto mb-5">Presenting</b>
                            <p className="font-roboto font-bold text-4xl">Tally <span className='font-IBMPlex italic font-normal text-2xl'>for</span> Oman</p>
                            <img src={content1} alt="Oman Logo" className=" w-[48%] mt-2" />
                            <p className='font-roboto text-[0.6rem] font-normal mt-2'>www.TallySolutionsOman.com </p>
                            <p className='font-roboto font-semibold'>by Infinity Thoughts</p>
                            <img src={content2} alt="Gold Partner" className=" w-[22%] mt-3" />
                        </div>
                    </div>
                </div>
                <div className='lg:h-[600px] h-[400px] relative'>
                    <img src={slider2} alt="Slide 2" className="sm:w-full sm:h-full h-0 w-0 object-cover" />
                    <div className="absolute inset-0 flex items-center items-center justify-center text-white bg-black bg-opacity-50">
                        <h2 className="text-3xl font-bold">Slide 2 Text</h2>
                    </div>
                </div>
                <div className='lg:h-[600px] h-[400px] relative'>
                    <img src={slider3} alt="Slide 3" className="sm:w-full sm:h-full h-0 w-0 object-cover" />
                    <div className="absolute inset-0 flex items-center items-center justify-center text-white bg-black bg-opacity-50">
                        <h2 className="text-3xl font-bold">Slide 3 Text</h2>
                    </div>
                </div>
                <div className='lg:h-[600px] h-[400px] relative'>
                    <img src={slider4} alt="Slide 4" className="sm:w-full sm:h-full h-0 w-0 object-cover" />
                    <div className="absolute inset-0 flex items-center items-center justify-center text-white bg-black bg-opacity-50">
                        <h2 className="text-3xl font-bold">Slide 4 Text</h2>
                    </div>
                </div>
                <div className='lg:h-[600px] h-[400px] relative'>
                    <img src={slider5} alt="Slide 5" className="sm:w-full sm:h-full h-0 w-0 object-cover" />
                    <div className="absolute inset-0 flex items-center items-center justify-center text-white bg-black bg-opacity-50">
                        <h2 className="text-3xl font-bold">Slide 5 Text</h2>
                    </div>
                </div>
            </Slider>

            {/* Marquee Text Section */}
            <div className="bg-custome-blue-dark text-white py-4">
                <div className="marquee-container lg:max-w-[40%]">
                    <div className="marquee-text text-2xl font-semibold">
                        Tally – The Best Choice For Oman!
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CustomSlider;
