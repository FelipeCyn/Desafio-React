import styled from "styled-components";

export const CardContainer = styled.div`
  width: 289px;
  height: auto;
  background-color: white;
  padding: 11px 10px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  border-radius: 4px;

  @media (max-width: 375px) {
    width: 323px;
  }
`;

export const MovieImage = styled.img`
  width: 147px;
  height: auto;
`;

export const MovieTitle = styled.label`
  font-weight: 700;
  font-size: 12px;
`;

export const MoviePriceText = styled.label`
  font-weight: 700;
  font-size: 16px;
`;

interface BuyButtonProps {
  isAdded?: boolean;
}

export const BuyButton = styled.button<BuyButtonProps>`
  width: 100%;
  height: 40px;
  background-color: ${(props) => (props.isAdded ? "#039B00" : "#009edd")};
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const BuyCartIcon = styled.img`
  margin: 0px 3px 0px 0px;
  width: 12px;
  cursor: pointer;
  height: auto;
`;

export const AddCartText = styled.label`
  font-size: 12px;
  color: white;
  font-weight: 700;
  cursor: pointer;
`;
