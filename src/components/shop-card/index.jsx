import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteData, incrementCount, decrementCount } from "../../redux/cart-slice";

const ShopCard = ({ id, thumbnail, description, price, userPrice, count = 1 }) => {
  const dispatch = useDispatch();
  const [isFavorite, setIsFavorite] = useState(false);

  const handleIncrement = () => {
    dispatch(incrementCount(id));
  };

  const handleDecrement = () => {
    dispatch(decrementCount(id));
  };

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite);
  };

  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm md:p-6">
      <div className="space-y-4 md:flex md:items-center md:justify-between md:gap-6 md:space-y-0">
        <Link to={`/product/${id}`} className="shrink-0 md:order-1">
          <img className="h-20 w-20" src={thumbnail} alt="product image" />
        </Link>

        <div className="flex items-center justify-between md:order-3 md:justify-end">
          <div className="flex items-center">
            <button onClick={handleDecrement} className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200">
              <svg className="h-2.5 w-2.5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 2">
                <path stroke="currentColor" strokeWidth={2} d="M1 1h16" />
              </svg>
            </button>

            <span className="px-2 text-black">{count}</span>

            <button onClick={handleIncrement} className="inline-flex h-5 w-5 items-center justify-center rounded-md border border-gray-300 bg-gray-100 hover:bg-gray-200">
              <svg className="h-2.5 w-2.5 text-gray-900" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 18">
                <path stroke="currentColor" strokeWidth={2} d="M9 1v16M1 9h16" />
              </svg>
            </button>
          </div>

          <div className="text-end md:order-4 md:w-32">
            <p className="text-base font-bold text-gray-900">{price} сум</p>
            <p className="text-base font-bold text-gray-900">{userPrice} сум</p>
            <p className="text-sm text-green-600">Total: {(count * userPrice).toFixed(2)} сум</p>
          </div>
        </div>

        <div className="w-full min-w-0 flex-1 space-y-4 md:order-2 md:max-w-md">
          <Link to={`/product/${id}`} className="text-base font-medium text-gray-900 hover:underline">
            {description}
          </Link>

          <div className="flex items-center gap-4">
            <button onClick={toggleFavorite} className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-gray-900 hover:underline">
              <svg className="me-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill={isFavorite ? "red" : "none"} viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth={2} d="M12.01 6.001C6.5 1 1 8 5.782 13.001L12.011 20l6.23-7C23 8 17.5 1 12.01 6.002Z" />
              </svg>
              {isFavorite ? "Added to Favorites" : "Add to Favorites"}
            </button>

            <button onClick={() => dispatch(deleteData(id))} className="inline-flex items-center text-sm font-medium text-red-600 hover:underline">
              <svg className="me-1.5 h-5 w-5" xmlns="http://www.w3.org/2000/svg" width={24} height={24} fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" strokeWidth={2} d="M6 18 17.94 6M18 18 6.06 6" />
              </svg>
              Remove
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShopCard;
