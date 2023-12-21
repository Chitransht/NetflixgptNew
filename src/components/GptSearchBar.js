import React from "react";

const GptSearchBar = () => {
  return (
    <div className="pt-[8%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          type="text"
          placeholder="What would you like Today.."
          className="  p-4 m-4 col-span-9 "
        />
        <button className=" col-span-3 m-4 rounded-lg bg-red-800 text-white ">
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
