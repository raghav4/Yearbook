import React from 'react';
import propTypes from 'prop-types';
import DeleteIcon from '@material-ui/icons/Delete';
import Skeleton from '@material-ui/lab/Skeleton';

const Question = ({ question, id, onDelete }) => {
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-6">
          <div className="card bg-white ml-2 mr-2 mb-3">
            <div className="card-body text-left">
              {question || <Skeleton variant="text" animation="wave" />}
              <div className="float-right">
                <button
                  type="button"
                  style={{
                    border: 'none',
                    background: 'none',
                    padding: '0',
                    outline: 'none',
                  }}
                  onClick={() => onDelete(id)}
                >
                  <DeleteIcon />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Question.propTypes = {
  question: propTypes.string.isRequired,
  id: propTypes.string.isRequired,
  onDelete: propTypes.func.isRequired,
};

export default Question;
