// Libs
import { createTheme, Theme } from '@mui/material';

// color override declaration
declare module '@mui/material/styles' {
  export interface Palette {
    gray: string;
    black: string;
    red: string;
    white: string;
    darkGray: string;
    lightGray: string;
  }
  interface PaletteOptions {
    gray: string;
    black: string;
    red: string;
    white: string;
    darkGray: string;
    lightGray: string;
  }
}

const theme = createTheme({
  palette: {
    gray: '#8D8D8D',
    black: '#000',
    red: '#ff3333',
    white: '#FFF',
    darkGray: '#444',
    lightGray: '#D3D3D3',
  },
  components: {
    MuiInputBase: {
      styleOverrides: {
        root: ({ theme }: { theme: Theme }) => ({
          width: '100%',
          height: '35px',
          border: 'none',
          borderBottom: `1px solid ${theme.palette.gray}`,
          fontFamily: 'Poppins',
          fontSize: '14px',
          fontWeight: 500,
          lineHeight: '20px',
          color: theme.palette.black,
          '&.MuiInput-root': {
            '&::before, &::after': {
              borderBottom: 'none',
            },
            '&:hover:not(.Mui-disabled, .Mui-error)::before': {
              borderBottom: 'none',
            },
          },
          '&:placeholder': {
            color: theme.palette.gray,
          },
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: () => ({
          fontFamily: 'Poppins',
          fontSize: '12px',
          fontWeight: 500,
          lineHeight: '20px',
        }),
      },
    },
    MuiButton: {
      styleOverrides: {
        root: () => ({
          width: '105px',
          height: '39px',
          fontFamily: 'Poppins',
          fontSize: '12px',
          fontWeight: 500,
          color: theme.palette.white,
          backgroundColor: theme.palette.black,
          '&:focus': {
            outline: 'none',
          },
          '&:hover': {
            backgroundColor: theme.palette.darkGray,
          },
          '&:disabled': {
            backgroundColor: theme.palette.lightGray,
          },
        }),
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: () => ({
          padding: 0,
          width: '13px',
          height: '14px',
        }),
      },
    },
  },
});

export default theme;
