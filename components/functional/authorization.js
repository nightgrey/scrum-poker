import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { isEmpty, isLoaded } from 'react-redux-firebase';

export const HasLoadedAuthorization = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);

  if (isLoaded(auth)) {
    return children;
  }

  return null;
};

HasLoadedAuthorization.propTypes = {
  children: PropTypes.element,
};

export const IsLoadingAuthorization = ({ children }) => {
  const auth = useSelector((state) => state.firebase.auth);

  if (!isLoaded(auth)) {
    return null;
  }

  return children;
};

IsLoadingAuthorization.propTypes = {
  children: PropTypes.element,
};

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
