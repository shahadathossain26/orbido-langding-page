import React from 'react';
import appStore from '../../assets/payment_icons/app_store.png'
import googlePlay from '../../assets/payment_icons/google-play.png'
import priceUp from '../../assets/payment_icons/price_up.png'
import priceDown from '../../assets/payment_icons/price_down.png'
import dribble from '../../assets/payment_icons/dribble.png'
import netflix from '../../assets/payment_icons/netflix.png'
import manulife from '../../assets/payment_icons/manulife.png'
import paypal from '../../assets/payment_icons/paypal.png'
import './Payment.css'
import { Toaster, toast } from 'react-hot-toast';

const Payment = () => {
    const handlePayment = () => {
        toast.success('Great! Your payment is successfull')
    }

    return (
        <div className='w-full mt-16 lg:mt-[329px] lg:pl-[141px] lg:pr-[129px] relative'>
            <div className='lg:flex items-center justify-between'>
                <div className='w-full lg:w-3/5'>
                    <div className='last-transaction w-[227px] px-[20px] pt-[20px] pb-[23px] lg:absolute mx-auto lg:mx-0 mb-5 lg:mb-0 lg:bottom-[220px] lg:left-[350px]  z-30'>
                        <div className='flex items-center'>
                            <img className='w-[56px] h-[56px] mr-3' src={paypal} alt="" />
                            <div>
                                <h3 className='text-[24px] text-white font-[600]'>Paypal</h3>
                                <p className='text-[12px] text-white font-[400] opacity-70'>Checkout</p>
                            </div>
                        </div>

                        <div className='mt-[24px] mb-[19px] flex justify-between'>
                            <div>
                                <p className='text-[12px] text-white font-[400] opacity-70'>Total</p>
                                <p className='text-[18px] font-[500] text-white'>$210</p>
                            </div>
                            <button className='change-btn w-[77.87px] h-[33px] text-[12px] text-white font-[400] opacity-70 px-[10.27px] py-[7px] leading-[160%]'>Change</button>
                        </div>
                        <button onClick={handlePayment} className='gs-btn w-[187.97px] px-[47.25px] py-[7px] text-[#00030d] text-[12px] font-[500] leading-[160%] cursor-pointer'>Make Payment</button>
                    </div>

                    <div className='last-transaction w-[335px] px-[20px] py-[26px] mx-auto lg:mx-0'>
                        <h3 className='text-[22px] font-[600] text-white mb-8'>Last Transaction</h3>

                        <div className='flex justify-between mb-5'>
                            <div className='flex items-center'>
                                <img className='mr-3' src={dribble} alt="dribble" />
                                <div>
                                    <h4 className='text-[16px] font-[600] text-white'>Dribble Pro</h4>
                                    <p className='text-[12px] font-[400] text-white opacity-70'>15 days ago</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img className='mr-1' src={priceDown} alt="" />
                                <span className='text-[14px] font-[400] text-white'>-250,93</span>
                            </div>
                        </div>

                        <div className='flex justify-between mb-5'>
                            <div className='flex items-center'>
                                <div className='w-10 h-10 rounded-[50%] bg-[#FDFDFE] flex items-center mr-3'>
                                    <img className='ml-1' src={netflix} alt="netflix" />
                                </div>
                                <div>
                                    <h4 className='text-[16px] font-[600] text-white'>Netflix</h4>
                                    <p className='text-[12px] font-[400] text-white opacity-70'>4 days ago</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img className='mr-1' src={priceDown} alt="" />
                                <span className='text-[14px] font-[400] text-white'>-250,93</span>
                            </div>
                        </div>

                        <div className='flex justify-between'>
                            <div className='flex items-center'>
                                <div className='w-10 h-10 rounded-[50%] bg-[#DFFFF0] flex items-center justify-center mr-3'>
                                    <img className='' src={manulife} alt="manulife" />
                                </div>
                                <div>
                                    <h4 className='text-[16px] font-[600] text-white'>Manulife Cash</h4>
                                    <p className='text-[12px] font-[400] text-white opacity-70'>4 days ago</p>
                                </div>
                            </div>
                            <div className='flex items-center'>
                                <img className='mr-1' src={priceUp} alt="" />
                                <span className='text-[14px] font-[400] text-white'>-250,93</span>
                            </div>
                        </div>
                    </div>

                </div>

                <div className='w-full lg:w-2/5 px-5 lg:px-0 mt-5 lg:mt-0 text-center lg:text-start'>
                    <h2 className='text-[28px] lg:text-[48px] font-[600] text-white'>Easily control your billing & invoicing.</h2>
                    <p className='text-[18px] font-[400] text-white opacity-70 mt-6 mb-5 lg:mb-[48px]'>Elit emnim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttittor integer platea placerat.</p>
                    <div className='flex items-center'>
                        <div className='bg-black px-[10px] py-[7px] mr-[32.14px] rounded-[7px]'>
                            <img src={appStore} alt="appStore" />
                        </div>
                        <img src={googlePlay} alt="googlePlay" />
                    </div>

                </div>
            </div>
            <Toaster
                containerStyle={{
                    position: 'fixed',
                    top: 0
                }}
            ></Toaster>
        </div>
    );
};

export default Payment;