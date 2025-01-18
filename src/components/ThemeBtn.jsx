import React from "react";
import { FaMoon, FaSun } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { changeTheme } from "../features/theme/themeSlice";

const ThemeBtn = () => {
  const { theme } = useSelector((state) => state.theme);

  const dispatch = useDispatch();

  const handleTheme = () => {
    dispatch(changeTheme());
  };

  return (
    <button
      onClick={handleTheme}
      className={
        theme
          ? "fixed bottom-5 left-5 p-4 bg-yellow-500 text-white rounded-full text-xl"
          : "fixed bottom-5 left-5 p-4 bg-black text-white rounded-full text-xl"
      }
    >
      {theme ? <FaSun /> : <FaMoon />}
    </button>
  );
};

export default ThemeBtn;
