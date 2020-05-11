import Swal from 'sweetalert2';

const TimerAlert = (title, text = '', icon = 'success') => {
  Swal.fire({
    icon,
    title,
    text,
    showConfirmButton: false,
    timer: 2000,
    timerProgressBar: true,
  });
};

export default TimerAlert;
