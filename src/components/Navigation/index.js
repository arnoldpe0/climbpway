import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
import Button from 'material-ui/Button';

const Navigation = (props, { authUser }) =>
  <div>
    { authUser
        ? <NavigationAuth />
        : <NavigationNonAuth />
    }
  </div>

Navigation.contextTypes = {
  authUser: PropTypes.object,
};

const NavigationAuth = () =>
  <div>
    <Button color="inherit" component={Link} to={routes.LANDING}>Landing</Button>
    <Button color="inherit" component={Link} to={routes.HOME}>Home</Button>
    <Button color="inherit" component={Link} to={routes.ACCOUNT}>Account</Button>
    <SignOutButton />
  </div>

const NavigationNonAuth = () =>
  <div>
    <Button color="inherit" component={Link} to={routes.LANDING}>Landing</Button>
    <Button color="inherit" component={Link} to={routes.SIGN_IN}>Sign In</Button>
  </div>

export default Navigation;