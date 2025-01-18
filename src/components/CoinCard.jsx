import React from "react";
import { Link } from "react-router-dom";

const CoinCard = ({ coin }) => {
  return (
    <div className="p-4 border border-gray-600 rounded-md flex flex-col items-center">
      <img className="h-24 my-3" src={coin.large} alt="" />
      <h1
        className={
          coin.name.length > 15
            ? "text-lg my-2 text-gray-600 font-bold"
            : "text-2xl my-2 text-gray-600 font-bold"
        }
      >
        {coin.name}
      </h1>
      <h2 className="text-xl my-2 text-gray-600 font-bold">
        Symbol : {coin.symbol}
      </h2>
      <Link
        to={`/coin/${coin.id}`}
        className="text-white text-center py-2 px-4 bg-green-500 rounded-md w-2/4 my-2 text-sm font-bold hover:bg-green-600 duration-200"
      >
        View Coin
      </Link>
    </div>
  );
};

export default CoinCard;
