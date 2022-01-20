
import { useState } from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import './join.styles.scss';

import { motion } from 'framer-motion/dist/framer-motion';


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
        <motion.div className='join'>
            <ToastContainer />
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
                className='title'>Creating your account...</motion.h2>
            <motion.span
                initial={{ opacity: 0, x: -150 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2 }}
                exit={{ opacity: 0, x: -150 }}
                className='subtitle'>Please, fill out the form:</motion.span>

            <motion.form
                initial={{ opacity: 0, y: 250 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2, }}
                exit={{ opacity: 0, x: -150 }}
                className='join-form' onSubmit={handleSubmit}>
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



            </motion.form>
        </motion.div>
    )

}

export default Join;
