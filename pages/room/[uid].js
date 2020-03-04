import React from 'react';
import { useRouter } from 'next/router';
import { useFirebase, useFirebaseConnect } from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import Layout from '../../components/layout';
import { IsAuthorized, IsNotAuthorized } from '../../components/functional/authorization';
import withReactReduxFirebase from '../../lib/withReactReduxFirebase';

const Room = () => {
  const router = useRouter();
  const { uid } = router.query;

  const room = useSelector((state) => state.firebase.data.rooms && state.firebase.data.rooms[uid]);
  const auth = useSelector((state) => state.firebase.auth);

  const firebase = useFirebase();
  useFirebaseConnect(`/rooms/${uid}`);

  const loginWithGoogle = () => firebase.login({ provider: 'google', type: 'popup' });
  const loginWithGithub = () => firebase.login({ provider: 'github', type: 'popup' });
  const logout = () => firebase.logout();

  return (
    <Layout>
      <div className="container mx-auto">
        {!room ? (
          <span>No room with uid {uid} found.</span>
        ) : (
          <>
            <h2 className="text-5xl">{room.title}</h2>
            <IsNotAuthorized>
              <button type="button" onClick={loginWithGoogle} className="inline-block text-2xl bg-gray-800 text-white rounded p-3 px-4">Google</button>
              <button type="button" onClick={loginWithGithub} className="inline-block text-2xl bg-gray-800 text-white rounded p-3 px-4">GitHub</button>
            </IsNotAuthorized>
            <IsAuthorized>
              <>
                Authorized data:
                <pre>{JSON.stringify(auth, null, 2)}</pre>
                <button type="button" onClick={logout} className="inline-block text-2xl bg-gray-800 text-white rounded p-3 px-4">Logout</button>
              </>
            </IsAuthorized>
          </>
        )}
      </div>
    </Layout>
  );
};

Room.getInitialProps = async ({ reactReduxFirebase, query }) => {
  await reactReduxFirebase
    .promiseEvents([
      { path: `/rooms/${query.uid}` },
      { path: 'users' },
    ]);
};

export default withReactReduxFirebase(Room);
