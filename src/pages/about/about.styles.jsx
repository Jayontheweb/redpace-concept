import styled from "styled-components";
import { motion } from 'framer-motion/dist/framer-motion';


export const AboutPageContainer = styled(motion.div)`
    padding-top: 2vh;
    display: grid;
    grid-template-columns: 45vw 1fr;
    gap: 10px;
    cursor: default;

    @media screen and (max-width: 1500px) {
        grid-template-columns: 55vw 1fr;
    }

    @media screen and (max-width: 930px) {
        grid-template-columns: 1fr;
        grid-template-rows: 1fr 350px;
    }

    @media screen and (max-width: 560px) {
        grid-template-rows: 1fr;
    };
`;

export const ImagesContainer = styled(motion.div)`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 10px;
    padding: 0 10px;
    height: 95vh;
    margin-left: 60px;

    @media screen and (max-width: 1500px) {
        margin-left: 40px;
    }

    @media screen and (max-width: 930px) {
        margin-left: 0;
        padding: 0 40px;
    }

    @media screen and (max-width: 730px) {
        padding: 0 10px;
    };

    @media screen and (max-width: 560px) {
        display: none;
    };
`;

export const ImageMan = styled(motion.div)`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding-left: 40px;
    img {
        width: 100%;
        height: auto;
    };

    @media screen and (max-width: 1100px) {
        padding-bottom: 150px;
    };

    @media screen and (max-width: 930px) {
        padding-bottom: 0;
    };

    @media screen and (max-width: 630px) {
        padding-bottom: 0;
        padding-left: 10px;
    };
`;

export const ImageWoman = styled(motion.div)`
padding-right: 40px;
    img {
        width: 100%;
        height: auto;
    };
    @media screen and (max-width: 1100px) {
        padding-top: 30px;
    };

    @media screen and (max-width: 630px) {
        padding-right: 10px;
    };
`;

export const TextSectionContainer = styled(motion.div)`
padding: 25vh 15vw 0 5vw;

    @media screen and (max-width: 1500px) {
        padding: 25vh 90px 0 0;
    }

    @media screen and (max-width: 930px) {
        padding: 60px 50px;
    };

    @media screen and (max-width: 630px) {
        padding: 50px 30px;
    };

    @media screen and (max-width: 560px) {
        padding: 20vh 15px 0 15px;
    };
`;

export const Title = styled(motion.span)`
    display: inline-block;
    font-size: 30px;
    font-weight: bold;
    padding-left: 20px;
`;

export const Description = styled(motion.div)`
margin-top: 30px;
text-align: left;
font-size: 20px;
line-height: 170%;
letter-spacing: 0.02em;

    @media screen and (max-width: 1100px) {
        /* font-size: 18px; */
        line-height: 150%;
    }
`;

export const Link = styled.a`
font-weight: bold;
color: #FF472E;
position: relative;
`;

export const Bold = styled.span`
    font-weight: bold;
`;

