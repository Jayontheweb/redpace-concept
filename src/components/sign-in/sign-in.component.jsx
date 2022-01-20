
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

import { motion } from 'framer-motion/dist/framer-motion';



const SignIn = () => {
    const [userCredentials, setUserCredentials] = useState({ email: '', password: '' });

    const { email, password } = userCredentials;

    const handleSubmit = async e => {
        e.preventDefault();


        try {
            await auth.signInWithEmailAndPassword(email, password);
            setUserCredentials({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }
    }

    const handleChange = e => {
        const { value, name } = e.target;

        setUserCredentials({ ...userCredentials, [name]: value })
    }


    return (
        <motion.div className='sign-in'>
            <motion.h2
                initial={{ opacity: 0, x: 150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                    duration: 0.2,
                    type: 'spring',
                    damping: 15,
                    stiffness: 250
                }}
                exit={{ opacity: 0, x: -150 }}
            >Signing you in...</motion.h2>


            <motion.form
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, }}
                exit={{ opacity: 0, x: -150 }}
                onSubmit={handleSubmit}>
                <FormInput
                    name='email'
                    type='email'
                    value={email}
                    label='email'
                    required
                    handleChange={handleChange}
                />


                <FormInput
                    name='password'
                    type='password'
                    value={password}
                    label='password'
                    required
                    handleChange={handleChange}
                />

                <motion.div className='sign-button'>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </motion.div>
                <motion.span className='new-account'>Don't have an account?<Link className='join-link' to='/join'>Create one!</Link></motion.span>

            </motion.form>
        </motion.div>
    )
}

export default SignIn;



