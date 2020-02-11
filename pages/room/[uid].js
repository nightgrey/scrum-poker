import React from 'react';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';

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

export default Room;
