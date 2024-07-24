import './styles/index.scss';
import cn from 'classnames';
import { Header } from '../widgets/header';
import { Navigation } from '../widgets/nav';
import { AppRouter } from './router/appRouter';
import { useTheme } from './providers/themeProvider';
import { Sidebar } from '../widgets/sidebar';

export const App = () => {
  const [theme] = useTheme();
  const classNameFinal = cn('app', theme);

  return (
    <div className={classNameFinal}>
      <Header>
        <Navigation />
      </Header>
      <Sidebar />
      <AppRouter />
    </div>
  );
};
