import React, { Component } from 'react';
class Question extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <div class="card bg-primary">
              <div class="card-body text-white">
                <b>What are your best memories in college</b>
                <br />
                This is some text within a panel body.
              </div>
            </div>
          </div>
        </div>
        <br />
        <div className="row">
          <div className="col">
            <div class="card">
              <div class="card-body">
                <b>What are your best memories in college</b>
                <br />
                This is some text within a panel body.
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Question;
