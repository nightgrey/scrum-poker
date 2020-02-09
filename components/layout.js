import React from 'react';
import Head from 'next/head';

export default ({ title, children }) => (
  <>
    <Head>
      <title>{title ? `${title} - ${process.env.title}` : process.env.title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <div className="page bg-gray-100">
      {children}
    </div>
  </>
);
