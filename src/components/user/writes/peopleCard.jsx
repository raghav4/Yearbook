import React, { Component } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import ModalBox from './modal';
class PeopleCard extends Component {
  state = {
    modalOpen: false,
    modalHeader: '',
  };
  triggerModal = (id) => {
    console.log(id);
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  toggelModal = (nr) => {
    // fix this in toggle box
    // console.log(nr);
  };
  getBadgeClass() {
    let classes = 'badge badge-';
    // classes += this.props.person.section == 'A' ? 'primary' : 'warning';
    let badgeClass = ['primary', 'success', 'warning'];
    classes += badgeClass[this.props.person.section.charCodeAt(0) - 65];
    return classes;
  }
  render() {
    const { personName, personBio, personImageUrl, person } = this.props;
    return (
      <>
        <div className="card mb-4 card-body" style={{ borderRadius: '3%' }}>
          <h4 className="card-title text-center">
            {personName || <Skeleton variant="text" animation="wave" />}
          </h4>
          <div className="view overlay mb-3">
            {(personImageUrl && (
              <img
                className="card-img-top img-fluid z-depth-1"
                src={personImageUrl}
                alt="Card cap"
              />
            )) || <Skeleton variant="rect" width={360} height={150} />}
          </div>
          <div className="text-center">
            <span className={this.getBadgeClass()}>
              {person.department} - {person.section}
            </span>
          </div>
          <p className="card-text text-center">
            {personBio || (
              <>
                <Skeleton animation="wave" height={22} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={22} width="70%" />
              </>
            )}
          </p>
          <button
            type="button"
            className="btn btn-deep-purple"
            onClick={() => this.triggerModal(person._id)}
          >
            <i className="fas fa-plus-circle mr-2" />
            Write
          </button>
          <ModalBox
            toggleOpen={this.state.modalOpen}
            toggelModal={this.toggelModal}
            triggerModal={this.triggerModal}
            personName={personName}
            person={person}
          />
        </div>
      </>
    );
  }
}

export default PeopleCard;
