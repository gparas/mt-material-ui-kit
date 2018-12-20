import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import { capitalize } from '@material-ui/core/utils/helpers';
import Checkbox from '@material-ui/core/Checkbox';

const styles = theme => {
  const colors = theme.colors;
  const variant = {};
  Object.keys(colors).forEach(key => {
    variant[`color${capitalize(key)}`] = {
      '&$checked': {
        color: colors[key].main,
      },
      '&$disabled': {
        color: theme.palette.action.disabled,
      },
    };
  });
  return {
    ...variant,
    checked: {},
    disabled: {},
  };
};

function CustomCheckbox(props) {
  const { classes, color, ...other } = props;
  return (
    <Checkbox
      classes={{
        root: classes[`color${capitalize(color)}`],
        checked: classes.checked,
        disabled: classes.disabled,
      }}
      {...other}
    />
  );
}

CustomCheckbox.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'brand',
    'error',
    'warning',
    'success',
  ]),
  disabled: PropTypes.bool,
};

CustomCheckbox.defaultProps = {
  color: 'secondary',
};

export default withStyles(styles)(CustomCheckbox);
