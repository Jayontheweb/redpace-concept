
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


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
        <div className='sign-in'>
            <h2>Signing you in...</h2>


            <form onSubmit={handleSubmit}>
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

                <div className='sign-button'>
                    <CustomButton type="submit">SIGN IN</CustomButton>
                    <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>SIGN IN WITH GOOGLE</CustomButton>
                </div>
                <span className='new-account'>Don't have an account?<Link className='join-link' to='/join'>Create one!</Link></span>

            </form>
        </div>
    )
}

export default SignIn;



