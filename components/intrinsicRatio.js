import React from 'react';
import PropTypes from 'prop-types';
import cn from 'classnames';

const IntrinsicRatio = ({
  ratio, children, className, ...props
}) => (
  <div style={{ paddingBottom: `${ratio * 100}%` }} className={cn('relative h-0', className)} {...props}>
    <div className="absolute top-0 left-0 w-full h-full">
      {children}
    </div>
  </div>
);

IntrinsicRatio.propTypes = {
  ratio: PropTypes.number,
  children: PropTypes.element,
  className: PropTypes.string,
};

IntrinsicRatio.defaultProps = {
  ratio: 3 / 4,
  children: null,
  className: null,
};

export default IntrinsicRatio;
