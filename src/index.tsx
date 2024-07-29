import { App } from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/themeProvider';
// eslint-disable-next-line react/no-deprecated
import { render } from 'react-dom';
import './shared';

render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>,
  document.querySelector('#root')
);
