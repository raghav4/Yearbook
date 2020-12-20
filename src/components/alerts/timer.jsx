import Swal from 'sweetalert2';

const TimerAlert = (title, text = '', icon = 'success', timer = 2000) => {
  Swal.fire({
    icon,
    title,
    text,
    timer,
    toast: true,
    position: 'top',
    showConfirmButton: false,
    timerProgressBar: true,
  });
};

export default TimerAlert;
