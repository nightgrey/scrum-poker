import React from 'react';
import Layout from '../components/layout';

export default () => (
  <Layout>
    <div className="bg-wavy flex items-center justify-center h-screen">
      <div className="container text-center">
        <h1 className="text-5xl text-gray-800 uppercase pb-6 font-bold">Scrum. Poker</h1>
        <div className="max-w-2xl mx-auto mb-8">
          <input placeholder="Room ID" className="text-2xl text-gray-600 bg-white text-center shadow-lg rounded p-3 w-full " type="text" />
        </div>
        <div className="max-w-2xl mx-auto text-left">
          Alternatively, you can <a className="text-gray-600 font-bold">create a room.</a>
        </div>
      </div>
    </div>
  </Layout>
);
