import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[15%] px-16 absolute z-10 text-white bg-gradient-to-r from-black">
      <h1 className="text-6xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div className="">
        <button className="p-4 bg-white text-black px-16 text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className=" mx-2 p-4 bg-white text-black px-16 text-xl rounded-lg hover:bg-opacity-80 ">
          More Info
        </button>
      </div>
    </div>
  );
};
export default Videotitle;
