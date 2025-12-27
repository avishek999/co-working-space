import React from "react";

const Button = ({ title, bgColor }: { title: string; bgColor: string }) => {
  return (
    <button
      className={`rounded-full lg:px-14 px-8 md:px-10 py-3  text-lg  cursor-not-allowed bg-${bgColor} `}
    >
      {title}
    </button>
  );
};

export default Button;
