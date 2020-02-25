import React from 'react';
import PropTypes from 'prop-types';
import HeartIcon from '../images/icon-heart.svg';
import IntrinsicRatio from './intrinsicRatio';

const PokerCard = ({ value, className, ...props }) => (
  <IntrinsicRatio ratio={16 / 9} className={className} {...props}>
    <div className="h-40 bg-gray-800 text-white rounded-lg relative flex flex-col h-full justify-between">
      <div className="flex justify-start p-2">
        <div className="w-1/6 text-center">
          <span className="text-sm">{value}</span><br />
          <HeartIcon className="inline-block stroke-current text-primary w-full" />
        </div>
      </div>
      <span className="text-6xl text-center">{value}</span>
      <div className="flex justify-end p-2">
        <div className="w-1/6 text-center" style={{ transform: 'rotate(180deg)' }}>
          <span className="text-sm">{value}</span><br />
          <HeartIcon className="inline-block stroke-current text-primary w-full" />
        </div>
      </div>
    </div>
  </IntrinsicRatio>
);

PokerCard.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  className: PropTypes.string,
};

PokerCard.defaultProps = {
  className: null,
};

export default PokerCard;
