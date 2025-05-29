import React, { useState } from 'react';
import Bayqal from '../../img/Bayqal.svg';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-[90%] m-auto mt-5 relative">
      <div className="flex justify-between items-center">
        <img src={Bayqal} alt="Logo" className="w-[120px]" />
        <nav className="hidden md:flex gap-[30px] text-[#686868] font-bold">
          <p className="cursor-pointer">Главная</p>
          <p className="cursor-pointer">О гостинице</p>
          <p className="cursor-pointer">Преимущества</p>
          <p className="cursor-pointer">Номера</p>
          <p className="cursor-pointer">Отзывы</p>
        </nav>

        <div className="hidden md:block">
          <button className="border border-[#2F70D9] text-[#2F70D9] px-4 py-1 rounded-[5px]">
            Обратный звонок
          </button>
        </div>
        <div className="md:hidden z-50">
          <button onClick={() => setIsMenuOpen(true)}>
            <Menu size={24} />
          </button>
        </div>
      </div>

      <div
        className={`fixed top-0 left-0 h-full w-[250px] bg-white shadow-lg z-40 p-5 transform transition-transform duration-300 ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-bold text-[#2F70D9]">Меню</h2>
          <button onClick={() => setIsMenuOpen(false)}>
            <X size={24} />
          </button>
        </div>
        <nav className="kolor flex flex-col gap-4 text-[#686868] font-bold">
          <p className="cursor-pointer">Главная</p>
          <p className="cursor-pointer">О гостинице</p>
          <p className="cursor-pointer">Преимущества</p>
          <p className="cursor-pointer">Номера</p>
          <p className="cursor-pointer">Отзывы</p>
          <button className="buttuns">
            Обратный звонок
          </button>
        </nav>
      </div>

      {isMenuOpen && (
        <div
          onClick={() => setIsMenuOpen(false)}
          className="fixed inset-0 bg-black bg-opacity-40 z-30"
        ></div>
      )}
    </header>
  );
};

export default Header;
