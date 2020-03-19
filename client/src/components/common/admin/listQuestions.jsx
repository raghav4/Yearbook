import React, { Component } from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
class ListQuestions extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row d-flex justify-content-center">
          <div className="col-md-6">
            <div class="card bg-white mb-3">
              <div class="card-body text-left">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero
                magnam tempore odit? Ex quos nobis accusamus vero natus.
                Laboriosam eaque molestiae facilis ipsum a obcaecati neque.
                Ipsam quos soluta sequi!
                <div className="float-right">
                  <a type="button" className="mr-2">
                    <EditIcon />
                  </a>
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
