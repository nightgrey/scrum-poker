const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase) => {
  const configuration = {
    env: {
      title: 'Scrum Poker',
    },
  };

  const developmentConfiguration = {
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
  };

  const productionConfiguration = {
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
  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return Object.assign(configuration, developmentConfiguration);
  }

  if (phase === PHASE_PRODUCTION_BUILD) {
    return Object.assign(configuration, productionConfiguration);
  }

  return configuration;
};
