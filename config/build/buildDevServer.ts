import { BuildOptions } from './types/types';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';

export const buildDevServer = (options: BuildOptions): DevServerConfiguration => {
  return {
    port: options.port,
    open: false,
    historyApiFallback: true,
    hot: true,
  };
};
