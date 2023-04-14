import React from 'react';
import './OurService.css'

const OurService = () => {
    return (

        <div className='service-card mt-16 lg:mt-[126px] px-10 py-6 lg:mx-[135px] lg:px-[99px] lg:pt-[24px] lg:pb-[104.5px]'>
            <div className='service-info flex items-center justify-between'>
                <div>
                    <h2 className='text-[18px] lg:text-[48px] font-[600] text-white mb-2 lg:mb-6'>Let's try our service now!</h2>
                    <p className='text-[10px] lg:text-[18px] font-[400] text-white opacity-70 lg:w-[445px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <div>
                    <button className='gs-btn w-[80px] lg:w-[170px] px-3 py-1 lg:px-[33px] lg:py-[18px] text-[#00040E] text-[10px] lg:text-[18px] font-[500] leading-[150%]'>Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default OurService;