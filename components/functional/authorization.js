import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty } from 'react-redux-firebase';

export const IsNotAuthorized = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);

  if (!isEmpty(auth)) {
    return null;
  }

  return children;
};

IsNotAuthorized.propTypes = {
  children: PropTypes.element,
};

IsNotAuthorized.defaultProps = {
  children: null,
};

export const IsAuthorized = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);

  if (isEmpty(auth)) {
    return null;
  }

  return children;
};

IsAuthorized.propTypes = {
  children: PropTypes.element,
};

IsAuthorized.defaultProps = {
  children: null,
};
