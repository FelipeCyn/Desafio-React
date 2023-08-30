import axios from "axios";
import { useState } from "react";
import { createContainer } from "unstated-next";

export interface Movie {
  id: string;
  title: string;
  price: number;
  image: string;
  quantity: string;
  selected: boolean;
}

export const MoviesApiCalls = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);

  const getAllMovies = () => {
    setLoading(true);
    axios.get("http://localhost:3000/products").then((response) => {
      setMovies(response.data);
      setLoading(false);
    });
  };

  const selectMovie = (id: string) => {
    const selectedMovie = movies.find((movie) => movie.id === id);
    if (selectedMovie) {
      selectedMovie.selected = true;
    }
    setMovies(movies);
  };

  const getMovies = () => movies;

  return {
    movies,
    getAllMovies,
    selectMovie,
    getMovies,
    loading,
  };
};

export const MoviesContainer = createContainer(MoviesApiCalls);
