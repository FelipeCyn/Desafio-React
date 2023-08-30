import { useState } from "react";
import { createContainer } from "unstated-next";
import { Movie, MoviesContainer } from "./movies";

interface CartMovie {
  movie: Movie;
  quantity: number;
}

export const CartApiCalls = () => {
  const [cartMovies, setCartMovies] = useState<CartMovie[]>([]);
  const [emptyState, setEmptyState] = useState(false);
  const { selectMovie, getMovies } = MoviesContainer.useContainer();

  const addMovieToCart = (movie: Movie) => {
    const newMovie = { movie, quantity: 1 };
    const findMovie = cartMovies.find((item) => item.movie.id === movie.id);
    if (findMovie) {
      findMovie.quantity += 1;
      setCartMovies([...cartMovies]);
    } else {
      setCartMovies([...cartMovies, newMovie]);
    }
    selectMovie(movie.id);
  };

  const removeFromCart = (index: number) => {
    const newCartMovies = [...cartMovies];
    newCartMovies.splice(index, 1);
    setCartMovies(newCartMovies);
  };

  const changeQuantity = (index: number, increase: boolean) => {
    const newCartMovies = [...cartMovies];
    if (increase) {
      newCartMovies[index].quantity += 1;
    } else {
      if (newCartMovies[index].quantity === 1) {
        newCartMovies.splice(index, 1);
      } else {
        newCartMovies[index].quantity -= 1;
      }
    }
    setCartMovies(newCartMovies);
  };

  const finish = () => setCartMovies([]);

  const onChangeQuantity = (index: number, value: number) => {
    const newCartMovies = [...cartMovies];
    newCartMovies[index].quantity = value;
    setCartMovies(newCartMovies);
  };

  return {
    addMovieToCart,
    setEmptyState,
    cartMovies,
    removeFromCart,
    changeQuantity,
    finish,
    onChangeQuantity,
  };
};

export const CartContainer = createContainer(CartApiCalls);
