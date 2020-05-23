import React, { useState } from 'react';
import Swal from 'sweetalert2';
import Joi from 'joi-browser';
import http from '../../../services/httpService';
import { apiUrl } from '../../../config.json';
import { NumberAccess } from '../../../utils/schemas';

const GrantUserAccess = () => {
  const [Registeration, setRegisteration] = useState(false);

  const registerUser = async (phoneNumber) => {
    try {
      const { data } = await http.post(`${apiUrl}/api/admin/user/grant`, {
        phoneNumber,
      });
      Swal.fire('Done', 'Successfully granted access to the number', 'success');
      setRegisteration(true);
    } catch (ex) {
      if (ex.response && ex.response.status === 403) {
        Swal.fire('Error', ex.response.data, 'error');
        setRegisteration(false);
      }
    }
  };

  const getInput = () => {
    Swal.fire({
      title: 'Enter the user number',
      input: 'text',
      showCancelButton: true,
      confirmButtonText: 'Register',
      showLoaderOnConfirm: true,
      inputValidator: (value) => {
        const { error } = Joi.validate({ phoneNumber: value }, NumberAccess());
        if (error) {
          return `${error.details[0].message}`;
        }
        Swal.close();
        return registerUser(value);
      },
    });
  };

  return <>{getInput()}</>;
};

export default GrantUserAccess;
