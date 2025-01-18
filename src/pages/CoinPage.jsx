import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getCoin } from "../features/coins/coinSlice";
import { addToCart } from "../features/cart/cartSlice";
import Loading from "../components/Loading";

const CoinPage = () => {
  let theme = true;
  const { coin, isLoading, isError } = useSelector((state) => state.coins);

  const { id } = useParams();
  const dispatch = useDispatch();

  const handleAddToCart = (coin) => {
    dispatch(addToCart(coin));
  };

  useEffect(() => {
    dispatch(getCoin(id));
  }, []);

  if (isLoading) {
    return <Loading />;
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
      </div>
    );
  }

  return (
    <div
      className={
        theme
          ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900"
          : "min-h-[90vh] py-16 px-8 md:px-16"
      }
    >
      <div className="border border-gray-600 rounded-md p-2 md:p-8">
        <div className="flex md:flex-row flex-col items-center ">
          <img className="h-52 my-3 md:ml-10" src={coin?.image?.large} alt="" />
          <div className="text-center md:text-left mx-10">
            <h1
              className={
                theme
                  ? "text-gray-200 text-3xl font-bold my-2"
                  : "text-gray-900 text-3xl font-bold my-2"
              }
            >
              {coin?.name}
            </h1>
            <h1 className="text-gray-600 text-2xl font-bold my-2 uppercase">
              {coin?.symbol}
            </h1>
            <h1 className="text-green-600 text-3xl font-bold my-2">
              Price : {coin?.market_data?.current_price?.inr} INR/-
            </h1>
            <button
              onClick={() => handleAddToCart(coin)}
              className="bg-green-600 my-2 px-5 py-2 rounded-md text-sm font-bold text-white w-full md:w-1/2"
            >
              Add to cart
            </button>
          </div>
        </div>
        <div
          className={
            theme
              ? "text-gray-400 mt-16 text-sm"
              : "text-gray-600 mt-16 text-sm"
          }
          dangerouslySetInnerHTML={{ __html: coin?.description?.en }}
        ></div>
        <div className="w-full py-2 px-4 bg-blue-500 text-white rounded-md my-8 text-center font-bold">
          <a href={coin?.links?.homepage} target="_blank">
            Official Website
          </a>
        </div>
      </div>
    </div>
  );
};

export default CoinPage;
