import React from "react";

const Videotitle = ({ title, overview }) => {
  return (
    <div className=" w-screen aspect-video pt-[11%] px-6 md:px-16 absolute z-10 text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl md:text-5xl font-bold">{title}</h1>
      <p className="hidden md:inline-block  py-6 text-lg w-1/4">{overview}</p>
      <div className="my-4 md:my-0">
        <button className="p-4 bg-white text-black py-1 md:py-4 px-3 md:px-16  text-xl rounded-lg hover:bg-opacity-80">
          Play
        </button>
        <button className=" hidden md:inline-block mx-2 p-4 bg-white text-black px-16 text-xl rounded-lg hover:bg-opacity-80 ">
          More Info
        </button>
      </div>
    </div>
  );
};
export default Videotitle;
