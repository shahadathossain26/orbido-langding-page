import React from 'react';
import logo from '../../assets/logo (1).png'
import icon1 from '../../assets/social_icons/Group 481771.png'

const Footer = () => {
    return (
        <div className=' mt-16 px-5 lg:mt-[121.5px] mb-[34.5px] lg:pl-[161px] lg:pr-[109px]'>
            <div className='lg:flex justify-between'>
                <div className='w-full lg:w-2/5 mt-[17px]'>
                    <div className='flex items-center'>
                        <img className='logo w-[94px] h-[69px] ml-[-40px] ' src={logo} alt="" />
                        <div className='text-[41px] font-[600] flex '><span className='text-white'>OR</span> <span className='text-[#DE9A04]'>BIDO</span></div>
                    </div>
                    <p className='text-[18px] font-[400] text-white opacity-70 w-[312px] mt-[20px]'>A new way to make the payments easy, reliable and secure.</p>
                </div>

                <div className='w-full lg:w-1/5 mt-10 lg:mt-0'>
                    <h3 className='text-[18px] font-[500] text-white'>Usefull links</h3>
                    <ul className=' list-none mt-1 lg:mt-6'>
                        <li className='text-[16px] font-[400] text-white opacity-70 mb-3'>Content</li>
                        <li className='text-[16px] font-[400] text-white opacity-70 mb-3'>How it Works</li>
                        <li className='text-[16px] font-[400] text-white opacity-70 mb-3'>Creats</li>
                        <li className='text-[16px] font-[400] text-white opacity-70 mb-3'>Explore</li>
                        <li className='text-[16px] font-[400] text-white opacity-70'>Terms & Services</li>
                    </ul>
                </div>

                <div className='w-full lg:w-1/5 lg:pl-16 mt-10 lg:mt-0'>
                    <h3 className='text-[18px] font-[500] text-white'>Community</h3>
                    <ul className=' list-none mt-1 lg:mt-6'>
                        <li className='text-[16px] font-[400] text-white opacity-70 mb-3'>Help Center</li>
                        <li className='text-[16px] font-[400] text-white opacity-70 mb-3'>Partners</li>
                        <li className='text-[16px] font-[400] text-white opacity-70 mb-3'>Suggestion</li>
                        <li className='text-[16px] font-[400] text-white opacity-70 mb-3'>Blog</li>
                        <li className='text-[16px] font-[400] text-white opacity-70'>Newsletter</li>
                    </ul>
                </div>

                <div className='w-full lg:w-1/5 lg:pl-16 mt-10 lg:mt-0'>
                    <h3 className='text-[18px] font-[500] text-white'>Partners</h3>
                    <ul className=' list-none mt-1 lg:mt-6'>
                        <li className='text-[16px] font-[400] text-white opacity-70 mb-3'>Our Partner</li>
                        <li className='text-[16px] font-[400] text-white opacity-70 mb-3'>Become a Partner</li>
                    </ul>
                </div>
            </div>

            <hr className='border-1 border-[#3F3E45] mt-[40px] mb-[30px]' />

            <div className='flex justify-between'>
                <p className='text-white opacity-60 text-[18px]'><span style={{ fontFamily: 'Abel' }} className='mr-[15px]'>Copyright</span> <span className='mr-[22px]'>&copy;</span> 2023 Orbido. All rights reserved.</p>

                <div className='mr-5'>
                    <img src={icon1} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;