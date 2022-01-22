
import { FooterContainer, InsideFooter } from "./footer.styles";

export default function Footer() {
    return (
        <FooterContainer
            initial={{ opacity: 0, y: 150 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            exit={{ opacity: 0, x: -150 }}
        >
            <InsideFooter>All rights reserved &copy; Red Pace. 2022</InsideFooter>
        </FooterContainer>
    );
}
