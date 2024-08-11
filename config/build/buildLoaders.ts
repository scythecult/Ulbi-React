import { BuildOptions } from './types/types';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import webpack from 'webpack';

export const buildLoaders = ({ isDev }: BuildOptions): webpack.RuleSetRule[] => {
  const svgLoader = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const cssLoader = {
    test: /\.css$/i,
    use: [
      isDev ? 'style-loader' : MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',

        options: {
          import: true,
          modules: {
            auto: (resPath: string) => resPath.includes('.module.'),
            localIdentName: isDev ? '_[local]--[hash:base64:5]' : '[hash:base64:5]',
            namedExport: false,
          },
        },
      },
    ],
  };

  return [fileLoader, svgLoader, typescriptLoader, cssLoader];
};
