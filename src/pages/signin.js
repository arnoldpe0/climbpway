import React from 'react';
import PropTypes from 'prop-types';

import SignInForm from '../components/SignIn';
import { SignUpLink } from '../components/SignUp';
import { PasswordForgetLink } from '../components/PasswordForget';
import Typography from 'material-ui/Typography';
import Paper from 'material-ui/Paper';

import { withStyles } from 'material-ui/styles';
import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    margin: 24,
    maxWidth: 360,
    
  },
});

class SignInPage extends React.Component {
  
  render(){
    const { classes } = this.props;
    return (
      <div>
        <Paper className={classes.root} elevation={4}>
          <Typography variant="display1" gutterBottom>
          Sign In
        </Typography>
      
          <SignInForm />
          <PasswordForgetLink />
          <SignUpLink />
        </Paper>
      </div>
    )
  }
}

SignInPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withRoot(withStyles(styles)(SignInPage));