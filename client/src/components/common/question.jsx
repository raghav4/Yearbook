import React, { Component } from 'react';
class Question extends Component {
  state = {};
  render() {
    return (
      <>
        <div className="row">
          <div className="col">
            <div className="card bg-primary">
              <div className="card-body text-left text-white mb-2">
                <b>What are your best memories in college</b>
                <br />
                This is some text within a panel body.
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-body text-left">
                <b>What are your best memories in college?</b>
                <br />
                This is some text within a panel body.
              </div>
            </div>
          </div>
        </div> */}
      </>
    );
  }
}

export default Question;
