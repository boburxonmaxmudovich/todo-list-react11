import React from "react";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { getData, toggleLike } from "../../redux/cart-slice";
import toast from "react-hot-toast";
import shop from "../../assets/cart-shop.svg";

const Card = (props) => {
  const dispatch = useDispatch();
  const { thumbnail, title, price, id } = props;
  const { likes } = useSelector((state) => state.cartSlice);
  const isLiked = likes.some((item) => item.id === id);

  return (
    <div className="shadow p-3 flex flex-col relative">
      <div className="relative w-full h-[200px] flex items-center justify-center">
        <img src={thumbnail} alt={title} className="object-contain max-h-full" />

        <button
          onClick={() => {
            dispatch(toggleLike(props));
            if (isLiked) toast.error("Mahsulot bu bolimdan olindi");
            else toast.success("Mahsulot like ka qoshildi");
          }}
          className="absolute top-2 right-2 cursor-pointer text-xl"
        >
          {isLiked ? (
            <FaHeart className="text-red-500" />
          ) : (
            <FaRegHeart className="text-gray-500 hover:text-red-400" />
          )}
        </button>
      </div>

      <div className="flex flex-col flex-1 justify-between mt-2">
        <div>
          <h1 className="font-semibold text-sm line-clamp-2 h-[40px]">
            {title}
          </h1>
          <h2 className="text-blue-600 font-bold mt-1">
            {price ? price.toLocaleString("uz-UZ") : "0"} сум
          </h2>
        </div>

        <div className="flex justify-end mt-2">
          <img
            onClick={() => {
              dispatch(getData(props));
              toast.success("Product cartga qo‘shildi");
            }}
            src={shop}
            className="cursor-pointer rounded-full active:bg-blue-800 hover:scale-110 active:scale-95 shadow-md hover:shadow-lg transition duration-300 ease-in-out"
            alt="cart"
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
