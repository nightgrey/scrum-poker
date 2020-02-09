const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require('next/constants');

module.exports = (phase, { defaultConfig }) => {
  const configuration = {
    env: {
      title: 'Scrum Poker'
    }
  };

  const developmentConfiguration = {

  };

  const productionConfiguration = {

  };

  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return Object.assign(configuration, developmentConfiguration);
  }

  if (phase === PHASE_PRODUCTION_BUILD) {
    return Object.assign(configuration, productionConfiguration);
  }

  return configuration;
};
