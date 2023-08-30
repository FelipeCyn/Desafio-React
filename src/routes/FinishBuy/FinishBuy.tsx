import FinishBuyImage from "../../assets/finish-buy-image.png";
import {
  BackButton,
  FinishBuyContainer,
  StyledLink,
  SuccessImage,
  SuccessText,
} from "./styles";

export const FinishBuy = () => {
  return (
    <FinishBuyContainer>
      <SuccessText>Compra realizada com sucesso!</SuccessText>
      <SuccessImage src={FinishBuyImage} />
      <StyledLink to='/'>
        <BackButton>VOLTAR</BackButton>
      </StyledLink>
    </FinishBuyContainer>
  );
};

export default FinishBuy;
