import './styles/index.scss';
import cn from 'classnames';
import { Header } from '../widgets/header';
import { Navigation } from '../widgets/nav';
import { AppRouter } from './router/appRouter';
import { ThemeSwitcher } from '../widgets/themeSwitcher';
import { useTheme } from './providers/themeProvider';

export const App = () => {
  const [theme] = useTheme();
  const classNameFinal = cn('app', theme);

  return (
    <div className={classNameFinal}>
      <Header>
        <ThemeSwitcher>Toggle</ThemeSwitcher>
        <Navigation />
      </Header>
      <AppRouter />
    </div>
  );
};
