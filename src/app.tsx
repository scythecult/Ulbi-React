import { Route, Routes } from 'react-router-dom';
import './styles/index.scss';
import { Suspense } from 'react';
import { AboutPageAsync } from './pages/AboutPage/AboutPage.async';
import { MainPageAsync } from './pages/MainPage/MainPage.async';
import { useTheme } from './hooks/useTheme';
import { AppRoute } from './constants/routes';

export const App = () => {
  const [theme, setTheme] = useTheme();
  const className = `app ${theme}`;

  return (
    <div className={className}>
      <Suspense fallback="Loading...">
        <button onClick={setTheme}>Theme</button>
        <Routes>
          <Route path={AppRoute.ROOT} element={<MainPageAsync />} />
          <Route path={AppRoute.ABOUT} element={<AboutPageAsync />} />
        </Routes>
      </Suspense>
    </div>
  );
};
