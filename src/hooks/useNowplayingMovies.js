import { useDispatch } from "react-redux";
import { API_options } from "../utils/Constant";
import { addnowplayingmovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useNowplayingMovies = () => {
  const dispatch = useDispatch();
  const getNowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?page=1",
      API_options
    );
    const json = await data.json();
    console.log(json.results);
    dispatch(addnowplayingmovies(json.results));
  };

  useEffect(() => {
    getNowPlayingMovies();
  }, []);
};

export default useNowplayingMovies;
