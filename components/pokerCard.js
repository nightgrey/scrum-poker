import React from 'react';
import PropTypes from 'prop-types';
import HeartIcon from '../images/icon-heart.svg';
import IntrinsicRatio from './intrinsicRatio';

const PokerCard = ({
  value, size, className, ...props
}) => (
  <div className={className} style={{ fontSize: `${size}em` }}>
    <div style={{ maxWidth: '12em' }}>
      <IntrinsicRatio ratio={16 / 9} {...props}>
        <div className="h-40 bg-gray-800 text-white rounded-lg relative flex flex-col h-full justify-between">
          <div className="flex justify-start" style={{ padding: '.75em 1em' }}>
            <div className="text-center">
              <span className="leading-none" style={{ fontSize: '1em' }}>{value}</span>
              <br />
              <HeartIcon style={{ width: '2em' }} className="inline-block stroke-current text-primary w-full" />
            </div>
          </div>
          <span style={{ fontSize: '3.5em' }} className="text-center">{value}</span>
          <div className="flex justify-end" style={{ padding: '.75em 1em' }}>
            <div className="text-center" style={{ transform: 'rotate(180deg)' }}>
              <span className="leading-none" style={{ fontSize: '1em' }}>{value}</span>
              <br />
              <HeartIcon style={{ width: '2em' }} className="inline-block stroke-current text-primary w-full" />
            </div>
          </div>
        </div>
      </IntrinsicRatio>
    </div>
  </div>
);

PokerCard.propTypes = {
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
  size: PropTypes.number,
  className: PropTypes.string,
};

PokerCard.defaultProps = {
  className: null,
  size: 1,
};

export default PokerCard;
