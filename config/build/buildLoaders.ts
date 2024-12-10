import webpack from "webpack";
import { BuildOptions } from "./types/config";
import { buildCssLoader } from "./loaders/buildCssLoaders";

export function buildLoaders({isDev}: BuildOptions): webpack.RuleSetRule[] {
	
  const svgLoaders = {
    test: /\.svg$/,
    use: ['@svgr/webpack'],
  };

  const babelLoader = {
    test: /\.(js|jsx|tsx)$/,
    exclude: /node_modules/,
    use: { 
      loader: "babel-loader",
      options: {
        presets: [
          ["@babel/preset-env", { "targets": "defaults" }],
          ["@babel/preset-react", { runtime: "automatic" }],
          ["@babel/preset-typescript"]
        ],
        plugins: [
          ["i18next-extract", {
            locales: ['ru', 'en'],
            keyAsDefaultValue: true,
          }],
          ["@babel/plugin-proposal-decorators", { legacy: true }],
          ["@babel/plugin-proposal-class-properties", { loose: true }]
        ]
      }
    }
  };

  const cssLoaders = buildCssLoader(isDev);

  //Если не используем тайпскрипт - нужен babel-loader 
  const typescriptLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  const fileLoader = {
    test: /\.(png|jpe?g|gif|woff2|woff)$/i,
    use: [
      {
        loader: 'file-loader',
      },
    ],
  };

  return [
    fileLoader,
    svgLoaders,
    babelLoader,
    typescriptLoader,
    cssLoaders,
  ]
}