import {
  ContentContainer,
  HeaderContainer,
  Logo,
  MyCartText,
  NumberOfItensText,
  CartImage,
  CartContainer as Container,
} from "./styles";
import LogoSite from "../../assets/logo.png";
import CartIcon from "../../assets/cart-icon.png";
import { CartContainer } from "../../containers/cart";
import { StyledLink } from "../EmptyState/styles";

export const Header = () => {
  const { cartMovies } = CartContainer.useContainer();
  return (
    <HeaderContainer>
      <StyledLink to='/'>
        <Logo src={LogoSite} />
      </StyledLink>
      <ContentContainer>
        <Container>
          <StyledLink to='/cart'>
            <MyCartText>Meu Carrinho</MyCartText>
          </StyledLink>
          <NumberOfItensText>{cartMovies.length} itens</NumberOfItensText>
        </Container>
        <StyledLink to='/cart'>
          <CartImage src={CartIcon} />
        </StyledLink>
      </ContentContainer>
    </HeaderContainer>
  );
};
export default Header;
