import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import Skeleton from '@material-ui/lab/Skeleton';

// import EditIcon from '@material-ui/icons/Edit';
class ListQuestions extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card bg-white ml-2 mr-2 mb-3">
              <div className="card-body text-left">
                {this.props.question.questionData || (
                  <Skeleton variant="text" animation="wave" />
                )}
                {/* <Skeleton variant="text" animation="wave" />
                <Skeleton variant="text" animation="wave" /> */}
                <div className="float-right">
                  <button
                    style={{
                      border: 'none',
                      background: 'none',
                      padding: '0',
                      outline: 'none',
                    }}
                    onClick={() => this.props.onDelete(this.props.question.id)}
                  >
                    <DeleteIcon />
                  </button>
                </div>
              </div>
            </div>
            {/* <MDBBtn className="float-right" gradient="purple">
                Add Question
              </MDBBtn> */}
          </div>
        </div>
      </>
    );
  }
}

export default ListQuestions;
