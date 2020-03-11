import React from 'react';
import PropTypes from 'prop-types';
import { useSelector } from 'react-redux';

const User = ({ userUid }) => {
  const user = useSelector((state) => state.firebase.data.users
    && state.firebase.data.users[userUid]);
  const { displayName, email, avatarUrl } = user;

  return (
    <div className="flex items-center">
      <div>
        <img className="rounded-full mr-3" width={64} height={64} src={avatarUrl} alt={`${displayName || email}`} />
      </div>
      <div>
        <span className="block text-xl leading-none">{displayName || email}</span>
        {displayName && (
          <span className="block text-gray-700">{email}</span>
        )}
      </div>
    </div>
  );
};

User.propTypes = {
  userUid: PropTypes.string.isRequired,
};

export default User;
