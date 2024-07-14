import webpack from 'webpack';
import { buildWebpackConfig } from './config/build/buildWebpackConfig';
import { BuildEnv, BuildPaths } from './config/build/types/types';
import path from 'path';

export default (env: BuildEnv) => {
  const PORT = env.port || 3000;
  const MODE_DEV = env.mode || 'development';
  const isDev = MODE_DEV === 'development';

  const PathMap: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'build'),
    html: path.resolve(__dirname, 'public', 'index.html'),
  };

  const config: webpack.Configuration = buildWebpackConfig({
    mode: MODE_DEV,
    paths: PathMap,
    isDev,
    port: PORT,
  });

  return config;
};
