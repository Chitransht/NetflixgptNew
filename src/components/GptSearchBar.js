import React, { useRef } from "react";
import openai from "../utils/OpenAI";
import { API_options } from "../utils/Constant";
import { addGptResult } from "../utils/GptSlice";
import { useDispatch } from "react-redux";

const GptSearchBar = () => {
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movie) => {
    const data = await fetch(
      "https://api.themoviedb.org/3/search/movie?query=" +
        movie +
        "&include_adult=false&language=en-US&page=1",
      API_options
    );
    const json = await data.json();
    return json.results;
  };

  const handelGptSearchClick = async () => {
    const getQuerry =
      "Act as a Movie Recommendation system and suggest some movies for the query : " +
      searchText.current.value +
      ". Only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: Gadar, Sholay, Don, Golmaal, Koi Mill Gya";

    const Gtp_result = await openai.chat.completions.create({
      messages: [{ role: "user", content: getQuerry }],
      model: "gpt-3.5-turbo",
    });

    console.log(Gtp_result.choices?.[0]?.message?.content);
    const GptMovieList = Gtp_result.choices?.[0]?.message?.content.split(",");
    console.log(GptMovieList);

    const promisearray = GptMovieList.map((movie) => searchMovieTMDB(movie));
    const tmbdResults = await Promise.all(promisearray);
    console.log(tmbdResults);

    dispatch(
      addGptResult({ movieName: GptMovieList, MovieResult: tmbdResults })
    );
  };

  return (
    <div className=" pt-[35%] md:pt-[8%] flex justify-center">
      :
      <form
        className=" w-full md:w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="text"
          placeholder="What would you like Today.."
          className="  p-4 m-4 col-span-9 "
          required
        />
        <button
          className=" col-span-3 m-4 rounded-lg bg-red-800 text-white"
          onClick={handelGptSearchClick}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
