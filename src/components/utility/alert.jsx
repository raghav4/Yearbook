import React, { Component } from 'react';
import Swal from 'sweetalert2';

export default class AlertPopUp extends Component {
  constructor() {
    super();
    // this.HandleClick = this.HandleClick.bind(this);
  }

  HandleClick() {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 1500,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer);
        toast.addEventListener('mouseleave', Swal.resumeTimer);
      },
    });

    Toast.fire({
      icon: 'success',
      title: 'Some Message',
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn-success" onClick={() => this.HandleClick()}>
          Show Success Alert
        </button>
      </div>
    );
  }
}
