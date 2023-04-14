import React from 'react';
import logo from '../../assets/logo (1).png'


const Header = () => {
    return (
        <div>
            <nav className='leading-[130%] flex justify-between px-[133px] mt-[35px]'>
                <div className='flex items-center'>
                    <img className='logo w-[55px] h-[41px] ' src={logo} alt="" />
                    <div className='text-[18px] font-[600] flex '><span className='text-white'>OR</span> <span className='text-[#DE9A04]'>BIDO</span></div>
                </div>

                <ul className=' list-none flex'>
                    <li className='text-[16px] font-[400] text-white  mr-[55px]'>Home</li>
                    <li className='text-[16px] font-[400] text-white opacity-70  mr-[55px]'>About Us</li>
                    <li className='text-[16px] font-[400] text-white opacity-70  mr-[55px]'>Features</li>
                    <li className='text-[16px] font-[400] text-white opacity-70 '>Solution</li>
                </ul>

            </nav>
        </div>
    );
};

export default Header;