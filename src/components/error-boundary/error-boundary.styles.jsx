import styled from 'styled-components';

export const ErrorImageOverlay = styled.div`
  height: 60vh;
  padding-top: 15vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 800px) {
    height: 70vh;
  }
`;

export const ErrorImageContainer = styled.div`
  display: inline-block;
  background-image: ${({ imageUrl }) => `url(${imageUrl})`};
  background-size: cover;
  background-position: center;
  width: 40vh;
  height: 40vh;
  @media screen and (max-height: 500px) {
    display: none;
  }
`;

export const ErrorImageText = styled.h2`
  font-size: 28px;
  color: #FF472E;
  @media screen and (max-width: 460px) {
    padding: 0 15px;
  }
`;
