
import { useSelector } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import { selectCartHidden } from '../../redux/cart/cart.selectors';
import { selectCurrentUser } from '../../redux/user/user.selectors';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';
import { ReactComponent as Logo } from '../../assets/REDPACE.svg'

import { AnimatePresence, motion } from 'framer-motion/dist/framer-motion';


const Header = () => {

    const currentUser = useSelector(selectCurrentUser);
    const hidden = useSelector(selectCartHidden);

    return (
        <HeaderContainer>
            <LogoContainer to='/'>
                <Logo className='logo' />
            </LogoContainer>
            <OptionsContainer>
                <OptionLink to='shop'>SHOP</OptionLink>
                <OptionLink to='contact'>CONTACT</OptionLink>
                {
                    currentUser ?
                        (<OptionLink as='div' onClick={() => auth.signOut()}>
                            SIGN OUT
                        </OptionLink>)
                        :
                        (<OptionLink to='/signin'>SIGN IN</OptionLink>)
                }
                <CartIcon />
            </OptionsContainer>
            <AnimatePresence exitBeforeEnter>
                {
                    hidden ? null :
                        <CartDropdown />
                }
            </AnimatePresence>

        </HeaderContainer>
    )
}


export default Header;
