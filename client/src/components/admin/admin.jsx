import React, { Component } from 'react';
import { MDBBtn } from 'mdbreact';
import ListQuestions from './listQuestions';
class Admin extends Component {
  state = {};

  render() {
    return (
      <>
        <h3 className="h3-responsive text-center mt-4 mb-3">User Questions</h3>
        <div className=" d-flex justify-content-center">
          <div className="col-md-6">
            <div className="card ml-2 mr-2 mb-3">
              <div className="card-body">
                <div className="md-form">
                  <input
                    placeholder="Add a question"
                    type="text"
                    id="form1"
                    className="form-control"
                  />
                </div>
                <div className="float-left">
                  <MDBBtn className="float-right" gradient="green">
                    Add Question
                  </MDBBtn>
                </div>
              </div>
              {/* <label for="form1">Example label</label> */}
            </div>
          </div>
        </div>
        <ListQuestions />
        <ListQuestions />
        <ListQuestions />
      </>
    );
  }
}

export default Admin;