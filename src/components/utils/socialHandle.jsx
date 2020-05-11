import React from 'react';
import propTypes from 'prop-types';

const SocialHandle = ({ platform, iconClass, square }) => {
  const getClasses = () => {
    return square ? `fab fa-lg fa-${iconClass}-square` : `fab fa-lg fa-${iconClass}`;
  };
  return (
    <div className="row">
      <div className="col ml-5">
        <i className={iconClass} />
      </div>
      <div className="col pl-1">{platform}</div>
    </div>
  );
};

SocialHandle.defaultProps = {
  square: false,
};

SocialHandle.propTypes = {
  platform: propTypes.string.isRequired,
  iconClass: propTypes.string.isRequired,
  square: propTypes.bool,
};

export default SocialHandle;
