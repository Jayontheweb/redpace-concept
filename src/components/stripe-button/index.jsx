
import StripeCheckout from 'react-stripe-checkout';

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const StripeCheckoutButton = ({ price }) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_51K9AEIDRCi1BsWS1RwaPrmEB6mjDyDNiylHTR7z8aeXuAca9IYnNnMRVRUEaA89wHmJxuh5bmsbHu0e8681al8qN00f2K3MR3U'

    const notify = () =>
        toast.success('Payment Successful!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    const onToken = async token => {
        console.log(token);
        notify();
    }



    return (
        <>
            <StripeCheckout
                label='Pay Now'
                name='RED PACE Ltd.'
                billingAddress
                shippingAddress
                currency='GBP'
                description={`Your total is £ ${price}`}
                amount={priceForStripe}
                panelLabel='Pay Now'
                token={onToken}
                stripeKey={publishableKey}
            />
            <ToastContainer />
        </>
    )
}

export default StripeCheckoutButton;
