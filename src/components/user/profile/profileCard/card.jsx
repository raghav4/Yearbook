import React, { Component } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import PhoneIcon from '@material-ui/icons/Phone';
import Fab from '@material-ui/core/Fab';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import MailOutlineIcon from '@material-ui/icons/MailOutline';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import Box from '../questions/self';

class PersonalCard extends Component {
  state = {};

  render() {
    return (
      <>
        <div className="card mb-4 mx-auto" style={{ width: '20rem' }}>
          {/* <LinearProgress variant="determinate" value="completed" /> */}
          {(
            <img
              className="card-img-top"
              src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
              alt="Card cap"
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
                  <MailOutlineIcon />
                </div>
                <div className="col pl-1">raghavsyt@gmail.com</div>
              </div>
              <div className="row">
                <div className="col ml-5">
                  <PhoneIcon />
                </div>
                <div className="col pl-1">+919898899909</div>
              </div>
              <div className="row">
                <div className="col ml-5">
                  <FacebookIcon />
                </div>
                <div className="col pl-1">raghav</div>
              </div>
              <div className="row">
                <div className="col ml-5">
                  <WhatsAppIcon />
                </div>
                <div className="col pl-1">+9898899909</div>
              </div>
              <div className="row">
                <div className="col ml-5">
                  <LinkedInIcon />
                </div>
                <div className="col pl-1">raghavsharma</div>
              </div>
              <div className="row">
                <div className="col ml-5">
                  <InstagramIcon />
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
