import React from 'react';
import airbnb from '../../assets/company_logos/airbnb.png'
import binance from '../../assets/company_logos/binance.png'
import coinbase from '../../assets/company_logos/coinbase.png'
import dropbox from '../../assets/company_logos/dropbox.png'

const Companies = () => {
    return (
        <div className='mt-16 lg:mt-[183px] lg:mx-[187px] lg:flex justify-between items-center'>
            <img className='mb-8 lg:mb-0 mx-auto lg:mx-0' src={airbnb} alt="airbnb" />
            <img className='mb-8 lg:mb-0 mx-auto lg:mx-0' src={binance} alt="binance" />
            <img className='mb-8 lg:mb-0 mx-auto lg:mx-0' src={coinbase} alt="coinbase" />
            <img className='mb-8 lg:mb-0 mx-auto lg:mx-0' src={dropbox} alt="dropbox" />
        </div>
    );
};

export default Companies;