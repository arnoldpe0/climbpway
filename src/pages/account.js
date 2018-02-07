import React from 'react';
import PropTypes from 'prop-types';

import { PasswordForgetForm } from '../components/PasswordForget';
import PasswordChangeForm from '../components/PasswordChange';
import withAuthorization from '../components/Session/withAuthorization';

const AccountPage = (props, { authUser }) =>
  <div>
    <h3>Currently logged in as: {authUser.email}</h3>
    <PasswordForgetForm />
    <PasswordChangeForm />
  </div>

AccountPage.contextTypes = {
  authUser: PropTypes.object,
};

const authCondition = (authUser) => !!authUser;

export default withAuthorization(authCondition)(AccountPage);