import React from 'react';
import logo from '../../assets/logo (1).png'


const Header = () => {
    return (
        <div>
            <nav className='leading-[130%] flex justify-between px-5 lg:px-[133px] mt-[35px]'>
                <div className='flex items-center'>
                    <img className='logo w-[30px] h-[25px] lg:w-[55px] lg:h-[41px] ' src={logo} alt="" />
                    <div className='text-[14px] lg:text-[18px] font-[600] flex '><span className='text-white'>OR</span> <span className='text-[#DE9A04]'>BIDO</span></div>
                </div>

                <ul className=' list-none flex items-center'>
                    <li className='text-[10px] lg:text-[16px] font-[400] text-white  lg:mr-[55px]'>Home</li>
                    <li className='text-[10px] lg:text-[16px] font-[400] text-white opacity-70  lg:mr-[55px] ml-2 lg:ml-0'>About Us</li>
                    <li className='text-[10px] lg:text-[16px] font-[400] text-white opacity-70  lg:mr-[55px] ml-2 lg:ml-0'>Features</li>
                    <li className='text-[10px] lg:text-[16px] font-[400] text-white opacity-70  ml-2 lg:ml-0'>Solution</li>
                </ul>

            </nav>
        </div>
    );
};

export default Header;