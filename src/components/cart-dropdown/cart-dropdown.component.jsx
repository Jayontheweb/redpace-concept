
import { useSelector, useDispatch } from 'react-redux';
import './cart-dropdown.styles.scss';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useNavigate } from 'react-router-dom';


function CartDropdown() {
    const navigate = useNavigate();

    const cartItems = useSelector(selectCartItems);

    const dispatch = useDispatch();

    return (
        <div className='cart-dropdown'>
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
        </div>
    )
}


export default CartDropdown;
