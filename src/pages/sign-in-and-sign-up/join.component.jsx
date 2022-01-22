
import Join from '../../components/join/join.component';

import './sign-in-and-sign-up.styles.scss';

import { Helmet } from 'react-helmet';

export default function JoinPage() {
    return (
        <div className='sign-in-and-sign-up'>
            <Helmet>
                <title>Join | Red Pace.</title>
            </Helmet>
            <Join />
        </div>
    )
}

