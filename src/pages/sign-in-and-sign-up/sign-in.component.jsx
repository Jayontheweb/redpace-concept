
import SignIn from '../../components/sign-in/sign-in.component';

import './sign-in-and-sign-up.styles.scss';

import { Helmet } from 'react-helmet';

export default function SignInPage() {
    return (
        <div className='sign-in-and-sign-up'>
            <Helmet>
                <title>Sign In | Red Pace.</title>
            </Helmet>
            <SignIn />
        </div>
    )
}

