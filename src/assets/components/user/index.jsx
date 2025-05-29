import React from 'react';
import userAvatar from '../../img/user.svg'; 

const TestimonialsSection = () => {
  const testimonials = [
    {
      avatar: userAvatar,
      name: 'Иван Иванов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor..',
      date: '01.02 — 03.02',
    },
    {
      avatar: userAvatar,
      name: 'Иван Иванов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      date: '01.02 — 03.02',
    },
    {
      avatar: userAvatar,
      name: 'Иван Иванов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      date: '01.02 — 03.02',
    },
    {
      avatar: userAvatar,
      name: 'Иван Иванов',
      text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.',
      date: '01.02 — 03.02',
    },
  ];

  return (
    <section className="w-[90%] m-auto container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
        Ваши отзывы
        <div className="mx-auto w-16 h-1 bg-blue-500 mt-2 mb-8"></div>
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {testimonials.map((testimonial, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6 flex flex-col items-center text-center">
            <div className="w-20 h-20 rounded-full bg-gray-200 flex items-center justify-center mb-4 overflow-hidden">
              <img src={testimonial.avatar} alt={testimonial.name} className="w-full h-full object-cover" />
            </div>
            <h3 className="text-lg font-semibold text-blue-700 mb-2 ">{testimonial.name}</h3>
            <p className="w-[237px] h-[138px] mb-[20px]">{testimonial.text}</p>
            <p className="text-bold text-[#686868] mt-auto">{testimonial.date}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;