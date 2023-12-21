import { useDispatch } from "react-redux";
import { API_options } from "../utils/Constant";
import { useEffect } from "react";
import { addUpcomingMovies } from "../utils/movieSlice";

const useIpcomingMovies = () => {
  const dispatch = useDispatch();

  const popularMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1",
      API_options
    );

    const json = await data.json();
    console.log(json.results);
    dispatch(addUpcomingMovies(json.results));
  };

  useEffect(() => {
    popularMovies();
  }, []);
};

export default useIpcomingMovies;
