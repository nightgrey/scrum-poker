import React from 'react';
import Layout from '../../components/layout';
import withRedux from '../../lib/withRedux';

const Create = () => (
  <Layout>
    <div className="flex items-center justify-center h-screen">
      <div className="container">
        <h1 className="text-5xl text-gray-800 uppercase pb-6 font-bold text-center">Scrum. Poker</h1>
        <form className="max-w-2xl mx-auto mb-8">
          <input name="title" placeholder="Title" className="text-2xl text-gray-600 bg-white shadow-lg rounded p-3 px-4 w-full mb-6" type="text" />
          <select name="card-types" style={{ '-webkit-appearance': 'none' }} className="text-2xl text-gray-600 bg-white shadow-lg rounded p-3 px-4 w-full mb-6">
            <option>Fibonacci</option>
          </select>
          <p className="mb-6 text-2xl align-middle">
            <input name="question-mark" type="checkbox" />
            {' '}
            <span className="text-gray-600">Include ?</span>
          </p>
          <input className="text-2xl bg-gray-800 text-white rounded p-3 px-4 w-full" type="submit" value="Create!" />
        </form>
      </div>
    </div>
  </Layout>
);

export default withRedux(Create);
