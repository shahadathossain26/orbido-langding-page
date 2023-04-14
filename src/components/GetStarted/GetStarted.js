import React from 'react';
import star from '../../assets/icons/Star.png'
import fill from '../../assets/icons/Fill 1.png'
import send from '../../assets/icons/Send.png'
import './GetStarted.css'

const GetStarted = () => {
    return (
        <div className='w-full lg:flex justify-between items-center lg:pl-[141px] lg:pr-[129px] mt-[139px] gap-[78px]'>
            <div className='lg:w-1/2 '>
                <h2 className='lg:text-[48px] font-[600] leading-[160%] text-white'>You do this business, we'll handle the money.</h2>
                <p className='text-white opacity-70 text-[18px] leading-[170%] mt-[24px] mb-[48px] font-[400]'>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundred of credit card on the market</p>
                <button className='gs-btn w-[170px] px-[33px] py-[18px] text-[#00040E] text-[18px] font-[500] leading-[150%]'>Get Started</button>
            </div>

            <div className='lg:w-1/2'>
                <div className='card w-full flex items-center p-[20px] mb-4 cursor-pointer'>
                    <div className='w-[110px] h-[64px] bg-[#0A181C] rounded-[50%] flex justify-center items-center mr-[20px]'>
                        <img src={star} alt="star" />
                    </div>

                    <div>
                        <h4 className='text-[18px] font-[600] text-white mb-2'>Rewards</h4>
                        <p className='text-[16px] font-[400] text-white opacity-70 leading-[24px]'>The best credit card offter some tantilizing combinations of promotions and prizes</p>
                    </div>
                </div>

                <div className='card w-full flex items-center p-[20px] mb-4 cursor-pointer'>
                    <div className='w-[110px] h-[64px] bg-[#0A181C] rounded-[50%] flex justify-center items-center mr-[20px]'>
                        <img src={star} alt="star" />
                    </div>

                    <div>
                        <h4 className='text-[18px] font-[600] text-white mb-2'>100% Secured</h4>
                        <p className='text-[16px] font-[400] text-white opacity-70 leading-[24px]'>We take proactive steps make sure your information and trasactions are secured</p>
                    </div>
                </div>

                <div className='card w-full flex items-center p-[20px] cursor-pointer'>
                    <div className='w-[110px] h-[64px] bg-[#0A181C] rounded-[50%] flex justify-center items-center mr-[20px]'>
                        <img src={send} alt="star" />
                    </div>
                    <div>
                        <h4 className='text-[18px] font-[600] text-white mb-2'>Balance Transfer</h4>
                        <p className='text-[16px] font-[400] text-white opacity-70 leading-[24px]'>A balance transfer credit card can save you a lot of money in interenst charges.</p>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default GetStarted;