import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import Fab from '@material-ui/core/Fab';

const styles = theme => {
  const colors = theme.colors;
  const variant = {};
  Object.keys(colors).forEach(key => {
    variant[key] = {
      color: colors[key].contrastText,
      backgroundColor: colors[key].main,
      '&$disabled': {
        color: theme.palette.action.disabled,
        boxShadow: theme.shadows[0],
        backgroundColor: theme.palette.action.disabledBackground,
      },
      '&:hover': {
        backgroundColor: colors[key].dark,
        '@media (hover: none)': {
          backgroundColor: colors[key].main,
        },
        '&$disabled': {
          backgroundColor: theme.palette.action.disabledBackground,
        },
      },
    };
  });
  return {
    ...variant,
    disabled: {},
  };
};

function CustomFab(props) {
  const { classes, className, color, disabled, ...other } = props;
  const fabClasses = classNames({
    [classes[color]]: color,
    [classes.disabled]: disabled,
    [className]: className,
  });
  return <Fab className={fabClasses} {...other} />;
}

CustomFab.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  // color: PropTypes.oneOf(['default', 'primary', 'secondary', 'brand']),
  disabled: PropTypes.bool,
};

export default withStyles(styles)(CustomFab);
