import styled from "styled-components";

export const LoaderContainer = styled.div`
  @keyframes spinner {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  animation: spinner 1.5s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LoaderImage = styled.img`
  width: 62px;
`;
