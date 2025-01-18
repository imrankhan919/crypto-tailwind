import React from "react";

const Loading = () => {
  let theme = true;

  return (
    <div
      className={
        theme
          ? "min-h-[90vh] py-16 px-8 md:px-16 bg-gray-900 "
          : "min-h-[90vh] py-16 px-8 md:px-16 "
      }
    >
      <h1 className="my-10 text-center text-gray-600 text-4xl font-bold">
        Loading...
      </h1>
    </div>
  );
};

export default Loading;
