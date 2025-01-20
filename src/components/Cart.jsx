import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaShoppingCart } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import CartItem from "./CartItem";
import { clearCart } from "../store/cartSlice";

const Cart = () => {
  const [activeCart, setActiveCart] = useState(false);

  const cartItems = useSelector((state) => state.cart.cart);
  const totalQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);
  const totalPrice = cartItems.reduce((total, item) => total + item.qty * item.price, 0);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handlePlaceOrder = () => {
    if (cartItems.length > 0) {
      navigate("/success");
      dispatch(clearCart());
    }
  };

  return (
    <>
      <div
        className={`fixed right-0 top-0 w-full md:w-[30vw] h-full p-5 bg-white mb-3 ${activeCart ? "translate-x-0" : "translate-x-full"
          } transition-all duration-500 z-10`}
      >
        <div className="flex justify-between items-center my-3">
          <span className="text-xl font-bold text-gray-800">My Order</span>
          <IoMdClose
            onClick={() => setActiveCart(!activeCart)}
            className="border-2 border-gray-600 rounded-md text-gray-600 text-xl hover:text-red-400 hover:border-red-400 cursor-pointer font-bold"
          />
        </div>

        {cartItems.length > 0 ? (
          cartItems.map((food) => {
            return (
              <CartItem
                key={food.id}
                id={food.id}
                name={food.name}
                price={food.price}
                img={food.img}
                qty={food.qty}
              />
            );
          })
        ) : (
          <h2 className="text-center text-xl font-bold text-gray-800">
            Your cart is empty
          </h2>
        )}

        <div className="absolute bottom-0 ">
          <h3 className="font-semibold text-gray-800">Items : {totalQty}</h3>
          <h3 className="font-semibold text-gray-800">
            Total Amount : {totalPrice}
          </h3>
          <hr className="w-[90vw] lg:w-[18vw] my-2" />
          <button
            onClick={handlePlaceOrder}
            className={`bg-orange-500 font-bold px-3 text-white py-2 rounded-lg w-[90vw] md:w-[25vw] mb-5 hover:bg-orange-600 ${cartItems.length > 0 ? "block" : "hidden"}`}
          >
            Place Order
          </button>
        </div>
      </div>
      <FaShoppingCart
        onClick={() => setActiveCart(!activeCart)}
        className={`rounded-full bg-white shadow-md text-5xl p-3 fixed bottom-7 right-4 ${totalQty > 0 && "animate-bounce delay-500 transition-all"
          } `}
      />
    </>
  );
};

export default Cart;