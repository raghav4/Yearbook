/* eslint-disable no-console */
import React, { useState, useEffect } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import { makeStyles } from '@material-ui/core/styles';
import CardMedia from '@material-ui/core/CardMedia';
import propTypes from 'prop-types';
import urlPropType from 'url-prop-type';
import ModalBox from './modal';

const useStyles = makeStyles(() => ({
  media: {
    height: 0,
    paddingTop: '80%', // 16:9
  },
}));

const UserCard = ({ person, personName, personBio, personImageUrl }) => {
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    const fetchUserDetails = async () => {
      // const { data } = await axios.put('http://localhost:5000/api/user/self', userObject);
    };
    fetchUserDetails();
  }, []);

  const triggerModal = () => {
    setModalOpen(!modalOpen);
  };

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
    classes += badgeClass[person.deptSection.section.charCodeAt(0) - 65];
    return classes;
  };
  const classes = useStyles();
  return (
    <>
      <div className="card mb-4 card-body" style={{ borderRadius: '3%' }}>
        <h4 className="card-title text-center">
          {personName || <Skeleton variant="text" animation="wave" />}
        </h4>
        <div className="view overlay mb-3">
          {(personImageUrl && (
            <CardMedia
              className={classes.media}
              image={personImageUrl}
              title="Paella dish"
            />
          )) || <Skeleton variant="rect" width={360} height={150} />}
        </div>
        <div className="text-center">
          <span className={getBadgeClass()}>
            {person.deptSection.department} - {person.deptSection.section}
          </span>
        </div>
        <p className="card-text text-center">
          {personBio || (
            <Skeleton animation="wave" height={22} style={{ marginBottom: 6 }} />
          )}
        </p>
        <button
          type="button"
          className="btn btn-deep-purple"
          onClick={() => triggerModal()}
        >
          <i className="fas fa-plus-circle mr-2" />
          Write
        </button>
        <ModalBox
          // handleSubmit={handleSubmit}
          triggerModal={triggerModal} // Reverse the State of the Modal
          toggleOpen={modalOpen} // Opens the modal
          // modalValue={modalValue} // The value of the modal text area
          personName={personName} // Name of the person for whom the modal is opened
          personId={person._id} // Person object
        />
      </div>
    </>
  );
};

UserCard.propTypes = {
  personName: propTypes.string.isRequired,
  personBio: propTypes.string.isRequired,
  personImageUrl: urlPropType.isRequired,
  person: propTypes.objectOf(propTypes.any).isRequired,
};

export default UserCard;
