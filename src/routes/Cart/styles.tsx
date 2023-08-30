import styled from "styled-components";
import { Link } from "react-router-dom";

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 24px;
  border-radius: 4px;
  background-color: white;
  gap: 21px;
  max-width: 960px;
  width: 960px;
  height: 100%;

  @media (max-width: 1000px) {
    width: 700px;
  }

  @media (max-width: 550px) {
    width: 400px;
    justify-content: space-between;
  }

  @media (max-width: 375px) {
    width: 303px;
    padding: 20px 20px;
    margin: 0px 0px 18px 0px;
    height: 84vh;
  }
`;

export const HeadersContainer = styled.div`
  display: flex;
  @media (max-width: 550px) {
    display: none;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const ProductContainer = styled.div`
  width: 53%;
`;

export const QtdContainer = styled.div`
  width: 19%;
`;

export const SubtotalContainer = styled.div`
  width: 28%;
`;

export const Headers = styled.label`
  color: #999999;
  font-size: 14px;
  font-weight: 700;
`;

export const Divisor = styled.div`
  height: 1px;
  background-color: #999999;
  margin-bottom: 21px;
`;

export const FinishContainer = styled.div`
  display: flex;
  justify-content: space-between;

  @media (max-width: 550px) {
    display: flex;
    flex-direction: column-reverse;
    gap: 16px;
  }
`;

export const FinishButton = styled.button`
  width: 235px;
  height: 40px;
  background-color: #009edd;
  color: white;
  font-weight: 700;
  border: none;
  border-radius: 4px;
  justify-content: center;
  display: flex;
  align-items: center;
  cursor: pointer;

  @media (max-width: 550px) {
    width: 100%;
  }
`;

export const TotalContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 550px) {
    justify-content: end;
  }
`;

export const TotalText = styled.label`
  font-weight: 700;
  font-size: 14px;
  color: #999999;
`;

export const CostText = styled.label`
  font-size: 24px;
  color: #2f2e41;
  font-weight: 700;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  cursor: pointer;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
