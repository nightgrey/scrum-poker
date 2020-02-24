import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import withRedux from '../../lib/withRedux';

const Room = () => {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <Layout>
      Room:
      {uid}
    </Layout>
  );
};

export default withRedux(Room);
