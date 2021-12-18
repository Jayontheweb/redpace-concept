
import { connect } from 'react-redux';
import './cart-dropdown.styles.scss';
import { createStructuredSelector } from 'reselect';
import { toggleCartHidden } from '../../redux/cart/cart.actions';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../redux/cart/cart.selectors';
import { useNavigate } from 'react-router-dom';


function CartDropdown({ cartItems, dispatch }) {
    const navigate = useNavigate();
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

const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
});

export default connect(mapStateToProps)(CartDropdown);
