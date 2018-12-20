import React, { Component } from 'react';
import merge from 'lodash/merge';
import 'typeface-open-sans';

import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import TopBar from './TopBar';
import App from './App';

class ThemeProvider extends Component {
  state = {
    type: 'light',
  };

  handleChange = event => {
    this.setState({ type: event.target.checked ? 'dark' : 'light' });
  };

  render() {
    const { type } = this.state;
    let theme = createMuiTheme({
      palette: {
        primary: {
          main: '#00aeff',
          contrastText: '#fff',
        },
        secondary: {
          main: '#00C5C7',
          contrastText: '#fff',
        },
        error: {
          main: '#F44336',
          contrastText: '#fff',
        },
        tonalOffset: 0.15,
        type,
      },
      typography: {
        useNextVariants: true,
        fontFamily: [
          '"Open Sans"',
          '"Helvetica Neue"',
          'Arial',
          'sans-serif',
        ].join(','),
      },
    });
    const customPalette = {
      palette: {
        brand: {
          ...theme.palette.augmentColor({ main: '#173d9a' }),
        },
        warning: {
          ...theme.palette.augmentColor({ main: '#F7981D' }),
        },
        success: {
          ...theme.palette.augmentColor({ main: '#3ab449' }),
        },
        marketing: {
          ...theme.palette.augmentColor({ main: '#02cfa5' }),
        },
      },
    };
    const mergedTheme = merge({}, customPalette, theme);
    theme = {
      ...mergedTheme,
      colors: {
        primary: theme.palette.primary,
        secondary: theme.palette.secondary,
        brand: mergedTheme.palette.brand,
        error: theme.palette.error,
        success: mergedTheme.palette.success,
        warning: mergedTheme.palette.warning,
        marketing: mergedTheme.palette.marketing,
      },
      overrides: {
        MuiAppBar: {
          colorPrimary: {
            backgroundColor: mergedTheme.palette.brand.dark,
          },
        },
      },
    };
    return (
      <MuiThemeProvider theme={theme}>
        <CssBaseline />
        <TopBar handleSwitchChange={this.handleChange} />
        <App />
      </MuiThemeProvider>
    );
  }
}

export default ThemeProvider;
