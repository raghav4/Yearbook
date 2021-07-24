import Swal from 'sweetalert2';

const Confirm = (title, cb, text = `You won't be able to revert this`, icon = 'warning', confirmBtnText = 'Save') => {
    Swal.fire({
        title,
        text,
        icon,
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: confirmBtnText,
      }).then((result) => {
        if (result.isConfirmed) {
          cb(true);
        }
    })
}

export default Confirm;
