import React from 'react'
import Navbarlogo from '../../img/Navbarlogo.svg'
import Home from '../../img/home.svg'

const index = () => {
  return (
    <div className='mt-[30px] w-[90%] m-auto flex flex-col lg:flex-row items-center justify-between gap-6 lg:gap-0 py-6'>
      <div className='text-center lg:text-left'>
        <img src={Navbarlogo} alt="" className='mx-auto lg:mx-0' />
        <p className='w-full max-w-[483px] h-auto mt-4 text-sm sm:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
        <button className='buttuns bg-[#D95845] text-white rounded-md mt-4'>
          Забронировать
        </button>
      </div>
      <div>
        <img src={Home} alt="" className='w-full max-w-[500px]' />
      </div>
    </div>
  )
}

export default index
