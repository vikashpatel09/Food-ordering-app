import React from "react";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { MdDelete } from "react-icons/md";
import { useDispatch } from "react-redux";
import { removeFromCart, incrementQty, decrementQty } from "../store/cartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({ id, name, qty, price, img }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex gap-2 shadow-md rounded-lg p-3 mb-3">
      <MdDelete
        onClick={() => {
          dispatch(removeFromCart({ id, img, name, price, qty }));
          toast(`${name} Removed!`, {
            icon: "👋",
          });
        }}
        className="absolute right-7 text-gray-800 cursor-pointer hover:text-gray-600"
      />
      <img src={img} alt="" className="w-[60px] h-[60px] " />
      <div className="leading-5">
        <h2 className="text-gray-800 font-bold mb-2">{name}</h2>
        <div className="flex">
          <span className="text-orange-500 font-bold">₹{price}</span>
          <div className="flex justify-center items-center gap-2 absolute right-7">
            <AiOutlineMinus
              onClick={() =>
                qty > 1 ? dispatch(decrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-none text-xl rounded-md transition-all duration-200 ease-in-out cursor-pointer"
            />
            <span>{qty}</span>
            <AiOutlinePlus
              onClick={() =>
                qty >= 1 ? dispatch(incrementQty({ id })) : (qty = 0)
              }
              className="border-2 border-gray-600 text-gray-600 hover:bg-orange-500 hover:text-white hover:border-none text-xl rounded-md transition-all duration-200 ease-in-out cursor-pointer"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;