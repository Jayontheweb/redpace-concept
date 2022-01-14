import styled from "styled-components";
import { Link } from "react-router-dom";


export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    padding: 0 80px;
    background-color: white;
    opacity: 0.92;
    position: fixed;
    z-index: 100;

    @media screen and (max-width: 800px) {
        padding: 0 25px;
        height: 60px;
        margin-bottom: 20px;
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

export const OptionLink = styled(Link)`
padding: 10px 15px;
cursor: pointer;

@media screen and (max-width: 800px) {
    padding: 10px 10px;
}
`;


