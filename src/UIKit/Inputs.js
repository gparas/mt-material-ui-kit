import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import { capitalize } from '@material-ui/core/utils/helpers';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import InputAdornment from '@material-ui/core/InputAdornment';
import Typography from '@material-ui/core/Typography';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';
import FormControl from '@material-ui/core/FormControl';
import RadioGroup from '@material-ui/core/RadioGroup';

import Search from '@material-ui/icons/Search';
import Person from '@material-ui/icons/Person';

import TextField from '../components/TextField/TextField';
import Checkbox from '../components/Checkbox/Checkbox';
import Radio from '../components/Radio/Radio';
import Switch from '../components/Switch/Switch';
import Section from '../components/Section';

const styles = ({ spacing: { unit } }) => ({
  title: {
    marginTop: unit,
  },
});

const options = [
  {
    value: 'option 1',
    label: 'option 1',
  },
  {
    value: 'option 2',
    label: 'option 2',
  },
  {
    value: 'option 3',
    label: 'option 3',
  },
];

class Inputs extends Component {
  state = {
    select: 'option 1',
  };
  handleChange = name => event => {
    this.setState({
      [name]: event.target.value,
    });
  };
  render() {
    const { classes, theme } = this.props;
    const labelText = (
      <div style={{ display: 'flex' }}>
        Password
        <span
          style={{
            color: 'rgba(0, 0, 0, 0.54)',
            fontStyle: 'italic',
            marginLeft: 'auto',
          }}
        >
          All fields are mandatory
        </span>
      </div>
    );
    const gridSpacing = 24;
    const inputs = [
      {
        error: false,
        disabled: false,
      },
      {
        error: true,
        disabled: false,
      },
      {
        error: false,
        disabled: true,
      },
    ];
    const colors = theme.colors;
    return (
      <Section title="Forms">
        <Grid container spacing={gridSpacing} alignItems="flex-start">
          <Grid item sm={4} style={{ paddingBottom: 0 }}>
            <Typography variant="h5" component="h4">
              inputs
            </Typography>
            {inputs.map((item, i) => (
              <TextField
                key={i}
                defaultValue="value"
                type="text"
                fullWidth
                error={item.error}
                disabled={item.disabled}
                margin="normal"
                required
              />
            ))}
          </Grid>
          <Grid item sm={4} style={{ paddingBottom: 0 }}>
            <Typography variant="h5" component="h4">
              with icon
            </Typography>
            {inputs.map((item, i) => (
              <TextField
                key={i}
                defaultValue="value"
                type="text"
                fullWidth
                error={item.error}
                disabled={item.disabled}
                margin="normal"
                required
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Person fontSize="small" />
                    </InputAdornment>
                  ),
                }}
              />
            ))}
          </Grid>
          <Grid item sm={4} style={{ paddingBottom: 0 }}>
            <Typography variant="h5" component="h4">
              with button icon
            </Typography>
            {inputs.map((item, i) => (
              <TextField
                key={i}
                defaultValue="value"
                type="text"
                fullWidth
                error={item.error}
                disabled={item.disabled}
                margin="normal"
                required
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <IconButton>
                        <Search fontSize="small" />
                      </IconButton>
                    </InputAdornment>
                  ),
                }}
              />
            ))}
          </Grid>
        </Grid>
        <Grid container spacing={gridSpacing} alignItems="flex-start">
          <Grid item xs={12} style={{ paddingBottom: 0 }}>
            <Typography variant="h5" component="h4" className={classes.title}>
              Inputs with label
            </Typography>
          </Grid>
          {inputs.map((item, i) => (
            <Grid key={i} item sm={4} xs={12}>
              <TextField
                label={labelText}
                defaultValue="value"
                type="text"
                fullWidth
                error={item.error}
                disabled={item.disabled}
                required
              />
              <TextField
                label="Input label"
                defaultValue="value"
                type="text"
                fullWidth
                error={item.error}
                disabled={item.disabled}
                helperText="helper text"
                margin="normal"
                required
              />
            </Grid>
          ))}
        </Grid>
        <Grid container spacing={gridSpacing} alignItems="flex-start">
          <Grid item xs={12} style={{ paddingBottom: 0 }}>
            <Typography variant="h5" component="h4">
              Select
            </Typography>
          </Grid>
          {inputs.map((item, i) => (
            <Grid key={i} item sm={4} xs={12}>
              <TextField
                label="Select label"
                fullWidth
                select
                value={this.state.select}
                onChange={this.handleChange('select')}
                error={item.error}
                disabled={item.disabled}
                required
                SelectProps={{
                  native: true,
                }}
              >
                {options.map(option => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          ))}
        </Grid>

        <Grid container spacing={gridSpacing}>
          <Grid item md={4}>
            <Typography variant="h5" component="h4" className={classes.title}>
              Checkboxes
            </Typography>
            <FormControl>
              <FormGroup>
                {Object.keys(colors).map(color => {
                  return (
                    <FormControlLabel
                      key={color}
                      value="regular"
                      control={<Checkbox color={color} defaultChecked />}
                      label={capitalize(color)}
                    />
                  );
                })}
                <FormControlLabel
                  value="disabled"
                  control={<Checkbox />}
                  label="Disabled"
                  disabled
                />
                <FormControlLabel
                  value="checked"
                  control={<Checkbox defaultChecked />}
                  label="Disabled checked"
                  disabled
                />
              </FormGroup>
            </FormControl>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h5" component="h4" className={classes.title}>
              Radio Buttons
            </Typography>
            <FormControl>
              <RadioGroup name="gender" value="checked">
                {Object.keys(colors).map(color => {
                  return (
                    <FormControlLabel
                      key={color}
                      value="checked"
                      control={<Radio color={color} />}
                      label={capitalize(color)}
                    />
                  );
                })}
                <FormControlLabel
                  value="disabled"
                  control={<Radio />}
                  label="Disabled"
                  disabled
                />
                <FormControlLabel
                  value="checked"
                  control={<Radio />}
                  label="Disabled checked"
                  disabled
                />
              </RadioGroup>
            </FormControl>
          </Grid>
          <Grid item md={4}>
            <Typography variant="h5" component="h4" className={classes.title}>
              Switch Buttons
            </Typography>
            <FormControl>
              <FormGroup>
                {Object.keys(colors).map(color => {
                  return (
                    <FormControlLabel
                      key={color}
                      control={<Switch color={color} defaultChecked />}
                      label={capitalize(color)}
                    />
                  );
                })}
                <FormControlLabel
                  control={<Switch />}
                  label="Disabled"
                  disabled
                />
                <FormControlLabel
                  value="checked"
                  control={<Switch checked />}
                  label="Disabled checked"
                  disabled
                />
              </FormGroup>
            </FormControl>
          </Grid>
        </Grid>
      </Section>
    );
  }
}

export default withStyles(styles, { withTheme: true })(Inputs);
