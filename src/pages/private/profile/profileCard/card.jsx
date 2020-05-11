import React, { useState, useEffect } from 'react';
import cookies from 'react-cookies';
import axios from 'axios';
import SocialHandle from '../../../../components/utils/socialHandle';

const PersonalCard = () => {
  const [Name, setName] = useState('');
  const [info, setInfo] = useState({ bio: '', profilePicture: '' });
  const [socialHandles, setSocialHandles] = useState({
    contactEmail: '',
    contactNo: '',
    instagram: '',
    whatsappNo: '',
    facebook: '',
    linkedin: '',
    snapchat: '',
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/user/info', {
          headers: { 'x-auth-token': cookies.load('x-auth-token') },
        });
        setName(data.credentials.name);
        setInfo({ ...info, bio: data.info.bio, profilePicture: data.info.profilePicture });
        setSocialHandles({
          ...socialHandles,
          contactEmail: data.socialHandles.contactEmail,
          contactNo: data.socialHandles.contactNo,
          instagram: data.socialHandles.instagram,
          whatsappNo: data.socialHandles.whatsappNo,
          facebook: data.socialHandles.facebook,
          linkedin: data.socialHandles.linkedin,
          snapchat: data.socialHandles.snapchat,
        });
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
          src={info.profilePicture}
          alt="ProfilePicture"
          style={{ borderRadius: '5%' }}
        />

        <div className="card-body">
          <h4 className="card-title text-center">
            <p>{Name}</p>
          </h4>
          <h6 className="h6-responsive text-center">
            <span className="badge badge-primary">CSE - B</span>
          </h6>
          <p className="card-text text-center">{info.bio}</p>
          <hr />
          <p className="text-center">Contact Info</p>
          <div>
            <div className="row">
              <SocialHandle
                platform={socialHandles.contactEmail}
                iconClass="fas fa-lg fa-envelope"
              />
              <SocialHandle
                platform={socialHandles.contactNo}
                iconClass="fas fa-lg fa-phone-square-alt"
              />
              <SocialHandle
                platform={socialHandles.whatsappNo}
                iconClass="fab fa-lg fa-whatsapp-square"
              />
              <SocialHandle platform={socialHandles.linkedin} iconClass="fab fa-lg fa-linkedin" />
              <SocialHandle
                platform={socialHandles.facebook}
                iconClass="fab fa-lg fa-facebook-square"
              />
              <SocialHandle platform={socialHandles.instagram} iconClass="fab fa-instagram fa-lg" />
              <SocialHandle platform={socialHandles.snapchat} iconClass="fab fa-snapchat fa-lg" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalCard;
