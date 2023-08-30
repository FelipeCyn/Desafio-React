import PlusIconImage from "../../assets/plus-icon.png";
import LessIconImage from "../../assets/less-icon.png";
import ThrashIconImage from "../../assets/thrash-icon.png";
import {
  AddItemContainer,
  ContentItemContainer,
  InfoItemContainer,
  ItemCartContainer,
  ItemImage,
  ItemPrice,
  ItemTitle,
  QuantityInput,
  PlusIcon,
  LessIcon,
  ValueContainer,
  ValueText,
  ThrashIcon,
} from "./styles";
import { Movie } from "../../containers/movies";

interface ItemCartProps {
  movie: Movie;
  quantity: number;
  deleteMovie: () => void;
  increase: () => void;
  decrease: () => void;
  onChangeQuantity: (value: number) => void;
}

export const ItemCart: React.FC<ItemCartProps> = ({
  movie,
  quantity,
  deleteMovie,
  increase,
  decrease,
  onChangeQuantity,
}) => {
  return (
    <ItemCartContainer>
      <ContentItemContainer>
        <ItemImage src={movie.image} />
        <InfoItemContainer>
          <ItemTitle>{movie.title}</ItemTitle>
          <ItemPrice>R$ {movie.price}</ItemPrice>
        </InfoItemContainer>
      </ContentItemContainer>
      <AddItemContainer>
        <PlusIcon onClick={increase} src={PlusIconImage} />
        <QuantityInput
          type='number'
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            onChangeQuantity(+event.target.value)
          }
          value={quantity}
        />
        <LessIcon onClick={decrease} src={LessIconImage} />
      </AddItemContainer>
      <ValueContainer>
        <ValueText>R$ {(movie.price * quantity).toFixed(2)}</ValueText>
        <ThrashIcon onClick={deleteMovie} src={ThrashIconImage} />
      </ValueContainer>
    </ItemCartContainer>
  );
};

export default ItemCart;
