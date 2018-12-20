import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import TextField from '@material-ui/core/TextField';

const styels = theme => ({});

function CustomTextField(props) {
  const { classes } = props;
  console.log(props);
  return <TextField InputLabelProps={{ shrink: true }} {...props} />;
}

CustomTextField.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styels)(CustomTextField);
