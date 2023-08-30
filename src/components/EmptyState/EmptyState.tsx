import EmptyImageCart from "../../assets/empty-cart-image.png";

import {
  EmptyButton,
  EmptyImage,
  EmptyStateContainer,
  EmptyTitle,
  StyledLink,
} from "./styles";

export const EmptyState = () => {
  return (
    <EmptyStateContainer>
      <EmptyTitle>Parece que não há nada por aqui :(</EmptyTitle>
      <EmptyImage src={EmptyImageCart} />
      <StyledLink to='/'>
        <EmptyButton>VOLTAR</EmptyButton>
      </StyledLink>
    </EmptyStateContainer>
  );
};

export default EmptyState;
