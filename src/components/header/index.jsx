import React from "react";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";
import { LuShoppingBag } from "react-icons/lu";

const Header = () => {
  return (
    <header className="w-[90%] m-auto flex item-center justify-between gap-5 py-4">
      <h3 className="text-xl">Logo</h3>
      <div className="flex items-center gap-4">
        <Link to={"/"}>Home</Link>
        <h3>About</h3>
        <h3>Contact</h3>
      </div>
      <div className="flex items-center gap-2">
        <Link to={"/like"}>
          <FaRegHeart className="text-[18px]" />
        </Link>
        <Link to={"/cart"}>
          <LuShoppingBag className="text-[18px]" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
