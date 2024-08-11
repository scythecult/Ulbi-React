import { AppRouter } from './router/appRouter';
import { Header } from '../widgets/header';
import { Navigation } from '../widgets/nav';
import { PageLoader } from '../widgets/pageLoader';
import { Sidebar } from '../widgets/sidebar';
import { Suspense } from 'react';
import cn from 'classnames';
import { useTheme } from './providers/themeProvider';
import './styles/index.css';

export const App = () => {
  const [theme] = useTheme();
  const classNameFinal = cn('app', theme);

  return (
    <Suspense fallback={<PageLoader />}>
      <div className={classNameFinal}>
        <Header>{<Navigation />}</Header>
        <Sidebar />
        <div className="content">
          <AppRouter />
        </div>
      </div>
    </Suspense>
  );
};
