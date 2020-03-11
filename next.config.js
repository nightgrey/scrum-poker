const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');
const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');
const merge = require('lodash/merge');
const withSvgr = require('./lib/withSvgr');

const allConfiguration = {
  env: {
    title: 'Scrum Poker',
  },
};

const developmentConfiguration = merge(allConfiguration, {
  env: {
    firebaseConfig: {
      apiKey: 'AIzaSyBwOiQL7wZ59CWzM_KPG6YVOeI2igMowQY',
      authDomain: 'scrum-poker-d0059.firebaseapp.com',
      databaseURL: 'https://scrum-poker-d0059.firebaseio.com',
      projectId: 'scrum-poker-d0059',
      storageBucket: 'scrum-poker-d0059.appspot.com',
      messagingSenderId: '413486540736',
      appId: '1:413486540736:web:3481a2775a001741b70a25',
    },
  },
});

const productionConfiguration = merge(allConfiguration, {
  env: {
    firebaseConfig: {
      apiKey: 'AIzaSyBwOiQL7wZ59CWzM_KPG6YVOeI2igMowQY',
      authDomain: 'scrum-poker-d0059.firebaseapp.com',
      databaseURL: 'https://scrum-poker-d0059.firebaseio.com',
      projectId: 'scrum-poker-d0059',
      storageBucket: 'scrum-poker-d0059.appspot.com',
      messagingSenderId: '413486540736',
      appId: '1:413486540736:web:7321600fb86fda25b70a25',
    },
  },
});

module.exports = withPlugins(
  [
    [optimizedImages, {
      // Let `svgr` handle <svg>'s.
      handleImages: ['jpeg', 'png', 'webp'],
    }],
    [withSvgr, {}],
  ],
  {
    [PHASE_PRODUCTION_BUILD]: productionConfiguration,
    [PHASE_DEVELOPMENT_SERVER]: developmentConfiguration,
  },
);
