import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { logOutUser } from "../features/auth/authSlice";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const { theme } = useSelector((state) => state.theme);

  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(logOutUser());
  };

  return (
    <nav
      className={
        theme
          ? "w-full bg-gray-900 shadow-2xl border-b border-gray-800 py-4 px-8 md:px-16 flex items-center justify-between"
          : "w-full bg-white shadow-2xl py-4 px-8 md:px-16 flex items-center justify-between"
      }
    >
      <Link to={"/"} className="text-green-500 text-xl uppercase font-black">
        <span className="text-blue-500">Crypto</span>-Bazar
      </Link>
      <span>
        {!user ? (
          <>
            <Link
              className="py-2 px-4 bg-green-600 text-sm font-bold text-white rounded-md mx-2"
              to="/register"
            >
              Register
            </Link>
            <Link
              className="py-2 px-4 bg-green-600 text-sm font-bold text-white rounded-md mx-2"
              to="/login"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <button
              onClick={handleLogOut}
              className="py-2 px-4 bg-red-600 text-sm font-bold text-white rounded-md mx-2"
            >
              Logout
            </button>
            <Link
              className="py-2 px-4 bg-blue-600 text-sm font-bold text-white rounded-md mx-2"
              to="/cart"
            >
              Cart ({cartItems.length})
            </Link>
          </>
        )}
      </span>
    </nav>
  );
};

export default Navbar;
