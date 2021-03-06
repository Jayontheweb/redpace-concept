import styled from "styled-components";

import { Link, NavLink } from "react-router-dom";


export const HeaderContainer = styled.div`
    height: 60px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding: 0 80px;
    background-color: rgba(255, 255, 255, 0.5);
    position: fixed;
    z-index: 100;

    @media screen and (max-width: 800px) {
        padding: 0 25px;
        height: 55px;
        max-width: 100vw;
    }
`;

export const LogoContainer = styled(Link)`
height: 100%;
width: 70px;
padding: 5px;

@media screen and (max-width: 800px) {
    width: 50px;
    padding: 0;
}
`;

export const OptionsContainer = styled.div`
      width: 50%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: flex-end;

      @media screen and (max-width: 800px) {
        width: 80%;
    }
`;





export const OptionLink = styled(NavLink)`
padding: 10px 15px;
cursor: pointer;

position: relative;
text-decoration: none;
color: #000;


:hover {
    color: #000;
}

::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #FF472E;
    transform: scaleX(0);
    transition: transform 0.3s ease;
}

:hover::before {
    transform: scaleX(1);
}


@media screen and (max-width: 800px) {
    padding: 10px 10px;
}
`;


