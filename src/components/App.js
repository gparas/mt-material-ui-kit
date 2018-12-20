import React, { Fragment } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Colors from '../UIKit/Colors';
import Buttons from '../UIKit/Buttons';
import Inputs from '../UIKit/Inputs';
import FloatingActions from '../UIKit/FloatingActions';
import NavigationTabs from '../UIKit/NavigationTabs';
import Badges from '../UIKit/Badges';

import TextField from './TextField/TextField';

const styles = theme => ({
  root: {
    maxWidth: 1140,
    margin: '0 auto',
    ...theme.mixins.gutters(),
  },
  toolbar: {
    ...theme.mixins.toolbar,
  },
});

function App({ classes }) {
  return (
    <Fragment>
      <div className={classes.root}>
        <div className={classes.toolbar} />
        <Colors />
        <Buttons />
        <FloatingActions />
        <Inputs />
        <NavigationTabs />
        <Badges />
      </div>
    </Fragment>
  );
}

export default withStyles(styles)(App);
