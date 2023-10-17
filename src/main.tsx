// Libs
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material';
// Components
import App from './App.tsx';
// Styles
import 'assets/fonts/fonts.css';
import 'styles/global.css';
import theme from './styles/MUITheme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>
);
