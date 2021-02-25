import React from 'react';
import SignIn from '../../components/signin/signin.component';
import SignUp from '../../components/signup/signup.component';

import './loginpage.styles.scss';

const LoginPage = () => (
    <div className="login-page">
        <SignIn />
        <SignUp />
    </div>
);


export default LoginPage;