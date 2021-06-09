import React from "react";
import img1 from "../images/Apple.jpg";
import img2 from "../images/Banana.jpg";

const Content = () => {
  return (
    <div className=" flex flex-col justify-center items-center bg-white h-screen font-mono py-40">
      <img src={img1} className="h-full rounded mb-20 shadow" alt="" />
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2 mb-2">Chicken</h2>
      </div>
    </div>
  );
};

export default Content;
