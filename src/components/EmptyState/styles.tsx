import styled from "styled-components";
import { Link } from "react-router-dom";

export const EmptyStateContainer = styled.div`
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

  @media (max-width: 1000px) {
    width: 700px;
  }

  @media (max-width: 600px) {
    width: 480px;
  }

  @media (max-width: 375px) {
    width: 323px;
  }
`;

export const EmptyTitle = styled.label`
  font-size: 20px;
  font-weight: 700;

  @media (max-width: 375px) {
    width: 172px;
    text-align: center;
  }
`;

export const EmptyImage = styled.img`
  width: 447px;
  height: auto;
`;

export const EmptyButton = styled.button`
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
  cursor: pointer;

  &:focus,
  &:hover,
  &:visited,
  &:link,
  &:active {
    text-decoration: none;
  }
`;
