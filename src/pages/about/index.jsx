
import { Helmet } from "react-helmet";

import Footer from "../../components/footer";

import { AboutPageContainer, ImagesContainer, TextSectionContainer, Title, Description, ImageMan, ImageWoman, Link, Bold } from "./about.styles";


export default function AboutPage() {
    return (
        <>
            <AboutPageContainer
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, x: -150 }}
            >
                <Helmet>
                    <title>About | Red Pace.</title>
                </Helmet>
                <ImagesContainer>
                    <ImageMan
                        initial={{ opacity: 0, y: -550 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                    >
                        <img src="https://i.ibb.co/H4zhWGW/Guy.png" alt="A man in a red velvet formal suit without a shirt under" />
                    </ImageMan>
                    <ImageWoman
                        initial={{ opacity: 0, y: 550 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, type: "spring" }}
                    >
                        <img src="https://i.ibb.co/f9dP5LZ/Girl.png" alt="A woman in a red t-shirt, black jacket and vividly coloured sunglasses" />
                    </ImageWoman>
                </ImagesContainer>

                <TextSectionContainer
                    initial={{ opacity: 0, x: 250 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <Title
                        initial={{ opacity: 0, x: 250 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{
                            duration: 0.2,
                            type: 'spring',
                            damping: 15,
                            stiffness: 250
                        }}
                    >
                        HELLO!
                    </Title>
                    <Description>
                        My name is <Bold>Jenya (Jay) Chebanov</Bold> and you are currently browsing my <Link href='https://chebanov.vercel.app/' target='_blank' rel='noreferrer'>portfolio</Link> project website. Some of the thechnologies used in creating this website are as follows: <Bold>react.js</Bold> as the main javascript framework; <Bold>react redux</Bold> and <Bold>react router v6</Bold> for state management and routing; <Bold>firebase</Bold> and <Bold>google auth</Bold> as the database and the means to manage authantication; <Bold>SASS</Bold> and <Bold>styled components</Bold> were used to address styling and <Bold>framer motion</Bold> to top it off with minimalistic animations. If you would like to <Bold>get in touch</Bold> with me you could visit my <Link href='https://chebanov.vercel.app/' target='_blank' rel='noreferrer'>portfolio</Link> page or hit me up on my <Link href="mailto:chebanov.dev@gmail.com" target='_blank' rel='noreferrer' >email</Link>, <Link href='https://t.me/heyyevhen' target='_blank' rel='noreferrer'>telegram</Link> or <Link href='https://www.linkedin.com/in/jenya-chebanov/' target='_blank' rel='noreferrer'>linkedIn</Link>. Thank you for visiting this site and <Bold>have a fabulous day!</Bold>
                    </Description>
                </TextSectionContainer>
            </AboutPageContainer>
            <Footer />
        </>
    );
}

