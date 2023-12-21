import { useDispatch } from "react-redux";
import { API_options } from "../utils/Constant";
import { addTopratedMovies } from "../utils/movieSlice";
import { useEffect } from "react";

const useTopratedMovies = () => {
  const dispatch = useDispatch();
  const getTopRatedMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1",
      API_options
    );

    const json = await data.json();

    dispatch(addTopratedMovies(json.results));
  };

  useEffect(() => {
    getTopRatedMovies();
  }, []);
};

export default useTopratedMovies;
