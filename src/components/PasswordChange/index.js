import React, { Component } from 'react';
import Button from 'material-ui/Button';
import TextField from 'material-ui/TextField';

import { auth } from '../../firebase';

const updateByPropertyName = (propertyName, value) => () => ({
  [propertyName]: value,
});

const INITIAL_STATE = {
  passwordOne: '',
  passwordTwo: '',
  error: null,
};

class PasswordChangeForm extends Component {
  constructor(props) {
    super(props);

    this.state = { ...INITIAL_STATE };
  }

  onSubmit = (event) => {
    const { passwordOne } = this.state;

    auth.doPasswordUpdate(passwordOne)
      .then(() => {
        this.setState(() => ({ ...INITIAL_STATE }));
      })
      .catch(error => {
        this.setState(updateByPropertyName('error', error));
      });

    event.preventDefault();
  }

  render() {
    const {
      passwordOne,
      passwordTwo,
      error,
    } = this.state;

    const isInvalid =
      passwordOne !== passwordTwo ||
      passwordOne === '';

    return (
      <form onSubmit={this.onSubmit}>

        <TextField
         value={passwordOne}
         onChange={event => this.setState(updateByPropertyName('passwordOne', event.target.value))}
         type="password"
         placeholder="Password"
          id="passwordOne"
          label="New Password"
          variant="password"
          margin="normal"
        />

        <TextField
         value={passwordTwo}
         onChange={event => this.setState(updateByPropertyName('passwordTwo', event.target.value))}
         type="password"
         placeholder="Password"
          id="passwordTwo"
          label="Confirm New Password"
          variant="password"
          margin="normal"
        />
        
        <Button variant="raised" color="primary" disabled={isInvalid} type="submit">Reset My Password</Button>

        { error && <p>{error.message}</p> }
      </form>
    );
  }
}

export default PasswordChangeForm;