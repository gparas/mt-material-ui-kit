import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

// @material-ui/core components
import withStyles from '@material-ui/core/styles/withStyles';
import { capitalize } from '@material-ui/core/utils/helpers';
import Button from '@material-ui/core/Button';

import { textVariant, outlinedVariant, containedVariant } from './createButton';

const styles = theme => {
  const colors = theme.colors;
  const variant = {};
  Object.keys(colors).forEach(key => {
    variant[`text${capitalize(key)}`] = textVariant(theme, colors[key]);
    variant[`outlined${capitalize(key)}`] = outlinedVariant(theme, colors[key]);
    variant[`contained${capitalize(key)}`] = containedVariant(
      theme,
      colors[key],
    );
  });
  return {
    ...variant,
    colorInherit: {
      color: 'inherit',
    },
    disabled: {},
  };
};

function CustomButton(props) {
  const { classes, className, color, variant, disabled, ...other } = props;
  const contained = variant === 'contained';
  const outlined = variant === 'outlined';
  const text = variant === 'text';
  const btnClasses = classNames({
    [classes[`text${capitalize(color)}`]]: text && color,
    [classes[`outlined${capitalize(color)}`]]: outlined && color,
    [classes[`contained${capitalize(color)}`]]: contained && color,
    [classes.colorInherit]: color === 'inherit',
    [classes.disabled]: disabled,
    [className]: className,
  });
  return <Button className={btnClasses} {...other} />;
}

CustomButton.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  // color: PropTypes.oneOf(['default', 'primary', 'secondary', 'brand']),
  disabled: PropTypes.bool,
};

export default withStyles(styles)(CustomButton);
