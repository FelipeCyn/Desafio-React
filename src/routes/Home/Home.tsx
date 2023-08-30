import { useEffect } from "react";
import Card from "../../components/Card/Card";
import Loader from "../../components/Loader/Loader";
import { MoviesContainer } from "../../containers/movies";
import { MoviesContainerGrid, LoadingContainer, HomeContainer } from "./styles";

export const Home = () => {
  const { getAllMovies, movies, loading } = MoviesContainer.useContainer();
  useEffect(() => {
    getAllMovies();
  }, []);
  return (
    <HomeContainer>
      <MoviesContainerGrid>
        {movies.map((movie) => {
          return <Card movie={movie} />;
        })}
      </MoviesContainerGrid>
      {loading && (
        <LoadingContainer>
          <Loader />
        </LoadingContainer>
      )}
    </HomeContainer>
  );
};

export default Home;
