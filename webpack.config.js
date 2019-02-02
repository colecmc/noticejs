import path from 'path';

function webpackConfig(options) {
  const watch = options.mode === 'development';

  return {
    module: {
      rules: [
        {
          test: /\.js$/,
          use: {
            loader: 'babel-loader',
            options: {
              presets: ['env'],
            },
          },
        },
      ],
    },
    mode: options.mode,
    watch,
    devtool: 'source-map',
    entry: './src/js/notice.js',
    output: {
      filename: 'notice.js',
      library: '',
      libraryTarget: 'window',
      path: path.resolve(__dirname, './dist/'),
    },
  };
}

export default webpackConfig;
