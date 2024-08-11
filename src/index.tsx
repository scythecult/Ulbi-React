import { App } from './app/app';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from './app/providers/themeProvider';
import { createRoot } from 'react-dom/client';
import './shared';

const rootNode = document.querySelector('#root');
const reactRoot = createRoot(rootNode);

reactRoot.render(
  <BrowserRouter>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </BrowserRouter>
);
