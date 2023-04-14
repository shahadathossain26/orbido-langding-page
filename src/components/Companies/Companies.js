import React from 'react';
import airbnb from '../../assets/company_logos/airbnb.png'
import binance from '../../assets/company_logos/binance.png'
import coinbase from '../../assets/company_logos/coinbase.png'
import dropbox from '../../assets/company_logos/dropbox.png'

const Companies = () => {
    return (
        <div className='lg:mt-[183px] mx-[187px] flex justify-between items-center'>
            <img src={airbnb} alt="airbnb" />
            <img src={binance} alt="binance" />
            <img src={coinbase} alt="coinbase" />
            <img src={dropbox} alt="dropbox" />
        </div>
    );
};

export default Companies;