import React, { Component } from 'react';
import Skeleton from '@material-ui/lab/Skeleton';
import ModalBox from '../modalBox';
class PeopleCard extends Component {
  state = {
    modalOpen: false,
    modalHeader: '',
  };
  triggerModal = (id) => {
    this.setState({ modalOpen: !this.state.modalOpen });
  };
  toggelModal = (nr) => {
    console.log(nr);
  };
  render() {
    return (
      <>
        <div className="card mb-4 card-body">
          <h4 className="card-title text-center">
            {this.props.personName || <Skeleton variant="text" animation="wave" />}
          </h4>
          <div className="view overlay mb-3">
            {/* <img
                className="rounded-circle col-md-6"
                alt="50x50"
                src="https://mdbootstrap.com/img/Photos/Avatars/img%20(30).jpg"
                data-holder-rendered="true"
              /> */}
            {(!this.props.personImageUrl && (
              <img
                className="card-img-top img-fluid z-depth-1"
                src={this.props.personImageUrl}
                alt="Card  cap"
              />
            )) || <Skeleton variant="rect" width={360} height={150} />}
          </div>
          {/* <span className="badge badge-primary">CSE B</span> */}
          <p className="card-text">
            {this.props.personBio || (
              <>
                <Skeleton animation="wave" height={22} style={{ marginBottom: 6 }} />
                <Skeleton animation="wave" height={22} width="70%" />
              </>
            )}
          </p>
          <button
            type="button"
            className="btn btn-deep-purple"
            onClick={() => this.triggerModal(this.props.person.id)}
          >
            <i className="fas fa-plus-circle mr-2" />
            Write
          </button>
          <ModalBox
            toggleOpen={this.state.modalOpen}
            toggelModal={this.toggelModal}
            triggerModal={this.triggerModal}
            personName={this.props.personName}
          />
        </div>
      </>
    );
  }
}

export default PeopleCard;
