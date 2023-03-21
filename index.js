import webpack from 'webpack';
import webpackConfig from './webpack.config';

webpack(webpackConfig({ mode: process.env.NODE_ENV }), (error, stats) => {
  const timeStamp = new Date();

  if (error) {
    throw new Error(`webpack > index: ${error}`);
  }

  console.log(timeStamp.toTimeString(), '\nwebpack started');

  if (stats) {
    console.log(timeStamp, stats);
//    const assets = stats?.compilation?.assetsInfo;
//    assets.forEach(item => console.log(item));
  }
});