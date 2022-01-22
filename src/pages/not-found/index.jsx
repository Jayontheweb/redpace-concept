
import CustomButton from '../../components/custom-button/custom-button.component';
import Footer from '../../components/footer';

import { NotFoundContainer, Numbers, Title, Subtitle, NavButtons } from './not-found.styles';

import { useNavigate } from 'react-router-dom';

import { Helmet } from 'react-helmet';

export default function NotFound() {

    const navigate = useNavigate();

    return (
        <NotFoundContainer
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: -250 }}
        >

            <Helmet>
                <title>Page Not Found | Red Pace.</title>
            </Helmet>

            <Numbers
                initial={{ opacity: 0, y: -250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.3,
                    type: 'spring',
                    damping: 15,
                    stiffness: 350
                }}
            >
                404
            </Numbers>

            <Title
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.1,
                }}
            >
                Whoops! This page appears to be lost in time and space.
            </Title>

            <Subtitle
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.1,
                }}
            >
                Might you find what you seek here?
            </Subtitle>

            <NavButtons
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                    duration: 0.1,
                }}
            >
                <CustomButton onClick={() => { navigate('/about') }} >ABOUT</CustomButton>
                <CustomButton empty onClick={() => { navigate('/') }} >HOME</CustomButton>
            </NavButtons>
            <Footer />
        </NotFoundContainer >
    );
}
