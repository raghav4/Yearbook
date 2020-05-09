import Swal from 'sweetalert2';

const RequestStatus = (title, text, icon = 'success') => {
  Swal.fire({
    icon,
    title,
    text,
  });
};

export default RequestStatus;
