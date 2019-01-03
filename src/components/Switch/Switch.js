import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import { capitalize } from '@material-ui/core/utils/helpers';
import Switch from '@material-ui/core/Switch';

const styles = theme => {
  const colors = theme.colors;
  const variant = {};
  Object.keys(colors).forEach(key => {
    variant[`color${capitalize(key)}`] = {
      '&$checked': {
        color: colors[key].main,
        '& + $bar': {
          backgroundColor: colors[key].main,
        },
      },
      '&$disabled': {
        color:
          theme.palette.type === 'light'
            ? theme.palette.grey[400]
            : theme.palette.grey[800],
        '&$checked': {
          '& + $bar': {
            backgroundColor:
              theme.palette.type === 'light'
                ? theme.palette.common.black
                : theme.palette.common.white,
          },
        },
      },
    };
  });
  return {
    ...variant,
    checked: {},
    bar: {},
    disabled: {},
  };
};

function CustomSwitch(props) {
  const { classes, color, ...other } = props;
  return (
    <Switch
      classes={{
        switchBase: classes[`color${capitalize(color)}`],
        checked: classes.checked,
        bar: classes.bar,
        disabled: classes.disabled,
      }}
      {...other}
    />
  );
}

CustomSwitch.propTypes = {
  classes: PropTypes.object.isRequired,
  color: PropTypes.oneOf([
    'default',
    'primary',
    'secondary',
    'brand',
    'error',
    'warning',
    'success',
    'marketing',
  ]),
  disabled: PropTypes.bool,
};

CustomSwitch.defaultProps = {
  color: 'secondary',
};

export default withStyles(styles)(CustomSwitch);
