import React from 'react';
import Typography from 'material-ui/Typography';

import SignUpForm from '../components/SignUp';

const SignUpPage = () =>
  <div>
            <Typography variant="display1" gutterBottom>
      Sign Up
    </Typography>
    <SignUpForm />
  </div>

export default SignUpPage;