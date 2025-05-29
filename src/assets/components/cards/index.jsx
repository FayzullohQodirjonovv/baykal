// src/components/OffersSection.js
import React from 'react';

import img1 from '../../img/1.svg';
import img2 from '../../img/2.svg';
import img3 from '../../img/3.svg';
import img4 from '../../img/4.svg';
import img5 from '../../img/5.svg';
import img6 from '../../img/6.svg';
import img7 from '../../img/7.svg';
import img8 from '../../img/8.svg';
import img9 from '../../img/9.svg';

const OffersSection = () => {
  const services = [
    {
      icon: <img src={img1} alt="Wi-Fi" className="h-12 w-12 object-contain" />,
      title: 'Бесплатный Wi-Fi',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: <img src={img2} alt="Круглосуточный доступ" className="h-12 w-12 object-contain" />,
      title: 'Круглосуточный доступ',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: <img src={img3} alt="Телевизор" className="h-12 w-12 object-contain" />,
      title: 'Телевизор',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: <img src={img4} alt="Парковка" className="h-12 w-12 object-contain" />,
      title: 'Парковка',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: <img src={img5} alt="Влажная уборка" className="h-12 w-12 object-contain" />,
      title: 'Влажная уборка',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: <img src={img6} alt="Банно-прачечный комплекс" className="h-12 w-12 object-contain" />,
      title: 'Банно-прачечный комплекс',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: <img src={img7} alt="Собственная кухня" className="h-12 w-12 object-contain" />,
      title: 'Собственная кухня',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: <img src={img8} alt="Банкетный зал" className="h-12 w-12 object-contain" />,
      title: 'Банкетный зал',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
    {
      icon: <img src={img9} alt="Просторная столовая" className="h-12 w-12 object-contain" />,
      title: 'Просторная столовая',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
    },
  ];

  return (
    <section className="container mx-auto px-4 py-12 w-[90%] m-auto">
      <h2 className="text-4xl font-bold  mb-12 text-[#2F70D9]">
        Мы предлагаем
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="flex flex-col items-center text-center p-4">
            <div className="text-blue-500 mb-4">
              {service.icon}
            </div>
            <h3 className="text-lg font-semibold mb-2 text-gray-800">{service.title}</h3>
            <p className="text-sm text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OffersSection;