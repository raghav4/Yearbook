import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Skeleton from '@material-ui/lab/Skeleton';

// Change to Statless functional component

class QuestionContent extends Component {
  state = {};

  render() {
    const { question, onDelete } = this.props;
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card bg-white ml-2 mr-2 mb-3">
              <div className="card-body text-left">
                {question.question || <Skeleton variant="text" animation="wave" />}
                <div className="float-right">
                  <button
                    type="button"
                    style={{
                      border: 'none',
                      background: 'none',
                      padding: '0',
                      outline: 'none',
                    }}
                    onClick={() => onDelete(question._id)}
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
  }
}

export default QuestionContent;