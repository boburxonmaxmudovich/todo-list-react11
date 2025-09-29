import React from "react";
import { FaRegHeart } from "react-icons/fa";
import { Button } from "antd";
import { useDispatch } from "react-redux";
import { getData } from "../../redux/cart-slice";
import toast from "react-hot-toast";

const Card = (props) => {
  const dispatch = useDispatch();
  const { thumbnail, title, price } = props;
  console.log(props, "props");

  return (
    <div className="shadow p-3">
      <div className="relative">
        <img src={thumbnail} alt="" />
        <FaRegHeart className="absolute top-2 right-2" />
      </div>

      <div className="h-[100px] flex items-start justify-between flex-col">
        <div>
          <h1>{title}</h1>
          <h2>{price} $</h2>
        </div>

        <Button
          onClick={() => {
            dispatch(getData(props));
            toast.success("Product cartga qo'shildi");
          }}
          className="w-full"
        >
          Add to cart
        </Button>
      </div>
    </div>
  );
};

export default Card;
