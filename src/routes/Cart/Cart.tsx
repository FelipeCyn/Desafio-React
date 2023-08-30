import ItemCart from "../../components/ItemCart/ItemCart";
import ItemCartMobile from "../../components/ItemCartMobile/ItemCartMobile";
import {
  CartContainer as CartFather,
  CostText,
  Divisor,
  FinishButton,
  FinishContainer,
  Headers,
  HeadersContainer,
  ItemsContainer,
  ProductContainer,
  QtdContainer,
  StyledLink,
  SubtotalContainer,
  TotalContainer,
  TotalText,
} from "./styles";
import { CartContainer } from "../../containers/cart";
import EmptyState from "../../components/EmptyState/EmptyState";

export const Cart = () => {
  const {
    cartMovies,
    removeFromCart,
    changeQuantity,
    finish,
    onChangeQuantity,
  } = CartContainer.useContainer();

  const getTotal = () => {
    let sum = 0;
    cartMovies.forEach((cartMovie) => {
      sum += cartMovie.movie.price * cartMovie.quantity;
    });
    return sum.toFixed(2);
  };

  return (
    <>
      {cartMovies.length === 0 ? (
        <EmptyState />
      ) : (
        <CartFather>
          <HeadersContainer>
            <ProductContainer>
              <Headers>PRODUTO</Headers>
            </ProductContainer>
            <QtdContainer>
              <Headers>QTD</Headers>
            </QtdContainer>
            <SubtotalContainer>
              <Headers>SUBTOTAL</Headers>
            </SubtotalContainer>
          </HeadersContainer>
          <ItemsContainer>
            {cartMovies.map((item, index) => (
              <>
                <ItemCart
                  onChangeQuantity={(value) => onChangeQuantity(index, value)}
                  {...item}
                  deleteMovie={() => removeFromCart(index)}
                  increase={() => changeQuantity(index, true)}
                  decrease={() => changeQuantity(index, false)}
                />
                <ItemCartMobile
                  onChangeQuantity={(value) => onChangeQuantity(index, value)}
                  {...item}
                  deleteMovie={() => removeFromCart(index)}
                  increase={() => changeQuantity(index, true)}
                  decrease={() => changeQuantity(index, false)}
                />
              </>
            ))}
          </ItemsContainer>
          <div>
            <Divisor />
            <FinishContainer>
              <StyledLink
                onClick={finish}
                style={{ textDecoration: "none" }}
                to='finishBuy'
              >
                <FinishButton>FINALIZAR PEDIDO</FinishButton>
              </StyledLink>
              <TotalContainer>
                <TotalText>TOTAL</TotalText>
                <CostText>R$ {getTotal()}</CostText>
              </TotalContainer>
            </FinishContainer>
          </div>
        </CartFather>
      )}
    </>
  );
};

export default Cart;
