import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderContainer = styled.div`
  display: flex;
  max-width: 960px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  margin: 0px 0px 50px 0px;

  @media (max-width: 980px) {
    width: 300px
    padding: 0px 20px;
  }

  @media (max-width: 375px) {
    width: 335px;
    padding: 0px 20px;
    margin: 0px 0px 18px 0px;
  }
`;

export const Logo = styled.img`
  width: 100px;
  height: auto;
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
  align-items: center;
`;

export const CartContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MyCartText = styled.label`
  font-size: 14px;
  color: white;
  font-weight: bold;
  cursor: pointer;
`;

export const NumberOfItensText = styled.label`
  text-align: right;
  font-size: 14px;
  color: #999999;
  font-weight: 700;
`;

export const CartImage = styled.img`
  width: 30px;
  height: auto;
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
