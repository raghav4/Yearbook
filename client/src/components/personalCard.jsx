import React, { Component } from 'react';
class PersonalCard extends Component {
  state = {};
  render() {
    return (
      <React.Fragment>
        <div className="row-md-1">
          <div className="col-sm-3 float-right">
            <div className="card card-cascade mt-5 mb-5">
              <div className="view view-cascade overlay">
                <img
                  className="card-img-top"
                  src="https://mdbootstrap.com/img/Photos/Others/men.jpg"
                  alt="Card image cap"
                />
                <a>
                  <div className="mask rgba-white-slight"></div>
                </a>
              </div>
              <div className="card-body card-body-cascade text-center">
                <h4 className="card-title">
                  <strong>Raghav Sharma</strong>
                </h4>
                {/* <h6 className="font-weight-bold indigo-text py-2">
                  Web developer
                </h6> */}
                <span class="badge badge-pill badge-dark">CSE - B</span>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Voluptatibus, ex, recusandae. Facere modi sunt, quod
                  quibusdam.
                </p>
                <a
                  type="button "
                  className="button btn-peach-gradient btn-small btn-fb"
                >
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a type="button" className="btn-floating btn-small btn-tw">
                  <i className="fab fa-twitter"></i>
                </a>
                <a
                  type="button"
                  className="btn-floating btn-small btn-dribbble"
                >
                  <i className="fab fa-dribbble"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default PersonalCard;
