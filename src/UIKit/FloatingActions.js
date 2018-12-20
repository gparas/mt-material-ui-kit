import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Notifications from '@material-ui/icons/Notifications';

import Fab from '../components/Fab/Fab';
import Section from '../components/Section';

const styles = ({ spacing: { unit } }) => ({
  wrapper: {
    marginLeft: -unit,
    marginRight: -unit,
    marginBottom: unit * 3,
  },
  title: {
    margin: `0 ${unit}px`,
  },
  button: {
    margin: unit,
  },
});

const FloatingActions = ({ classes, theme }) => {
  const colors = theme.colors;
  const variants = ['round', 'extended'];
  const sizes = ['small', 'medium', 'large'];
  return (
    <Section title="Floating Action Buttons">
      {variants.map(variant => (
        <div key={variant} className={classes.wrapper}>
          <Typography variant="h5" component="h4" className={classes.title}>
            Fab {variant}
          </Typography>
          {Object.keys(colors).map(color => {
            return (
              <Fab
                key={color}
                variant={variant}
                color={color}
                className={classes.button}
              >
                <Notifications />
                {variant !== 'round' && 'extended'}
              </Fab>
            );
          })}
          <Fab
            variant={variant}
            color="primary"
            disabled
            className={classes.button}
          >
            <Notifications />
            {variant !== 'round' && 'disabled'}
          </Fab>
        </div>
      ))}
      <div className={classes.wrapper}>
        <Typography variant="h5" component="h4" className={classes.title}>
          Fab size
        </Typography>
        {sizes.map(size => (
          <Fab
            key={size}
            color="primary"
            size={size}
            className={classes.button}
          >
            <Notifications />
          </Fab>
        ))}
      </div>
    </Section>
  );
};

export default withStyles(styles, { withTheme: true })(FloatingActions);
