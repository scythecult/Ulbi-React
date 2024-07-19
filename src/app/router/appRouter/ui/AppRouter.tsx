import { Route, RouteProps, Routes } from 'react-router-dom';
import { Suspense } from 'react';
import { AppRoute, AppRouteKey, AppRoutePath } from '../../../../shared/config/routes';
import { MainPageAsync } from '../../../../pages/mainPage';
import { AboutPageAsync } from '../../../../pages/aboutPage';

export const RouteConfig: Record<AppRouteKey, RouteProps> = {
  [AppRoute.ROOT]: {
    path: AppRoutePath[AppRoute.ROOT],
    element: <MainPageAsync />,
  },
  [AppRoute.ABOUT]: {
    path: AppRoutePath[AppRoute.ABOUT],
    element: <AboutPageAsync />,
  },
};

const appRoutes = Object.entries(RouteConfig).map(([routeName, { path, element }]) => (
  <Route key={routeName} path={path} element={element} />
));

export const AppRouter = () => (
  <Suspense fallback="Loading...">
    <Routes>{appRoutes}</Routes>
  </Suspense>
);
