
import { useSelector, useDispatch } from 'react-redux';
import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useNavigate } from 'react-router-dom';

import { motion } from 'framer-motion/dist/framer-motion';



function CartDropdown() {
    const navigate = useNavigate();

    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    return (
        <motion.div
            initial={{ opacity: 0, x: 65, y: -140, scale: 0.2 }}
            animate={{ opacity: 1, x: 0, y: 0, scale: 1 }}
            transition={{ duration: 0.2, }}
            exit={{ opacity: 0, x: 65, y: -140, scale: 0.2 }}
            className='cart-dropdown'>
            <div className='cart-items' >
                {
                    cartItems.length ?
                        cartItems.map(cartItem => <CartItem key={cartItem.id} item={cartItem} />)
                        :
                        <span className='empty-message'>Your cart is empty</span>
                }
            </div>
            {cartItems.length ?
                <CustomButton onClick={() => {
                    navigate('/checkout');
                    dispatch(toggleCartHidden())
                }}>
                    GO TO CHECKOUT</CustomButton>
                :
                null
            }
        </motion.div>
    )
}


export default CartDropdown;
