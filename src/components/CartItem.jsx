import React from "react";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../features/cart/cartSlice";

const CartItem = ({ cart }) => {
  const dispatch = useDispatch();

  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart(id));
  };

  return (
    <div className="relative flex items-center border border-gray-600 my-2 rounded-md p-4">
      <img src={cart?.image?.large} className="h-28" alt="" />
      <div className="mx-6">
        <h1 className="text-2xl font-semibold text-gray-600">{cart.name}</h1>
        <h2 className="text-xl font-semibold text-gray-600">
          Price : {cart?.market_data?.current_price?.inr}{" "}
        </h2>
        <p className="text-lg font-semibold text-gray-600">Qty : 1</p>
      </div>
      <button
        onClick={() => handleRemoveFromCart(cart.id)}
        className="bg-red-600 py-1 px-4 text-sm text-white font-bold rounded-md absolute bottom-5 right-5"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;
