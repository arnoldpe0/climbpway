import React from 'react';
import PropTypes from 'prop-types';
import Link from 'gatsby-link';
import SignOutButton from '../SignOut';
import * as routes from '../../constants/routes';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';

const styles = theme => ({
  root: {
    width: '100%',
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
});

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
    <Button color="primary" component={Link} to={routes.LANDING}>Landing</Button>
    <Button color="primary" component={Link} to={routes.HOME}>Home</Button>
    <Button color="primary" component={Link} to={routes.ACCOUNT}>Account</Button>
    <SignOutButton />
  </div>

class NavigationNonAuth extends React.Component {
  render() {
    const { classes } = this.props;
    return (
      <div>
        
        <Button  color="primary" component={Link} to={routes.LANDING}>Landing</Button >
        <Button  color="primary" component={Link} to={routes.SIGN_IN}>Sign In</Button>
        
      </div>
    );
  }
}

NavigationNonAuth.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default Navigation;