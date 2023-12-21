import { useDispatch } from "react-redux";
import { API_options } from "../utils/Constant";
import { addPopularVideo } from "../utils/movieSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/popular?language=en-US&page=1",
      API_options
    );

    const json = await data.json();

    dispatch(addPopularVideo(json.results));
  };

  useEffect(() => {
    popularMovies();
  }, []);
};

export default usePopularMovies;
