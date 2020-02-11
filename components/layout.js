import React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';

const Layout = ({ title, children }) => (
  <>
    <Head>
      <title>{title ? `${title} - ${process.env.title}` : process.env.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="page bg-gray-100">
      <div className="bg-wavy h-screen">
        {children}
      </div>
    </div>
  </>
);

Layout.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node,
};

Layout.defaultProps = {
  title: null,
  children: null,
};

export default Layout;
