import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Paper from 'material-ui/Paper';

import { SignUpLink } from '../SignUp';
import { PasswordForgetLink } from '../PasswordForget';
import { auth } from '../../firebase';
import * as routes from '../../constants/routes';

const styles = theme => ({
  root: theme.mixins.gutters({
    paddingTop: 16,
    paddingBottom: 16,
    marginTop: theme.spacing.unit * 3,
  }),
});

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  email: '',
  password: '',
  error: null,
};

class SignInForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      email,
      password,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doSignInWithEmailAndPassword(email, password)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
        history.push(routes.HOME);
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      email,
      password,
      error,
    } = this.state;

    const isInvalid =
      password === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>

        <TextField
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
          id="email"
          label="Email"
          variant="email"
          autoComplete="current-email"
          margin="normal"
        />

        <br/>

        <TextField
          value={password}
          onChange={event => this.setState(updateByPropertyName('password', event.target.value))}
          type="password"
          placeholder="Password"
          id="password"
          label="Password"
          variant="password"
          autoComplete="current-password"
          margin="normal"
        />

        <br/>

        <Button variant="raised" color="primary" disabled={isInvalid} type="submit">Sign In</Button>

        { error && <p>{error.message}</p> }

      </form>
    );
  }
}

export default withRouter(SignInForm);