export const AppRoute = {
  ROOT: '/',
  ABOUT: '/about',
} as const;

export type AppRouteKey = keyof typeof AppRoute;
export type AppRouteValue = typeof AppRoute[AppRouteKey];
