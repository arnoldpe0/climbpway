import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { withStyles } from 'material-ui/styles';

import MenuAppBar from '../components/MenuAppBar';
import withAuthentication from '../components/Session/withAuthentication';

import withRoot from '../withRoot';

const styles = theme => ({
  root: {
    margin:24,
  },
});

class TemplateWrapper extends React.Component {

  render() {
    const { classes } = this.props;
    const { children } = this.props;

    return (
    <div>
      <Helmet
        title="Climb Pway"
        meta={[
          { name: 'description', content: 'Climb Pway' },
          { name: 'keywords', content: 'Climb Pway' },
        ]}
      />
      <MenuAppBar />
      <div className={classes.root}>
        {children()}
      </div>
    </div>
    )
  }   
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
  classes: PropTypes.object.isRequired,
}

export default withAuthentication(withRoot(withStyles(styles)(TemplateWrapper)))
