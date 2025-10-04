import React from "react";
import { FaTelegramPlane, FaYoutube, FaInstagram, FaFacebookF } from "react-icons/fa";
import paymeLogo from "../../assets/payme.svg";
import clickLogo from "../../assets/click.svg";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-10">
      <div className="w-[90%] m-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm text-gray-700">
        
        <div>
          <h3 className="font-semibold mb-3">Контакты</h3>
          <p>
            Call-центр <br />
            <span className="text-blue-600">+998-78 555-35-00</span>
          </p>
          <p className="mt-2">
            Эл. почта <br />
            <span className="text-blue-600">info@zon.uz</span>
          </p>
          <p className="mt-2">
            График работы <br />
            В будние: с 09:00 до 18:00 <br />
            Суббота: с 09:00 до 18:00
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Мы в социальных сетях</h3>
          <div className="flex gap-3 text-xl mb-4">
            <FaTelegramPlane className="text-blue-500 cursor-pointer hover:scale-110 transition" />
            <FaYoutube className="text-red-500 cursor-pointer hover:scale-110 transition" />
            <FaInstagram className="text-pink-500 cursor-pointer hover:scale-110 transition" />
            <FaFacebookF className="text-blue-600 cursor-pointer hover:scale-110 transition" />
          </div>
          <div className="flex items-center gap-4">
            <img src={paymeLogo} alt="Payme" className="h-6" />
            <img src={clickLogo} alt="Click" className="h-6" />
          </div>
          <p className="text-xs text-gray-500 mt-2">
            Интернет магазин Zon.uz 2017-2024. <br /> Все права защищены
          </p>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Компания</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">О нас</a></li>
            <li><a href="#" className="hover:text-blue-600">Реквизиты</a></li>
            <li><a href="#" className="hover:text-blue-600">Контакты</a></li>
            <li><a href="#" className="hover:text-blue-600">Вакансии</a></li>
            <li><a href="#" className="hover:text-blue-600">Карта сайта</a></li>
            <li><a href="#" className="hover:text-blue-600">Публичная оферта</a></li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-3">Помощь</h3>
          <ul className="space-y-2">
            <li><a href="#" className="hover:text-blue-600">Вопросы и ответы</a></li>
            <li><a href="#" className="hover:text-blue-600">Условия рассрочки</a></li>
            <li><a href="#" className="hover:text-blue-600">Способ оплаты</a></li>
            <li><a href="#" className="hover:text-blue-600">Доставка</a></li>
            <li><a href="#" className="hover:text-blue-600">Возврат товаров</a></li>
            <li><a href="#" className="hover:text-blue-600">Сервисные центры</a></li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
