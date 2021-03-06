import styled, { css } from "styled-components";

const buttonStyles = css`
    background-color: black;
    color: white;
    &:hover {
        background-color: #FF472E;
        color: black;
      }
`;

const emptyButtonStyles = css`
  background-color:  unset; 
  border: 1px solid black;
  color: #000000;
`;

const invertedButtonStyles = css`
    opacity: 0.8;
    background-color: white;
    color: black;
    &:hover {
      background-color: #FF472E;
      color: black;
      opacity: 1;
    }
`;

const googleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
      background-color: #1761d6;
      border: none;
    }
`;

const getButtonStyles = props => {
  if (props.isGoogleSignIn) {
    return googleSignInStyles
  } else if (props.empty) {
    return emptyButtonStyles
  }

  return props.inverted ? invertedButtonStyles : buttonStyles;
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    transition:all;
    transition-duration: 0.3s;
    display: flex;
    justify-content: center;
    border-radius: 2px;

    ${getButtonStyles}
`;

