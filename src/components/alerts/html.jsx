import Swal from 'sweetalert2';

const HTMLAlert = (title, html, timer = 4500, icon = 'success') => {
  Swal.fire({
    icon,
    title,
    html,
    showCloseButton: true,
    showCancelButton: true,
    showConfirmButton: false,
    timer,
  });
};

export default HTMLAlert;
