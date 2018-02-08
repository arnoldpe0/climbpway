import React from 'react';

import SignInForm from '../components/SignIn';
import { SignUpLink } from '../components/SignUp';
import { PasswordForgetLink } from '../components/PasswordForget';

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
        <h1>SignIn</h1>
        <SignInForm />
        <PasswordForgetLink />
        <SignUpLink />
      </div>
    )
  }
}

export default (SignInPage);