
import Directory from '../../components/directory/directory.component';
import Footer from '../../components/footer';

import { HomePageContainer } from './homepage.styles';

const HomePage = () => {
    return (
        <HomePageContainer>
            <Directory />
            <Footer />
        </HomePageContainer>
    )
}

export default HomePage;
