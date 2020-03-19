import React from 'react';
import Question from '../components/common/question';

const Box = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          {/* <div className="jumbotron"> */}
          {/* <h2 className="h1-responsive">Hello, world!</h2> */}
          <h3 className="h3-responsive text-left">
            {' '}
            <i class="fas fa-pen-square" /> &nbsp;Answers about yourself
          </h3>
          <hr className="my-2" />
          <Question />
          <br />
          <Question />
          <br />
          <h3 className="h3-responsive text-left">
            <i class="fa fa-list-alt" />
            &nbsp; What Others have written for you
          </h3>
          <hr className="my-1" />
          <Question />
          <br />
          <Question />
        </div>
        {/* </div> */}
      </div>
    </React.Fragment>
  );
};

export default Box;
