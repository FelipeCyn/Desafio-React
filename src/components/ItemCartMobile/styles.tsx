import styled from "styled-components";

export const ItemCartMobileContainer = styled.div`
  display: none;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }

  @media (max-width: 375px) {
    display: flex;
    flex-direction: row;
    gap: 16px;
  }
`;

export const ItemImage = styled.img`
  width: 64px;
`;

export const CartContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  width: 100%;
`;

export const ItemContentContainer = styled.div`
  display: flex;
  width: 100%;
  gap: 16px;
`;

export const ItemTitle = styled.label`
  font-size: 14px;
  font-weight: 700;
  width: 50%;
`;

export const PriceContainer = styled.div`
  width: 50%;
  display: flex;
  justify-content: flex-end;
  gap: 16px;
`;

export const ItemPrice = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

export const ThrashIcon = styled.img`
  width: 18px;
  height: 18px;
`;

export const QuantityContainer = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const QuantityInputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 11px;
`;

export const PlusIcon = styled.img`
  cursor: pointer;
  width: 18px;
`;

export const QuantityInput = styled.input`
  padding: 0px 0px 0px 16px;
  width: 36px;
  height: 26px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

export const LessIcon = styled.img`
  cursor: pointer;
  width: 18px;
`;

export const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  float: right;
  text-align: end;
`;

export const TotalPrice = styled.label`
  font-size: 12px;
  font-weight: 700;
  color: #999999;
`;

export const TotalQuantity = styled.label`
  font-size: 16px;
  font-weight: 700;
`;
