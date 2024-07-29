import { AppRouter } from './router/appRouter';
import { Header } from '../widgets/header';
import { Navigation } from '../widgets/nav';
import { Sidebar } from '../widgets/sidebar';
import { Suspense } from 'react';
import cn from 'classnames';
import { useTheme } from './providers/themeProvider';
import './styles/index.scss';

export const App = () => {
  const [theme] = useTheme();
  const classNameFinal = cn('app', theme);

  return (
    <Suspense fallback="...Loading">
      <div className={classNameFinal}>
        <Header>
          <Navigation />
        </Header>
        <Sidebar />
        <AppRouter />
      </div>
    </Suspense>
  );
};
