
import React from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import './join.styles.scss';

class Join extends React.Component {
    constructor() {
        super();

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: '',
        }
    };

    handleSubmit = async e => {
        e.preventDefault();

        const { displayName, email, password, confirmPassword } = this.state;

        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        };

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            this.setState({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });

        } catch (error) {
            console.log(error);
        }
    };

    handleChange = e => {
        const { name, value } = e.target;

        this.setState({ [name]: value })
    };



    render() {
        const { displayName, email, password, confirmPassword } = this.state;

        return (
            <div className='join'>
                <h2 className='title'>Creating your account...</h2>
                <span className='subtitle'>Please, fill out the form:</span>
                <form className='join-form' onSubmit={this.handleSubmit}>
                    <FormInput
                        type='text'
                        name='displayName'
                        value={displayName}
                        onChange={this.handleChange}
                        label='display name'
                        required
                    />


                    <FormInput
                        type='email'
                        name='email'
                        value={email}
                        onChange={this.handleChange}
                        label='email'
                        required
                    />


                    <FormInput
                        type='password'
                        name='password'
                        value={password}
                        onChange={this.handleChange}
                        label='password'
                        required
                    />


                    <FormInput
                        type='password'
                        name='confirmPassword'
                        value={confirmPassword}
                        onChange={this.handleChange}
                        label='confirm password'
                        required
                    />
                    <CustomButton type='submit' >JOIN RED</CustomButton>



                </form>
            </div>
        )
    }
}

export default Join;
