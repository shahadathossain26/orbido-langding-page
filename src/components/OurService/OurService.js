import React from 'react';
import './OurService.css'

const OurService = () => {
    return (

        <div className='service-card lg:mt-[126px] lg:mx-[135px] lg:px-[99px] lg:pt-[24px] lg:pb-[104.5px]'>
            <div className='service-info flex items-center justify-between'>
                <div>
                    <h2 className='lg:text-[48px] font-[600] text-white mb-6'>Let's try our service now!</h2>
                    <p className='text-[18px] font-[400] text-white opacity-70 lg:w-[445px]'>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
                </div>
                <div>
                    <button className='gs-btn w-[170px] px-[33px] py-[18px] text-[#00040E] text-[18px] font-[500] leading-[150%]'>Get Started</button>
                </div>
            </div>
        </div>

    );
};

export default OurService;