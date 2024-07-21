import './styles/index.scss';
import { useTheme } from './providers/themeProvider/lib/hooks/useTheme';
import cn from 'classnames';
import { Header } from '../widgets/header';
import { Navigation } from '../widgets/nav';
import { AppRouter } from './router/appRouter';
import { ThemeSwitcher } from '../widgets/themeSwitcher';

export const App = () => {
  const [theme] = useTheme();
  const classNameFinal = cn('app', theme);

  return (
    <div className={classNameFinal}>
      <Header>
        <ThemeSwitcher>Toggle Theme</ThemeSwitcher>
        <Navigation />
      </Header>
      <AppRouter />
    </div>
  );
};
