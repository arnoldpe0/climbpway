import React from 'react';
import Typography from 'material-ui/Typography';

import { PasswordForgetForm } from '../components/PasswordForget';

const PasswordForgetPage = () =>
  <div>
        <Typography variant="display1" gutterBottom>
      Change Email Address
    </Typography>
    <PasswordForgetForm />
  </div>

export default PasswordForgetPage;