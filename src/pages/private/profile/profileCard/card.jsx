import React, { useState, useEffect } from 'react';
import { Phone, WhatsApp, MailOutline, Facebook, Instagram, LinkedIn } from '@material-ui/icons';
import cookies from 'react-cookies';
import axios from 'axios';

const PersonalCard = () => {
  const [Name, setName] = useState('');
  const [Bio, setBio] = useState('');
  // const [User, setUser] = useState({});
  const [SocialHandles, setSocialHandles] = useState({});
  const [profilePicture, setprofilePicture] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/user/info', {
          headers: { 'x-auth-token': cookies.load('x-auth-token') },
        });
        // setUser(data);
        setName(data.credentials.name);
        setBio(data.info.bio);
        setSocialHandles(data.socialHandles);
        setprofilePicture(data.info.profilePicture);
      } catch (ex) {
        console.log(ex.response);
      }
    };
    fetchUserData();
  }, []);

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
        <img
          className="card-img-top hoverable"
          src={profilePicture}
          alt="Card cap"
          style={{ borderRadius: '5%' }}
        />

        <div className="card-body">
          <h4 className="card-title text-center">
            <p>{Name}</p>
          </h4>
          <h6 className="h6-responsive text-center">
            <span className="badge badge-primary">CSE - B</span>
          </h6>
          <p className="card-text text-center">{Bio}</p>
          <hr />
          <p className="text-center">Contact Info</p>
          <div>
            <div className="row">
              <div className="row">
                <div className="col ml-5">
                  <MailOutline />
                </div>
                <div className="col pl-1" style={{ cursor: 'pointer' }}>
                  raghavsyt@gmail.com
                </div>
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
                <div className="col pl-1">{SocialHandles.instagram}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalCard;
