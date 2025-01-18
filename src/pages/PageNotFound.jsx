import React from "react";

const PageNotFound = () => {
  let theme = true;

  return (
    <div
      className={
        theme
          ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900 "
          : "min-h-[90vh] py-16 px-8 md:px-16 "
      }
    >
      <h1 className="text-center text-red-500 text-4xl uppercase">
        404 Page Not Found
      </h1>
    </div>
  );
};

export default PageNotFound;
