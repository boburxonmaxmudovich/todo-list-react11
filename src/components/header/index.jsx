import React from "react";
import { Link } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { FaGlobe } from "react-icons/fa";
import logo from "../../assets/header-logo.svg";
import shop_icon from "../../assets/shop.svg";
import like from "../../assets/like.svg";
import user from "../../assets/user.svg";
import katalog from "../../assets/shop-icon.svg";
import { useSelector } from "react-redux";
import { Badge } from "antd";

const Header = () => {
  const { data, likes } = useSelector((state) => state.cartSlice);

  return (
    <header className="w-full border-b border-gray-200">
      {/* 🔹 Yuqori panel */}
      <div className="w-[90%] m-auto flex items-center justify-between py-3 text-sm text-gray-600">
        <div className="flex items-center gap-6">
          <span className="flex items-center gap-1 cursor-pointer">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 text-gray-500"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 12.414A4 4 0 0110 20H6a6 6 0 016-6h.586l4.243 4.243a4 4 0 005.657-5.657z"
              />
            </svg>
            Ташкент
          </span>
          <span className="cursor-pointer">Продавайте на Zon.uz</span>
          <span className="cursor-pointer">Купить как юрлицо</span>
          <span className="cursor-pointer">Контакты</span>
        </div>

        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1">+998-78 555-55-35</span>
        </div>
      </div>

      {/* 🔹 Asosiy qidiruv paneli */}
      <div className="w-[90%] m-auto flex items-center justify-between py-4">
        <Link to={"/"}>
          <img src={logo} alt="Logo" />
        </Link>

        <div className="flex flex-1 mx-6 max-w-[700px] gap-[20px]">
          <button
            className="cursor-pointer  
             active:bg-blue-800 
             hover:scale-110 active:scale-95 
             shadow-md hover:shadow-lg 
             transition duration-300 ease-in-out"
          >
            <img src={katalog} alt="catalog" />
          </button>

          <input
            type="text"
            placeholder="Найти на Zon.uz"
            className="flex-1 border border-indigo-400 rounded-[8px] outline-none px-3 py-2 text-sm shadow-md hover:shadow-lg transition duration-200 ease-in-out"
          />

          <button
            className="bg-indigo-500 text-white px-4 py-2 rounded-r-lg hover:bg-indigo-600 active:bg-blue-800 
             hover:scale-110 active:scale-95 
             shadow-md hover:shadow-lg 
             transition duration-300 ease-in-out"
          >
            <FiSearch size={18} />
          </button>
        </div>

        {/* 🔹 Ikonlar qismi */}
        <div className="flex items-center gap-10">
          {/* 🛒 Cart belgisi */}
          <Badge count={data.length} offset={[0, 3]}>
            <Link
              to={"/cart"}
              className="cursor-pointer rounded-full
               active:bg-blue-800 
               hover:scale-110 active:scale-95 
               shadow-md hover:shadow-lg 
               transition duration-300 ease-in-out"
            >
              <img src={shop_icon} alt="cart" />
            </Link>
          </Badge>

          {/* 🌍 Globe belgisi */}
          <FaGlobe
            className="cursor-pointer rounded-full
             active:bg-blue-800 
             hover:scale-110 active:scale-95 
             shadow-md hover:shadow-lg 
             transition duration-300 ease-in-out"
          />

          {/* ❤️ Like belgisi */}
          <Badge count={likes.length} offset={[0, 3]}>
            <Link
              to={"/like"}
              className="cursor-pointer rounded-full
               active:bg-blue-800 
               hover:scale-110 active:scale-95 
               shadow-md hover:shadow-lg 
               transition duration-300 ease-in-out"
            >
              <img src={like} alt="like" />
            </Link>
          </Badge>

          {/* 👤 Foydalanuvchi belgisi */}
          <Link
            to={"/user"}
            className="cursor-pointer rounded-full
             active:bg-blue-800 
             hover:scale-110 active:scale-95 
             shadow-md hover:shadow-lg 
             transition duration-300 ease-in-out"
          >
            <img src={user} alt="user" />
          </Link>
        </div>
      </div>

      {/* 🔹 Pastki navigatsiya */}
      <div className="w-[90%] m-auto flex items-center gap-6 text-sm font-medium py-2">
        <Link to={"/sales"} className="text-red-500">
          % Акции
        </Link>
        <Link to={"/"}>Электроинструменты</Link>
        <Link to={"/"}>Сварочные аппараты</Link>
        <Link to={"/"}>Всё для сада</Link>
        <Link to={"/"}>Инверторы</Link>
        <Link to={"/"}>Измерительные инструменты</Link>
        <Link to={"/"}>Сервисы</Link>
        <Link to={"/"}>Бренды</Link>
      </div>
    </header>
  );
};

export default Header;
