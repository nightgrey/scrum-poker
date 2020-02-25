import React from 'react';
import PropTypes from 'prop-types';
import '../styles/index.css';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.propTypes = {
  Component: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
  pageProps: PropTypes.object,
};

App.defaultProps = {
  Component: null,
  pageProps: null,
};

export default App;
