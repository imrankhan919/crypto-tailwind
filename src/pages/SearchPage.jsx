import React, { useEffect } from "react";
import CoinCard from "../components/CoinCard";
import { useDispatch, useSelector } from "react-redux";
import { searchCoins } from "../features/coins/coinSlice";
import { useParams } from "react-router-dom";

const SearchPage = () => {
  let theme = true;

  const dispatch = useDispatch();
  const { searchquery } = useParams();

  const { coins, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.coins
  );

  useEffect(() => {
    dispatch(searchCoins(searchquery));
  }, []);

  if (isLoading) {
    return (
      <div
        className={
          theme
            ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900 "
            : "min-h-[90vh] py-16 px-8 md:px-16 "
        }
      >
        <h1 className="my-10 text-center text-gray-600 text-4xl font-bold">
          Searching...
        </h1>
        ;
      </div>
    );
  }

  if (isError) {
    return (
      <div
        className={
          theme
            ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900 "
            : "min-h-[90vh] py-16 px-8 md:px-16 "
        }
      >
        <h1 className="my-10 text-center text-red-600 text-4xl font-bold">
          Error Occured!!
        </h1>
        ;
      </div>
    );
  }

  if (coins.length === 0) {
    return (
      <div
        className={
          theme
            ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900 "
            : "min-h-[90vh] py-16 px-8 md:px-16 "
        }
      >
        <h1 className="my-10 text-center text-gray-600 text-4xl font-bold">
          No Coins Found
        </h1>
        ;
      </div>
    );
  }

  return (
    <div
      className={
        theme
          ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900 "
          : "min-h-[90vh] py-16 px-8 md:px-16 "
      }
    >
      <h1 className="text-4xl text-center text-gray-500 my-4 font-black">
        Your Search
      </h1>

      <div className="my-5 grid grid-cols-1 md:grid-cols-3 gap-4">
        {coins.map((coin) => (
          <CoinCard key={coin.id} coin={coin} />
        ))}
      </div>
    </div>
  );
};

export default SearchPage;
