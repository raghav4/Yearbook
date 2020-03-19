import React from 'react';
import Question from '../components/common/question';

const Box = () => {
  return (
    <React.Fragment>
      <div className="row">
        <div className="col">
          <div className="jumbotron">
            {/* <h2 className="h1-responsive">Hello, world!</h2> */}
            <h3 className="h3-responsive">
              {' '}
              <i class="fas fa-pen-square" /> &nbsp;Answers about yourself
            </h3>
            <hr className="my-2" />
            <Question />
            <br />
            <Question />
            <h3 className="h3-responsive">
              <i class="fa fa-list-alt" />
              &nbsp; What Others have written for you
            </h3>
            <hr className="my-1" />
            <Question />
            <br />
            <Question />
            {/* <p className="lead">
              This is a simple hero unit, a simple jumbotron-style component for
              calling extra attention to featured content or information.
            </p>

            <p>
              It uses utility class for typography and spacing to space content
              out within the larger container.
            </p>
            <a className="btn btn-primary btn-lg" role="button">
              Learn more
            </a> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Box;
