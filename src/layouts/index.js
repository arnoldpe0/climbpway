import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import Reboot from 'material-ui/Reboot';

import MenuAppBar from '../components/MenuAppBar';
import withAuthentication from '../components/Session/withAuthentication';

import './index.css';

const TemplateWrapper = ({ children }) => (
  <div>
    <Helmet
      title="Climb Pway"
      meta={[
        { name: 'description', content: 'Climb Pway' },
        { name: 'keywords', content: 'Climb Pway' },
      ]}
    />
    <div className="app">
      <Reboot />
      <MenuAppBar />
      {children()}
    </div>
  </div>
)

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default withAuthentication(TemplateWrapper)
