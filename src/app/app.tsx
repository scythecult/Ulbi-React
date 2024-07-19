import './styles/index.scss';
import { useTheme } from './providers/themeProvider/lib/hooks/useTheme';
import cn from 'classnames';
import { AppRouter } from './router/appRouter';
import { Header } from '../widgets/header';

export const App = () => {
  const [theme, setTheme] = useTheme();
  const className = cn('app', theme);

  return (
    <div className={className}>
      <Header />
      <button onClick={setTheme}>Theme</button>
      <AppRouter />
    </div>
  );
};
