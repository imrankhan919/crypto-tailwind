import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const SearchForm = () => {
  const [text, setText] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`/coin/search/${text}`);
    setText("");
  };

  return (
    <>
      <h1 className="text-4xl text-center text-gray-500 my-1 font-black">
        Search Any Crypto Coin
      </h1>
      <p className="mt-2 mb-4 text-gray-600 text-sm">
        Get the latest updated related to any crypto currency
      </p>
      <p></p>
      <form
        onSubmit={handleSubmit}
        className="w-full flex items-center justify-center flex-col md:flex-row"
      >
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          className="border-2 w-full md:w-2/4 p-3 rounded-md my-2 focus:outline-green-500 placeholder:text-sm placeholder:font-bold mr-0 md:mr-4"
          type="text"
          placeholder="Search Coin"
          required
        />
        <button className="w-full md:w-1/4 p-3 rounded-md bg-green-600 my-2 font-bold text-white hover:bg-green-800 duration-200">
          Search
        </button>
      </form>
    </>
  );
};

export default SearchForm;
