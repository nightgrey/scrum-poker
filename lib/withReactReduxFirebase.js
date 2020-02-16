import React from 'react';
import App from 'next/app';
import { ReactReduxFirebaseProvider } from 'react-redux-firebase';
import firebase from './firebase';
import initializeStore from '../store';

const withReactReduxFirebase = (PageComponent) => {
  // eslint-disable-next-line react/prop-types
  const WithReactReduxFirebase = ({ ...props }) => (
    <ReactReduxFirebaseProvider config={{ userProfile: 'users' }} firebase={firebase} dispatch={initializeStore().dispatch}>
      <PageComponent {...props} />
    </ReactReduxFirebaseProvider>
  );

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

  return WithReactReduxFirebase;
};

export default withReactReduxFirebase;
