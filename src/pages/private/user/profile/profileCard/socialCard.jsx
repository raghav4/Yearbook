import React, { useState, useEffect } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import SocialHandle from '../../../../../components/utils/socialHandle';
import http from '../../../../../services/httpService';
import { apiUrl } from '../../../../../config.json';
import { TimerAlert } from '../../../../../components';

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

  const {
    contactEmail,
    contactNo,
    whatsappNo,
    instagram,
    linkedin,
    facebook,
    snapchat,
  } = socialHandles;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await http.get(`${apiUrl}/api/user/self`);
        setName(data.credentials.name);
        setInfo({
          bio: data.info.bio,
          profilePicture: data.info.profilePicture,
        });
        setSocialHandles({
          contactEmail: data.socialHandles.contactEmail,
          contactNo: data.socialHandles.contactNo,
          instagram: data.socialHandles.instagram,
          whatsappNo: data.socialHandles.whatsappNo,
          facebook: data.socialHandles.facebook,
          linkedin: data.socialHandles.linkedin,
          snapchat: data.socialHandles.snapchat,
        });
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          TimerAlert('Error', ex.response.data, 'error');
        }
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
        <Tooltip
          title="You can update the picture from update details section"
          placement="top"
        >
          <img
            className="card-img-top hoverable"
            src={info.profilePicture}
            alt="ProfilePicture"
            style={{ borderRadius: '5%' }}
          />
        </Tooltip>

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
            <Tooltip title="You can add more details from update details section">
              <div className="row">
                {contactEmail && (
                  <SocialHandle
                    platform={contactEmail}
                    iconClass="fas fa-lg fa-envelope"
                  />
                )}
                {contactNo && (
                  <SocialHandle
                    platform={contactNo}
                    iconClass="fas fa-lg fa-phone-square-alt"
                  />
                )}
                {whatsappNo && (
                  <SocialHandle
                    platform={whatsappNo}
                    iconClass="fab fa-lg fa-whatsapp"
                  />
                )}
                {linkedin && (
                  <SocialHandle
                    platform={linkedin}
                    iconClass="fab fa-lg fa-linkedin"
                  />
                )}
                {facebook && (
                  <SocialHandle
                    platform={facebook}
                    iconClass="fab fa-lg fa-facebook"
                  />
                )}
                {instagram && (
                  <SocialHandle
                    platform={instagram}
                    iconClass="fab fa-instagram fa-lg"
                  />
                )}
                {snapchat && (
                  <SocialHandle
                    platform={snapchat}
                    iconClass="fab fa-snapchat fa-lg"
                  />
                )}
              </div>
            </Tooltip>
          </div>
        </div>
      </div>
    </>
  );
};

export default PersonalCard;
