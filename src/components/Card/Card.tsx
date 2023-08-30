import { useEffect } from "react";
import BuyCartIconImage from "../../assets/buy-cart-icon.png";
import { CartContainer } from "../../containers/cart";
import { Movie } from "../../containers/movies";
import {
  AddCartText,
  BuyButton,
  CardContainer,
  MovieImage,
  MoviePriceText,
  MovieTitle,
  BuyCartIcon,
} from "./styles";

interface CardProps {
  movie: Movie;
}

export const Card: React.FC<CardProps> = ({ movie }) => {
  const { addMovieToCart, cartMovies } = CartContainer.useContainer();

  const movieOnCart = cartMovies.find((item) => item.movie.id === movie.id);

  return (
    <CardContainer>
      <MovieImage width='147px' height='auto' src={movie.image} />
      <MovieTitle>{movie.title}</MovieTitle>
      <MoviePriceText>R$ {movie.price}</MoviePriceText>
      <BuyButton
        isAdded={movieOnCart && movieOnCart?.quantity > 0}
        onClick={() => {
          addMovieToCart(movie);
        }}
      >
        <BuyCartIcon src={BuyCartIconImage} />
        <AddCartText>
          {movieOnCart?.quantity || 0} ADICIONAR AO CARRINHO
        </AddCartText>
      </BuyButton>
    </CardContainer>
  );
};

export default Card;
