import React from 'react';
import './BackgroundEffetcts.css'

const BackgroundEffects = () => {
    return (
        <div className=' overflow-hidden'>
            <div className='rectangle-1 absolute top-[300px] lg:top-[767px] left-[400px] lg:left-[1300px] w-[220px] lg:w-[436px] h-[200px] lg:h-[444px] overflow-hidden'>
            </div>

            <div className='rectangle-2 absolute top-[-30px] lg:top-[-76px] left lg:left-[974px] lg:w-[345px] lg:h-[514px] overflow-hidden'>
            </div>

            <div className='rectangle-2 absolute lg:top-[1182px] lg:left-[-303px] lg:w-[345px] lg:h-[514px] overflow-hidden'>
            </div>
        </div>
    );
};

export default BackgroundEffects;