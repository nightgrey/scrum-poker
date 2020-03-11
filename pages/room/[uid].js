import React, { useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  useFirebase, useFirebaseConnect, isLoaded, isEmpty,
} from 'react-redux-firebase';
import { useSelector } from 'react-redux';
import { isArray } from 'lodash';
import Layout from '../../components/layout';
import { IsAuthorized, IsNotAuthorized, HasLoadedAuthorization } from '../../components/functional/authorization';
import withReactReduxFirebase from '../../lib/withReactReduxFirebase';
import User from '../../components/user';

const Room = () => {
  const router = useRouter();
  const { uid } = router.query;

  const room = useSelector((state) => state.firebase.data.rooms && state.firebase.data.rooms[uid]);
  const auth = useSelector((state) => state.firebase.auth);
  const presence = useSelector((state) => state.firebase.data.presence
    && Object.keys(state.firebase.data.presence));

  const firebase = useFirebase();
  useFirebaseConnect({ path: `/rooms/${uid}` });
  useFirebaseConnect({ path: '/presence' });


  const loginWithGoogle = () => firebase.login({ provider: 'google', type: 'popup' });
  const loginWithGithub = () => firebase.login({ provider: 'github', type: 'popup' });
  const logout = () => firebase.logout();

  useEffect(() => {
    // Update `room.users`
    if (isLoaded(auth) && !isEmpty(auth)) {
      const currentUsers = room.users;

      // Compare logged in users with presence and remove them if necessary
      // @TODO: Move to BE?
      if (presence) {
        firebase.set(`/rooms/${uid}/users`, currentUsers.filter((userUid) => presence.includes(userUid)));
      }

      if (!isArray(currentUsers)) {
        firebase.set(`/rooms/${uid}/users`, [auth.uid]);
      }

      if (isArray(currentUsers) && !currentUsers.includes(auth.uid)) {
        firebase.set(`/rooms/${uid}/users`, [...currentUsers, auth.uid]);
      }
    }
  });

  return (
    <Layout>
      <div className="container mx-auto">
        {!room ? (
          <span>No room with uid {uid} found.</span>
        ) : (
          <>
            <h2 className="text-5xl">{room.title}</h2>
            <HasLoadedAuthorization>
              <IsNotAuthorized>
                <button type="button" onClick={loginWithGoogle} className="inline-block text-2xl bg-gray-800 text-white rounded p-3 px-4">Google</button>
                <button type="button" onClick={loginWithGithub} className="inline-block text-2xl bg-gray-800 text-white rounded p-3 px-4">GitHub</button>
              </IsNotAuthorized>
              <IsAuthorized>
                <>
                  Logged in users:
                  {room.users.map((userUid) => (
                    <User key={userUid} userUid={userUid} />
                  ))}
                  <button type="button" onClick={logout} className="inline-block text-2xl bg-gray-800 text-white rounded p-3 px-4">Logout</button>
                </>
              </IsAuthorized>
            </HasLoadedAuthorization>
          </>
        )}
      </div>
    </Layout>
  );
};

Room.getInitialProps = async ({ reactReduxFirebase, query }) => {
  await reactReduxFirebase
    .promiseEvents([
      { path: `rooms/${query.uid}` },
      { path: 'users' },
      { path: 'presence' },
    ]);
};

export default withReactReduxFirebase(Room);
