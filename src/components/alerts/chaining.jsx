import Swal from 'sweetalert2';

const ChainInput = (title, html, error) => {
  Swal.mixin({
    input: 'text',
    inputValidator: (value) => {
      if (!value) {
        return error;
      }
    },
    confirmButtonText: 'Next &rarr;',
    showCancelButton: true,
    showCloseButton: true,
    onClose: () => {},
    // progressSteps: ['1'],
  }).queue([
    {
      title,
      html,
    },
  ]);
};

export default ChainInput;
