import PlusIconImage from "../../assets/plus-icon.png";
import LessIconImage from "../../assets/less-icon.png";
import ThrashIconImage from "../../assets/thrash-icon.png";
import {
  CartContentContainer,
  ItemCartMobileContainer,
  ItemContentContainer,
  ItemImage,
  ItemPrice,
  ItemTitle,
  LessIcon,
  PlusIcon,
  PriceContainer,
  QuantityContainer,
  QuantityInput,
  QuantityInputContainer,
  ThrashIcon,
  TotalContainer,
  TotalPrice,
  TotalQuantity,
} from "./styles";
import { Movie } from "../../containers/movies";

interface ItemCartMobileProps {
  movie: Movie;
  quantity: number;
  deleteMovie: () => void;
  increase: () => void;
  decrease: () => void;
  onChangeQuantity: (value: number) => void;
}

export const ItemCartMobile: React.FC<ItemCartMobileProps> = ({
  movie,
  quantity,
  deleteMovie,
  increase,
  decrease,
  onChangeQuantity,
}) => {
  return (
    <ItemCartMobileContainer>
      <ItemImage src={movie.image} />
      <CartContentContainer>
        <ItemContentContainer>
          <ItemTitle>{movie.title}</ItemTitle>
          <PriceContainer>
            <ItemPrice>R$ {movie.price}</ItemPrice>
            <ThrashIcon onClick={deleteMovie} src={ThrashIconImage} />
          </PriceContainer>
        </ItemContentContainer>
        <QuantityContainer>
          <QuantityInputContainer>
            <PlusIcon onClick={decrease} src={LessIconImage} />
            <QuantityInput
              type='number'
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                onChangeQuantity(+event.target.value)
              }
              value={quantity}
            />
            <LessIcon onClick={increase} src={PlusIconImage} />
          </QuantityInputContainer>
          <TotalContainer>
            <TotalPrice>SUBTOTAL</TotalPrice>
            <TotalQuantity>
              R$ {(movie.price * quantity).toFixed(2)}
            </TotalQuantity>
          </TotalContainer>
        </QuantityContainer>
      </CartContentContainer>
    </ItemCartMobileContainer>
  );
};

export default ItemCartMobile;
