import React from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import Button from './Button/Button';
import Switch from './Switch/Switch';

function TopBar(props) {
  const { handleSwitchChange } = props;
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" color="inherit">
          Material Kit
        </Typography>
        <Button color="inherit">Link</Button>
        <FormControlLabel
          style={{ marginLeft: 'auto' }}
          control={<Switch onChange={handleSwitchChange} color="primary" />}
          label="dark"
        />
      </Toolbar>
    </AppBar>
  );
}

export default TopBar;
