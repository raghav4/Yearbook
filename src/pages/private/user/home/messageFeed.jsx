import React from 'react';
import propTypes from 'prop-types';

const MessageFeed = ({ messageBody, sentBy, sentTo }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-6">
          <div
            className="card ml-2 mr-2 mb-3"
            // style={{ backgroundColor: '#EBECF0' }}
          >
            <div className="text-left mt-2 ml-3">
              {sentBy} ► {sentTo}
            </div>
            <div className="card-body text-left">{messageBody}</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MessageFeed;
