import styled from "styled-components";

export const ItemCartContainer = styled.div`
  gap: 52px;
  align-items: center;
  height: auto;
  width: 100%;
  display: flex;

  @media (max-width: 550px) {
    display: none;
  }
`;

export const ContentItemContainer = styled.div`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 52px;
`;

export const ItemImage = styled.img`
  width: 89px;
`;

export const InfoItemContainer = styled.div`
  gap: 8px;
  flex-direction: column;
  display: flex;
`;

export const ItemTitle = styled.label`
  font-size: 14px;
  font-weight: 700;
`;

export const ItemPrice = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

export const AddItemContainer = styled.div`
  gap: 11px;
  display: flex;
  align-items: center;
  width: 15%;
`;

export const PlusIcon = styled.img`
  cursor: pointer;
  width: 18px;
`;

export const QuantityInput = styled.input`
  padding: 0px 0px 0px 16px;
  width: 62px;
  height: 26px;
  border: 1px solid #d9d9d9;
  border-radius: 4px;
`;

export const LessIcon = styled.img`
  cursor: pointer;
  width: 18px;
`;

export const ValueContainer = styled.div`
  justify-content: space-between;
  display: flex;
  width: 35%;
`;

export const ValueText = styled.label`
  font-size: 16px;
  font-weight: 700;
`;

export const ThrashIcon = styled.img`
  cursor: pointer;
  width: 18px;
`;

export const TrashContainer = styled.div`
  display: flex;
`;
