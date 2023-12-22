import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestion from "./GptMovieSuggestion";
import { BG_LOGO } from "../utils/Constant";

const GPTSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_LOGO}
          alt="bg-logo"
          className="h-screen object-cover md:h-[100%]"
        />
      </div>
      <div className="">
        <GptSearchBar />
        <GptMovieSuggestion />
      </div>
    </>
  );
};

export default GPTSearch;
