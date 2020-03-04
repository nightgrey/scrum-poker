import React from 'react';
import App from 'next/app';
import { createFirebaseInstance, ReactReduxFirebaseProvider } from 'react-redux-firebase';
import { Provider } from 'react-redux';
import firebase from 'firebase/app';
import initializeStore from '../store';
import 'firebase/database';
import 'firebase/auth';
// eslint-disable-next-line no-unused-vars
import firebaseInstance from './firebaseInstance';

const reactReduxFirebaseConfig = {
  userProfile: 'users',
  presence: 'presence',
};

let reduxStore;

const getOrInitializeStore = (initialState) => {
  // Always make a new store if server, otherwise state is shared between requests
  if (typeof window === 'undefined') {
    return initializeStore(initialState);
  }

  // Create store if unavailable on the client and set it on the window object
  if (!reduxStore) {
    reduxStore = initializeStore(initialState);
  }

  return reduxStore;
};

const withReactReduxFirebase = (PageComponent, { ssr = true } = {}) => {
  // eslint-disable-next-line react/prop-types
  const WithReactReduxFirebase = ({ initialReduxState, ...props }) => {
    const store = getOrInitializeStore(initialReduxState);
    return (
      <Provider store={store}>
        <ReactReduxFirebaseProvider
          config={reactReduxFirebaseConfig}
          firebase={firebase}
          dispatch={store.dispatch}
        >
          <PageComponent {...props} />
        </ReactReduxFirebaseProvider>
      </Provider>
    );
  };

  // Make sure people don't use this HOC on _app.js level
  if (process.env.NODE_ENV !== 'production') {
    const isAppHoc = PageComponent === App || PageComponent.prototype instanceof App;
    if (isAppHoc) {
      throw new Error('The withReactReduxFirebase HOC only works with PageComponents');
    }
  }

  // Set the correct displayName in development
  if (process.env.NODE_ENV !== 'production') {
    const displayName = PageComponent.displayName || PageComponent.name || 'Component';

    WithReactReduxFirebase.displayName = `withReactReduxFirebase(${displayName})`;
  }

  // Handle `getInitialProps`
  if (ssr || PageComponent.getInitialProps) {
    WithReactReduxFirebase.getInitialProps = async (context) => {
      // Get or Create the store with `undefined` as initialState
      // This allows you to set a custom default initialState
      // eslint-disable-next-line no-shadow
      const reduxStore = getOrInitializeStore();

      // Provide the store to getInitialProps of pages
      // eslint-disable-next-line no-param-reassign
      context.reduxStore = reduxStore;

      // Provide `react-redux-firebase` instance of firebase to getInitialProps
      // eslint-disable-next-line no-param-reassign
      context.reactReduxFirebase = createFirebaseInstance(
        firebase, reactReduxFirebaseConfig, reduxStore.dispatch,
      );

      // Run getInitialProps from HOCed PageComponent
      const pageProps = typeof PageComponent.getInitialProps === 'function'
        ? await PageComponent.getInitialProps(context)
        : {};

      // Pass props to PageComponent
      return {
        ...pageProps,
        initialReduxState: reduxStore.getState(),
      };
    };
  }

  return WithReactReduxFirebase;
};

export default withReactReduxFirebase;
