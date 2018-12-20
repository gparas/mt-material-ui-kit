import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import Button from '../components/Button/Button';
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

const Buttons = ({ classes, theme }) => {
  const colors = theme.colors;
  const variants = ['text', 'outlined', 'contained'];
  const sizes = ['small', 'medium', 'large'];
  return (
    <Section title="Buttons">
      {variants.map(variant => (
        <div key={variant} className={classes.wrapper}>
          <Typography variant="h5" component="h4" className={classes.title}>
            Button {variant}
          </Typography>
          {Object.keys(colors).map(color => {
            return (
              <Button
                key={color}
                variant={variant}
                color={color}
                // disabled
                className={classes.button}
              >
                {color}
              </Button>
            );
          })}
          <Button
            variant={variant}
            color="primary"
            disabled
            className={classes.button}
          >
            Disabled
          </Button>
        </div>
      ))}
      <div className={classes.wrapper}>
        <Typography variant="h5" component="h4" className={classes.title}>
          Button size
        </Typography>
        {sizes.map(size => (
          <Button
            key={size}
            variant="contained"
            color="primary"
            size={size}
            className={classes.button}
          >
            {size}
          </Button>
        ))}
      </div>
    </Section>
  );
};

export default withStyles(styles, { withTheme: true })(Buttons);
