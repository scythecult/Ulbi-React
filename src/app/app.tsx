import './styles/index.scss';
import cn from 'classnames';
import { Header } from '../widgets/header';
import { Navigation } from '../widgets/nav';
import { AppRouter } from './router/appRouter';
import { useTheme } from './providers/themeProvider';
import { Sidebar } from '../widgets/sidebar';
import { Suspense } from 'react';

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
