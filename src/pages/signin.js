import React from 'react';

import SignInForm from '../components/SignIn';
import { SignUpLink } from '../components/SignUp';
import { PasswordForgetLink } from '../components/PasswordForget';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    margin: 24,
  },
});

class SignInPage extends React.Component {
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Typography variant="display1" gutterBottom>
        Sign In
      </Typography>
     
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    )
  }
}

export default (SignInPage);