import React from 'react';
import PropTypes from 'prop-types';
import Typography from 'material-ui/Typography';

import { PasswordForgetForm } from '../components/PasswordForget';
import PasswordChangeForm from '../components/PasswordChange';
import withAuthorization from '../components/Session/withAuthorization';

const AccountPage = (props, { authUser }) =>
  <div>
    
    <Typography variant="display1" gutterBottom>
      Account
    </Typography>
    
    <Typography variant="body1" gutterBottom >
      Currently logged in as: {authUser.email}
    </Typography>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);