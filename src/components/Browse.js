import { useSelector } from "react-redux";
import useIpcomingMovies from "../hooks/useIpcomingMovies";
import useNowplayingMovies from "../hooks/useNowplayingMovies";
import usePopularMovies from "../hooks/usePopularMovies";
import useTopratedMovies from "../hooks/useTopRatedMovies";
import GPTSearch from "./GPTSearch";
import Header from "./Header";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";

const Browse = () => {
  const GptSearch = useSelector((state) => state.gpt.showGptSearch);
  useNowplayingMovies();
  useTopratedMovies();
  useIpcomingMovies();
  usePopularMovies();
  return (
    <div>
      <Header />

      {GptSearch ? (
        <GPTSearch />
      ) : (
        <>
          <MainContainer />
          <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
