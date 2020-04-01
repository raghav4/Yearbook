import React from 'react';
import Skeleton from '@material-ui/lab/Skeleton';

const PeopleCard = ({ personName, personImageUrl, personBio }) => {
  return (
    <>
      <div className="card mb-4 card-body">
        <h4 className="card-title text-center">
          {personName || <Skeleton variant="text" animation="wave" />}
        </h4>
        <div className="view overlay mb-3">
          {/* <img
              className="rounded-circle col-md-6"
              alt="50x50"
              src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
              data-holder-rendered="true"
            /> */}
          {(personImageUrl && (
            <img
              className="card-img-top img-fluid z-depth-1"
              src={personImageUrl}
              alt="Card  cap"
            />
          )) || <Skeleton variant="rect" width={360} height={118} />}
        </div>
        <p className="card-text">
          {personBio || (
            <>
              <Skeleton
                animation="wave"
                height={22}
                style={{ marginBottom: 6 }}
              />
              <Skeleton animation="wave" height={22} width="70%" />
            </>
          )}
        </p>
      </div>
    </>
  );
};

export default PeopleCard;
