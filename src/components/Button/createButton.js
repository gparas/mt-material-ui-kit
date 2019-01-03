import { fade } from '@material-ui/core/styles/colorManipulator';

export function textVariant(theme, color) {
  return {
    color: color.main,
    '&:hover': {
      backgroundColor: fade(color.main, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      '&$disabled': {
        backgroundColor: 'transparent',
      },
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
    },
  };
}

export function outlinedVariant(theme, color) {
  return {
    color: color.main,
    border: `1px solid ${fade(color.main, 0.5)}`,
    '&:hover': {
      border: `1px solid ${color.main}`,
      backgroundColor: fade(color.main, theme.palette.action.hoverOpacity),
      '@media (hover: none)': {
        backgroundColor: 'transparent',
      },
      '&$disabled': {
        backgroundColor: 'transparent',
      },
    },
    '&$disabled': {
      color: theme.palette.action.disabled,
      border: `1px solid ${theme.palette.action.disabled}`,
    },
  };
}

export function containedVariant(theme, color) {
  return {
    color: color.contrastText,
    backgroundColor: color.main,
    '&$disabled': {
      color: theme.palette.action.disabled,
      backgroundColor: theme.palette.action.disabledBackground,
    },
    '&:hover': {
      backgroundColor: color.dark,
      '@media (hover: none)': {
        backgroundColor: color.main,
      },
      '&$disabled': {
        backgroundColor: theme.palette.action.disabledBackground,
      },
    },
  };
}
