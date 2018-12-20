import React from 'react';
import { withStyles } from '@material-ui/core/styles';
// import Badge from '@material-ui/core/Badge';
import IconButton from '@material-ui/core/IconButton';
import MailIcon from '@material-ui/icons/Mail';

import Badge from '../components/Badge/Badge';
import Section from '../components/Section';

const styles = theme => ({
  margin: {
    margin: theme.spacing.unit * 2,
  },
});

const Badges = ({ classes, theme }) => {
  const colors = theme.colors;
  return (
    <Section title="Badges">
      {Object.keys(colors).map(color => {
        return (
          <IconButton
            key={color}
            aria-label="4 pending messages"
            className={classes.margin}
          >
            <Badge badgeContent={4} color={color}>
              <MailIcon />
            </Badge>
          </IconButton>
        );
      })}
    </Section>
  );
};

export default withStyles(styles, { withTheme: true })(Badges);
