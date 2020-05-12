import Swal from 'sweetalert2';

const TimerAlert = (title, text = '', icon = 'success') => {
  Swal.fire({
    icon,
    title,
    text,
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

export default TimerAlert;
