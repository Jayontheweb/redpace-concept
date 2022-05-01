
import { Helmet } from "react-helmet";

import Footer from "../../components/footer";

import { AboutPageContainer, ImagesContainer, TextSectionContainer, Title, Description, ImageMan, ImageWoman } from "./about.styles";


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
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, rerum doloremque eius eligendi nemo reprehenderit praesentium sed corporis repudiandae dolores excepturi explicabo eos voluptate dolorum impedit beatae ipsum consequatur aliquid.
                        Adipisci aspernatur distinctio aliquid impedit sapiente laboriosam sequi ratione quo fugiat tempore consectetur doloremque nesciunt numquam voluptatum pariatur, quibusdam quod soluta dolor rerum cum autem, vel totam. Nobis, numquam aperiam?
                    </Description>
                </TextSectionContainer>
            </AboutPageContainer>
            <Footer />
        </>
    );
}

