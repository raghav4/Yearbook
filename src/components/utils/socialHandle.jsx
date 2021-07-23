import React from 'react';
import propTypes from 'prop-types';

const SocialHandle = ({ platform, iconClass }) => {
  return (
    <div className="row">
      <div className="col mx-5">
        <i className={iconClass} />
      </div>
      <div className="col pl-1">{platform}</div>
      <br />
    </div>
  );
};

SocialHandle.propTypes = {
  platform: propTypes.string.isRequired,
  iconClass: propTypes.string.isRequired,
};

export default SocialHandle;
