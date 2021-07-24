import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ListQuestions = ({ messages, handleDelete }) => {
  // TODO; Suspense Fallback
  return (
    <div>
      {messages && messages.length > 0 ? (
        messages.map((datum) => (
          <div className="my-5 d-flex justify-content-center" key={datum._id}>
            <div className="col-md-6">
              <div className="card ml-2 mr-2 mb-3">
                <div className="card-body">
                  <div className="md-form">{datum.content}</div>
                  <div
                    className="float-left"
                    style={{ fontStyle: 'italic', color: '#535c68' }}
                  >
                    -{datum.sender}
                  </div>
                  <div className="float-right">
                    <button
                      className="btn btn-sm btn-danger"
                      type="button"
                      onClick={() => handleDelete(datum._id)}
                    >
                      Delete Message
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div>
          <h3 className="text-center my-5 mx-5">
            Looks like there are no messages yet!
          </h3>
          <p className="text-center">
            <Link to="/">Return to Home</Link>
          </p>
        </div>
      )}
    </div>
  );
};

ListQuestions.propTypes = {
  message: PropTypes.string.isRequired,
  sender: PropTypes.string.isRequired,
  handleDelete: PropTypes.func.isRequired,
};

export default ListQuestions;
