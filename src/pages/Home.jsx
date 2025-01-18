import React, { useEffect } from "react";
import SearchForm from "../components/SearchForm";
import TrendingCoins from "../components/TrendingCoins";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "../components/Loading";

const Home = () => {
  const { theme } = useSelector((state) => state.theme);

  const { isError, message, user } = useSelector((state) => state.auth);

  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }

    if (isError && message) {
      toast.error(message, { position: "top-center", theme: "dark" });
    }
  }, [isError, message, user]);

  return (
    <div
      className={
        theme
          ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900 flex flex-col items-center justify-center"
          : "min-h-[90vh] py-16 px-8 md:px-16 flex flex-col items-center justify-center"
      }
    >
      <SearchForm />
      <TrendingCoins />
    </div>
  );
};

export default Home;
