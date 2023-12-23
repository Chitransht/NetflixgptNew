import { useEffect, useState } from "react";
import { API_options } from "../utils/Constant";

const useMovieDetails = (resId) => {
  const [movieDetail, setMovieDetails] = useState(null);

  const movieDetails = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/" + resId + "?language=en-US",
      API_options
    );
    const json = await data.json();
    setMovieDetails(json);
    console.log(json);
  };

  useEffect(() => {
    movieDetails();
  }, []);

  return movieDetail;
};

export default useMovieDetails;
