import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
class ListQuestions extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card bg-white ml-2 mr-2 mb-3">
              <div className="card-body text-left">
                You were the first person I met in the college, we have had a
                good time together. Sahi banda he tu, chill he, chidh jaldi
                jaata hai 😜
                <div className="float-right">
                  <a type="button">
                    <DeleteIcon />
                  </a>
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
