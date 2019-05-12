import webpack from 'webpack';
import webpackConfig from './webpack.config';
/**
import runNodeSass from './src/js/run-node-sass';

runNodeSass({
  input: './src/css/style.scss',
  outFile: './dist/',
});
*/

webpack(webpackConfig({ mode: process.env.NODE_ENV }), (error, stats) => {
  const timeStamp = new Date();
  const assets = stats.compilation && stats.compilation.assets;

  if (error) {
    throw new Error(`webpack > index: ${error}`);
  }

  console.log(timeStamp.toTimeString(), '\nwebpack started');

  if (assets) {
    Object.keys(assets).forEach(item => console.log('output from entry should be:', stats.compilation.assets[item].existsAt));
  }
});