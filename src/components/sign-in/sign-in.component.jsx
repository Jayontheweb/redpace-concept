
import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { Link } from 'react-router-dom';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }


    handleSubmit = async e => {
        e.preventDefault();

        const { email, password } = this.state

        try {
            await auth.signInWithEmailAndPassword(email, password);
            this.setState({ email: '', password: '' })
        } catch (error) {
            console.log(error)
        }
    }

    handleChange = e => {
        const { value, name } = e.target;

        this.setState({ [name]: value })
    }


    render() {


        return (
            <div className='sign-in'>
                <h2>Signing you in...</h2>


                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name='email'
                        type='email'
                        value={this.state.email}
                        label='email'
                        required
                        handleChange={this.handleChange}
                    />


                    <FormInput
                        name='password'
                        type='password'
                        value={this.state.password}
                        label='password'
                        required
                        handleChange={this.handleChange}
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

}

export default SignIn;

