import React from 'react';
import PropTypes from 'prop-types';

import withStyles from '@material-ui/core/styles/withStyles';
import { capitalize } from '@material-ui/core/utils/helpers';
import Badge from '@material-ui/core/Badge';

const styles = theme => {
  const colors = theme.colors;
  const variant = {};
  Object.keys(colors).forEach(key => {
    variant[`color${capitalize(key)}`] = {
      backgroundColor: colors[key].main,
      color: colors[key].contrastText,
    };
  });
  return {
    ...variant,
  };
};

function CustomeBadge(props) {
  const { classes, color, ...other } = props;
  return (
    <Badge
      classes={{
        badge: classes[`color${capitalize(color)}`],
      }}
      {...other}
    />
  );
}

CustomeBadge.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CustomeBadge);
