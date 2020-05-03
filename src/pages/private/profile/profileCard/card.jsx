import React, { Component } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { Phone, WhatsApp, MailOutline, Facebook, Instagram, LinkedIn } from '@material-ui/icons';

class PersonalCard extends Component {
  state = {};

  render() {
    return (
      <>
        <div
          className="card mb-4 mx-auto"
          style={{
            borderTopLeftRadius: '3%',
            borderTopRightRadius: '3%',
            width: '20rem',
          }}
        >
          {(
            <img
              className="card-img-top hoverable"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              alt="Card cap"
              style={{ borderRadius: '5%' }}
            />
          ) || <Skeleton variant="rect" width={320} height={220} animation="wave" />}

          <div className="card-body">
            <h4 className="card-title text-center">
              <p>{'John Doe' || <Skeleton variant="text" animation="wave" width={200} />}</p>
            </h4>
            <h6 className="h6-responsive text-center">
              <span className="badge badge-primary">CSE - B</span>
            </h6>
            <p className="card-text">
              Some quick example text to build on the card title and make up the bulk of the card's
              content.
            </p>
            <hr />
            <p className="text-center">Contact Info</p>
            <div className="row">
              <div className="row">
                <div className="col ml-5">
                  <MailOutline />
                </div>
                <div className="col pl-1">raghavsyt@gmail.com</div>
              </div>
              <div className="row">
                <div className="col ml-5">
                  <Phone />
                </div>
                <div className="col pl-1">+919898899909</div>
              </div>
              <div className="row">
                <div className="col ml-5">
                  <Facebook />
                </div>
                <div className="col pl-1">raghav</div>
              </div>
              <div className="row">
                <div className="col ml-5">
                  <WhatsApp />
                </div>
                <div className="col pl-1">+9898899909</div>
              </div>
              <div className="row">
                <div className="col ml-5">
                  <LinkedIn />
                </div>
                <div className="col pl-1">raghavsharma</div>
              </div>
              <div className="row">
                <div className="col ml-5">
                  <Instagram />
                </div>
                <div className="col pl-1">raghav</div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default PersonalCard;
