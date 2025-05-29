import React from 'react';
import travelingMan from '../../img/qiz.svg';
import womanWithPlant from '../../img/ogil.svg';
import singleRoomImg from '../../img/121.svg';
import doubleRoomImg from '../../img/12.svg';

const index = () => {
  return (
    <div className='w-[90%] m-auto'>
      <h2 className="text-4xl font-bold mb-12 text-[#2F70D9]">
        Наши номера
      </h2>
      <div className='flex flex-wrap justify-between gap-6'>
        <img className='w-full sm:w-[48%] md:w-[23%]' src={travelingMan} alt="" />
        <img className='w-full sm:w-[48%] md:w-[23%]' src={singleRoomImg} alt="" />
        <img className='w-full sm:w-[48%] md:w-[23%]' src={doubleRoomImg} alt="" />
        <img className='w-full sm:w-[48%] md:w-[23%]' src={womanWithPlant} alt="" />
      </div>
    </div>
  );
};

export default index;
