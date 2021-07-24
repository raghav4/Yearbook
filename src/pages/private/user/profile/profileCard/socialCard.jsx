import React, { useState, useEffect } from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import SocialHandle from '../../../../../components/utils/socialHandle';
import http from '../../../../../services/httpService';
import { apiUrl, endPoints } from '../../../../../config.json';
import { TimerAlert } from '../../../../../components';

const PersonalCard = () => {
  const [Name, setName] = useState('');
  const [info, setInfo] = useState({ bio: '', profilePicture: 'https://i.imgur.com/rHE3Y91.png' });
  const [department, setDepartment] = useState('');
  const [section, setSection] = useState('');
  const [socialHandles, setSocialHandles] = useState({
    email: '',
    phone: '',
    instagram: '',
    facebook: '',
    linkedin: '',
    snapchat: '',
  });

  const {
    email,
    phone,
    instagram,
    linkedin,
    facebook,
    snapchat,
  } = socialHandles;

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const { data } = await http.get(`${apiUrl}/${endPoints.user.loggedInUser}`);
        setName(data.name);
        setInfo({
          bio: data.bio,
          profilePicture: data.profilePicture,
        });
        setSocialHandles({
          email: data.socialHandles.email,
          phone: data.socialHandles.phone,
          instagram: data.socialHandles.instagram,
          facebook: data.socialHandles.facebook,
          linkedin: data.socialHandles.linkedin,
          snapchat: data.socialHandles.snapchat,
        });
        setDepartment(data.department);
        setSection(data.section);
      } catch (ex) {
        if (ex.response && ex.response.status === 400) {
          TimerAlert('Error', ex.response.data, 'error');
        }
      }
    };
    fetchUserData();
  }, []);

  const getBadgeClass = () => {
    let classes = 'badge badge-';
    const badgeClass = [
      'primary',
      'success',
      'danger',
      'default',
      'info',
      'secondary',
      'dark',
    ];
    classes += badgeClass[section.charCodeAt(0) - 65];
    return classes;
  };

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
            className="card-img-top img-fluid hoverable animated fadeIn slow"
            src={info.profilePicture}
            alt="Profile Picture"
            style={{ borderRadius: '5%' }}
          />
        </Tooltip>

        <div className="card-body">
          <h4 className="card-title text-center">
            <p>{Name}</p>
          </h4>
          <h6 className="h6-responsive text-center">
            <span className={getBadgeClass()}>
              {department} - {section}
            </span>
          </h6>
          <p className="card-text text-center">{info.bio}</p>
          <hr />
          <p className="text-center">Contact Info</p>
          <div>
            <Tooltip title="You can add more details from update details section">
              <div className="row">
                {email && (
                  <SocialHandle
                    platform={email}
                    iconClass="fas fa-lg fa-envelope"
                  />
                )}
                {phone && (
                  <SocialHandle
                    platform={phone}
                    iconClass="fas fa-lg fa-phone-square-alt"
                  />
                )}
                {/* {whatsappNo && (
                  <SocialHandle
                    platform={whatsappNo}
                    iconClass="fab fa-lg fa-whatsapp"
                  />
                )} */}
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
