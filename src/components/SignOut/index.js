import React from 'react';
import Button from 'material-ui/Button';

import { auth } from '../../firebase';



const SignOutButton = () =>
  <Button
    onClick={auth.doSignOut}
  >
    Sign Out
  </Button>

export default SignOutButton;
