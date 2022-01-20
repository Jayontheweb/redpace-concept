
import { useSelector } from 'react-redux';

import { selectCartItems, selectCartTotal } from '../../redux/cart/cart.selectors';

import CheckoutItem from '../../components/checkout-item';
import StripeCheckoutButton from '../../components/stripe-button';

import './checkout.styles.scss'

import { motion } from 'framer-motion/dist/framer-motion';



const CheckoutPage = () => {

    const cartItems = useSelector(selectCartItems);
    const total = useSelector(selectCartTotal);


    return (
        <div className='checkout-page'>
            <motion.div
                initial={{ opacity: 0, x: 250 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, x: -150 }}
                className='checkout-header'>
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </motion.div>
            {
                cartItems.map((cartItem, i) =>
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, y: 250 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.2, delay: i * 0.1 }}
                        exit={{ opacity: 0, x: 150 }}
                        className='motion-map-div'
                    >
                        <CheckoutItem key={cartItem.id} cartItem={cartItem} />
                    </motion.div>
                )
            }

            <motion.div
                initial={{ opacity: 0, x: 250 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, x: -150 }}
                className='total'>
                <span>TOTAL: £ {total}</span>
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 250 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, x: -150 }}
                className='test-warning'>
                *Please use the following test credit card for payments*
                <br />
                4242 4242 4242 4242 - Exp: 01/23 - CVV: 123
            </motion.div>
            <motion.div
                initial={{ opacity: 0, x: 250 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                exit={{ opacity: 0, x: -150 }}
                className='stripe-btn'>
                <StripeCheckoutButton price={total} />
            </motion.div>
        </div>
    )
}



export default CheckoutPage;

