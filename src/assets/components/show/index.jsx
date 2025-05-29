import React from 'react'
import Show from '../../img/show.svg'
import Bas from '../../img/bas.svg'

const index = () => {
  return (
    <div className='w-[90%] m-auto mt-[100px]'>
      <div className='flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-0'>
        <div className='flex flex-col items-center lg:items-start max-w-full lg:max-w-[390px]'>
          <img className='mb-12 w-full max-w-[390px]' src={Show} alt="" />
          <h2 className='mb-5 text-center lg:text-left text-base sm:text-lg leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </h2>
          <h2 className='text-center lg:text-left text-base sm:text-lg leading-relaxed'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </h2>
        </div>
        <div className='w-full max-w-[400px]'>
          <img className='w-full object-contain' src={Bas} alt="" />
        </div>
      </div>
    </div>
  )
}

export default index
