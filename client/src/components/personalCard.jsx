import React, { Component } from 'react';
import PhoneIcon from '@material-ui/icons/Phone';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
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
                {/* <div class="card">
                  <div class="card-body bg-info text-white"> */}
                <a type="button" className="button float-center">
                  {' '}
                  <PhoneIcon />
                  +912372947497
                </a>
                <br />
                <a type="button" className="button">
                  {' '}
                  <WhatsAppIcon />
                  +919999817289
                </a>
                <br />
                <a type="button" className="button float-center">
                  {' '}
                  <MailOutlineIcon />
                  raghavsyt@gmail.com
                </a>
                <br />
                <a type="button" className="button float-center">
                  {' '}
                  <FacebookIcon />
                  raghavsyt@gmail.com
                </a>
              </div>
            </div>
          </div>
          {/* </div>
          </div> */}
        </div>
      </React.Fragment>
    );
  }
}

export default PersonalCard;
