
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './join.styles.scss';

const Join = () => {
    const [newUserCredentials, setNewUserCretentials] = useState({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
    });


    const { displayName, email, password, confirmPassword } = newUserCredentials;

    const handleSubmit = async e => {
        e.preventDefault();


        if (password !== confirmPassword) {
            toast.error('Passwords do not match',
                {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            return;
        };

        try {
            const { user } = await auth.createUserWithEmailAndPassword(
                email,
                password
            );

            await createUserProfileDocument(user, { displayName });

            setNewUserCretentials({
                displayName: '',
                email: '',
                password: '',
                confirmPassword: '',
            });

        } catch (error) {
            console.log(error);
        }
    };

    const handleChange = e => {
        const { name, value } = e.target;

        setNewUserCretentials({ ...newUserCredentials, [name]: value })
    };



    return (
        <div className='join'>
            <ToastContainer />
            <h2 className='title'>Creating your account...</h2>
            <span className='subtitle'>Please, fill out the form:</span>
            <form className='join-form' onSubmit={handleSubmit}>
                <FormInput
                    type='text'
                    name='displayName'
                    value={displayName}
                    onChange={handleChange}
                    label='display name'
                    required
                />


                <FormInput
                    type='email'
                    name='email'
                    value={email}
                    onChange={handleChange}
                    label='email'
                    required
                />


                <FormInput
                    type='password'
                    name='password'
                    value={password}
                    onChange={handleChange}
                    label='password'
                    required
                />


                <FormInput
                    type='password'
                    name='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                    label='confirm password'
                    required
                />
                <div className='join-button'>
                    <CustomButton type='submit' >JOIN RED</CustomButton>
                </div>



            </form>
        </div>
    )

}

export default Join;
