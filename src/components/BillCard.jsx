import React from "react";

const BillCard = ({ cartItems }) => {
  const total = cartItems.reduce(
    (p, c) => p + c.market_data?.current_price?.inr,
    0
  );

  return (
    <div className="flex flex-col justify-between h-64 border border-gray-400 rounded-md p-5 col-span-1 ">
      <h1 className="text-gray-600 font-semibold text-lg my-2 text-center">
        Your Bill
      </h1>
      <h2 className="text-gray-600 font-semibold text-xl my-2">
        Total Qty : {cartItems.length}
      </h2>
      <h2 className="text-gray-600 font-bold text-2xl my-2">
        Total Amount : {total}
      </h2>
      <button className="my-2 bg-blue-700 py-2 px-4 w-full rounded-md text-sm font-bold text-white">
        Pay Now
      </button>
    </div>
  );
};

export default BillCard;
