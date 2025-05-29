import React from 'react';
import Karta from '../../img/karta.svg';

const Index = () => {
  return (
    <div className="flex justify-center w-[90%] m-auto mt-10">
      <img src={Karta} alt="Karta" className="w-full max-w-[1340px] h-auto object-contain" />
    </div>
  );
};

export default Index;
