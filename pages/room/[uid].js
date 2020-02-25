import React from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';
import Layout from '../../components/layout';
import withRedux from '../../lib/withRedux';
import firebase from '../../lib/firebase';


const Room = ({ rooms }) => {
  const router = useRouter();
  const { uid } = router.query;

  return (
    <Layout>
      <div className="container mx-auto">
        {!rooms ? (
          <span>
            No room with uid {uid} found.
          </span>
        ) : Object.keys(rooms).map((roomsKey) => (
          <div key={roomsKey}>
            {Object.keys(rooms[roomsKey]).map((roomsPropertyKey) => (
              <span>
                {roomsPropertyKey}: {rooms[roomsKey][roomsPropertyKey].toString()}
                <br />
              </span>
            ))}
          </div>
        ))}
      </div>
    </Layout>
  );
};

Room.propTypes = {
  rooms: PropTypes.objectOf(PropTypes.shape({
    uid: PropTypes.string,
    title: PropTypes.string,
  })),
};

Room.defaultProps = {
  rooms: null,
};

Room.getInitialProps = async function ({ query }) {
  const { uid } = query;

  const room = firebase.database().ref('/rooms');
  const snapshot = await room.orderByChild('uid').equalTo(uid).once('value');

  return {
    rooms: snapshot.val(),
  };
};

export default withRedux(Room);
