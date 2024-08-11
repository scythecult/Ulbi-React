export const AppRoute = {
  ROOT: 'ROOT',
  ABOUT: 'ABOUT',
  NOT_FOUND: 'NOT_FOUND',
} as const;

export type AppRouteKey = keyof typeof AppRoute;
export type AppRouteValue = (typeof AppRoute)[AppRouteKey];

export const AppRoutePath = {
  [AppRoute.ROOT]: '/',
  [AppRoute.ABOUT]: '/about',
  [AppRoute.NOT_FOUND]: '*',
} as const;

export type AppRoutePathKey = keyof typeof AppRoutePath;
export type AppRoutePathValue = (typeof AppRoutePath)[AppRoutePathKey];
