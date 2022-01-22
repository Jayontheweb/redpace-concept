import styled from "styled-components";
import { motion } from 'framer-motion/dist/framer-motion';


export const NotFoundContainer = styled(motion.div)`
padding-top: 15vh;
display: flex;
flex-direction: column;
align-items: center;
flex-shrink: 1;
`;

export const Numbers = styled(motion.div)`
    display: inline-block;
    font-family: 'Fugaz One', cursive;
    font-size: 400px;
    line-height: 70%;
    color: #ff462e70;
    -webkit-text-stroke: 1px #FF472E;

    @media screen and (max-width: 1000px) {
        font-size: 300px;
    }

    @media screen and (max-width: 600px) {
        font-size: 150px;
    }
`;

export const Title = styled(motion.span)`
    display: inline-block;
    margin-top: 35px;
    font-size: 50px;
    font-weight: bold;

    @media screen and (max-width: 1000px) {
        font-size: 30px;
        
    }

    @media screen and (max-width: 600px) {
        font-size: 18px;
        padding: 5px 10px;

    }
`;

export const Subtitle = styled(motion.span)`
    display: inline-block;
    margin-top: 60px;
    font-size: 35px;

    @media screen and (max-width: 1000px) {
        font-size: 25px;
    }
    
    @media screen and (max-width: 600px) {
        font-size: 18px;
        padding: 5px 10px;
        margin-top: 30px;
    }
`;

export const NavButtons = styled(motion.div)`
    margin-top: 50px;
    width: 100%;
    padding: 0 30vw;
    display: flex;
    justify-content: space-evenly;

    @media screen and (max-width: 1000px) {
        padding: 0 15vw;
    }

    @media screen and (max-width: 600px) {
        padding: 5px 10px;
        margin-top: 25px;
        display: grid;
        grid-template-columns: 1fr;
        gap: 10px;
    }
`;