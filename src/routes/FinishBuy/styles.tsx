import styled from "styled-components";
import { Link } from "react-router-dom";

export const FinishBuyContainer = styled.div`
  max-width: 975px;
  width: 975px;
  background-color: white;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 64px 0px;

  @media (max-width: 975px) {
    width: 700px;
  }

  @media (max-width: 600px) {
    width: 480px;
  }

  @media (max-width: 375px) {
    width: 323px;
  }
`;

export const SuccessText = styled.label`
  font-size: 20px;
  font-weight: 700;
`;

export const SuccessImage = styled.img`
  width: 295px;
`;

export const BackButton = styled.button`
  width: 180px;
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
`;

export const StyledLink = styled(Link)`
  text-decoration: none;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
