import React, { Component } from 'react';
import {
  Link,
  withRouter,
} from 'react-router-dom';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';
import Typography from 'material-ui/Typography';

import { auth, db } from '../../firebase';
import * as routes from '../../constants/routes';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  username: '',
  email: '',
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class SignUpForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const {
      username,
      email,
      passwordOne,
    } = this.state;

    const {
      history,
    } = this.props;

    auth.doCreateUserWithEmailAndPassword(email, passwordOne)
      .then(authUser => {

        // Create a user in your own accessible Firebase Database too
        db.doCreateUser(authUser.uid, username, email)
          .then(() => {
            this.setState(() => ({ ...INITIAL_STATE }));
            history.push(routes.HOME);
          })
          .catch(error => {
            this.setState(updateByPropertyName('error', error));
          });

      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      username,
      email,
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '' ||
      username === '' ||
      email === '';

    return (
      <form onSubmit={this.onSubmit}>

        <TextField
          value={username}
          onChange={event => this.setState(updateByPropertyName('username', event.target.value))}
          type="text"
          placeholder="Full Name"
          id="username"
          label="Full Name"
          variant="username"
          margin="normal"
        />

        <br/>

        <TextField
          value={email}
          onChange={event => this.setState(updateByPropertyName('email', event.target.value))}
          type="text"
          placeholder="Email Address"
          id="email"
          label="Email Address"
          variant="email"
          margin="normal"
        />
        
        <br/>

        <TextField
          value={passwordOne}
          onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
          type="password"
          placeholder="Password"
          id="passwordOne"
          label="Password"
          variant="passwordOne"
          margin="normal"
        />

        <br/>

        <TextField
          value={passwordTwo}
          onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
          type="password"
          placeholder="Confirm Password"
          id="passwordTwo"
          label="Confirm Password"
          variant="passwordTwo"
          margin="normal"
        />

        <br/>

        <Button variant="raised" color="primary" disabled={isInvalid} type="submit">Sign Up</Button>


        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

const SignUpLink = () =>
  <div>
    <Button color="primary" component={Link} to={routes.SIGN_UP}>Sign Up</Button>
  </div>

export default withRouter(SignUpForm);

export {
  SignUpLink,
};