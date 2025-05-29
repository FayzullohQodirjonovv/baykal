import React from 'react';
import hotelLogo from '../../img/1c.svg'; 
import whatsappIcon from '../../img/fatsa.svg'; // WhatsApp ikonkasi
import viberIcon from '../../img/bayber.svg'; // Viber ikonkasi


const Footer = () => {
  return (
    <footer className="mt-[50px] bg-gray-800 text-gray-300 py-12 px-4 relative"> {/* relative qo'shildi */}
      <div className="w-[90%] m-auto container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Logo qismi */}
        <div className="flex flex-col items-center md:items-start">
          <img src={hotelLogo} alt="Гостиница Байкал" className="h-16 mb-4" />
        </div>

        {/* Навигация */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Навигация</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-400 transition-colors">Главная</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">О гостинице</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Преимущества</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Номера</a></li>
            <li><a href="#" className="hover:text-blue-400 transition-colors">Отзывы</a></li>
          </ul>
        </div>

        {/* Быстрая связь */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Быстрая связь</h3>
          <div className="space-y-3">
            <button className="bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-6 rounded transition-colors w-full">
              Забронировать
            </button>
            <button className="border border-blue-500 text-blue-400 hover:bg-blue-900 hover:text-white font-bold py-2 px-6 rounded transition-colors w-full">
              Обратный звонок
            </button>
          </div>
        </div>

        {/* Контакты */}
        <div>
          <h3 className="text-lg font-semibold text-white mb-4">Контакты</h3>
          <address className="not-italic space-y-2">
            <p className="text-gray-400">Адрес:</p>
            <p>Кайдаловская ул., 37, Чита</p>
            <p>+7 (3022) 217856</p>
            <p>+79294830255</p>
          </address>
          <div className="flex space-x-4 mt-4">
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={whatsappIcon} alt="WhatsApp" className="h-8 w-8" />
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <img src={viberIcon} alt="Viber" className="h-8 w-8" />
            </a>
          </div>

        </div>

      </div>

          <p className="text-sm text-center">© Все права защищены.</p>

    </footer>
  );
};

export default Footer;