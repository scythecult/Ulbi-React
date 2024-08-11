import { AboutPageAsync } from '../../../../pages/aboutPage';
import { MainPageAsync } from '../../../../pages/mainPage';
import { NotFoundPageAsync } from '../../../../pages/notFoundPage';
import { PageLoader } from '../../../../widgets/pageLoader';
import { Suspense } from 'react';
import { AppRoute, AppRouteKey, AppRoutePath } from '../../../../shared/config';
import { Route, RouteProps, Routes } from 'react-router-dom';

export const RouteConfig: Record<AppRouteKey, RouteProps> = {
  [AppRoute.ROOT]: {
    path: AppRoutePath[AppRoute.ROOT],
    element: <MainPageAsync />,
  },
  [AppRoute.ABOUT]: {
    path: AppRoutePath[AppRoute.ABOUT],
    element: <AboutPageAsync />,
  },
  [AppRoute.NOT_FOUND]: {
    path: AppRoutePath[AppRoute.NOT_FOUND],
    element: <NotFoundPageAsync />,
  },
};

const appRoutes = Object.entries(RouteConfig).map(([routeName, { path, element }]) => (
  <Route key={routeName} path={path} element={element} />
));

export const AppRouter = () => (
  <Suspense fallback={<PageLoader />}>
    <Routes>{appRoutes}</Routes>
  </Suspense>
);
