import React, { useState } from 'react';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import Visibility from '@material-ui/icons/Visibility';
import VisibilityOff from '@material-ui/icons/VisibilityOff';
import { Input, Emoji, TimerAlert } from '../../../../components';
import { apiUrl } from '../../../../config.json';
import { http } from '../../../../services';

const ResetPassword = () => {
  const [currentPassword, setCurrentPassword] = useState('');
  const [confirmNewPassword, setconfirmNewPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [Loading, setLoading] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState('');
  const [serverError, setServerErrors] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState('password');

  const disabledButton = () => {
    return newPassword !== confirmNewPassword;
  };

  const handlePasswordChange = ({ currentTarget: input }) => {
    setCurrentPassword(input.value);
  };

  // const handleNewPwsdChange = ({ currentTarget: input }) => {
  //   setnewPassword(input.value);
  // };

  // const handleConfirmNewPswdChange = ({ currentTarget: input }) => {
  //   if (input.value !== newPassword) {
  //     setPasswordErrors('New Password do not matches');
  //   } else {
  //     setPasswordErrors('');
  //   }
  //   setconfirmNewPassword(input.value);
  // };

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      // const { data } = await http.post(`${apiUrl}/api/user/self/reset`, {
      //   password,
      //   newPassword,
      // });
      // setServerErrors('');
      // setCurrentPassword('');
      // setconfirmNewPassword('');
      // setnewPassword('');
      // TimerAlert(' ', data, 'success');
    } catch (ex) {
      if (ex.response && ex.response.status === 401) {
        setServerErrors(ex.response.data);
      }
      if (ex.response && ex.response.status === 400) {
        TimerAlert(' ', ex.response.data, 'error', 3000);
      }
    }
    setLoading(false);
  };

  return (
    <>
      <p className="text-center mx-5 mt-5">
        If you haven't updated your temporary (initial) password yet, please update
        it.
      </p>
      <div className="d-flex justify-content-center mt-5">
        <div className="jumbotron col-md-3 mx-5 my-3" style={{ borderRadius: '5%' }}>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form
                  className="needs-validation"
                  onSubmit={submitHandler}
                  noValidate
                >
                  <p className="h5 text-center mb-4">
                    <Emoji label="🔑" symbol="🔑" /> Update your password
                  </p>
                  <div className="text-center custom-control custom-switch">
                    <input
                      type="checkbox"
                      className="custom-control-input"
                      id="customSwitches"
                      value={showPassword}
                      onClick={() => {
                        setShowPassword(!showPassword);
                        setInputType(showPassword ? 'password' : 'text');
                      }}
                    />
                    <label className="custom-control-label" htmlFor="customSwitches">
                      Show Password{' '}
                      {showPassword ? (
                        <img
                          src="https://tabler-icons.io/static/tabler-icons/icons-png/eye-off.png"
                          height="20"
                          width="20"
                        />
                      ) : (
                        <img
                          src="https://tabler-icons.io/static/tabler-icons/icons-png/eye.png"
                          height="20"
                          width="20"
                        />
                      )}
                    </label>
                  </div>
                  <Input
                    name="password"
                    label="Current Password"
                    value={currentPassword}
                    type={inputType}
                    handleChange={(e) => setCurrentPassword(e.target.value)}
                    error={serverError}
                    feedback={serverError}
                  />

                  <Input
                    name="newPassword"
                    label="New Password"
                    value={newPassword}
                    handleChange={(e) => setNewPassword(e.target.value)}
                    type={inputType}
                  />

                  {/* <Input
                    name="confirmNewPassword"
                    label="Confirm New Password"
                    value={confirmNewPassword}
                    handleChange={handleConfirmNewPswdChange}
                    error={passwordErrors}
                    feedback={passwordErrors}
                    type={inputType}
                  /> */}

                  {/* {passwordErrors && (
                    <Alert
                      severity="error"
                    >
                      {passwordErrors}
                    </Alert>
                  )} */}

                  <div className="text-center mt-4">
                    <MDBBtn
                      color="deep-purple"
                      type="submit"
                      disabled={disabledButton()}
                    >
                      {Loading ? (
                        <span
                          className="spinner-grow spinner-grow-sm"
                          role="status"
                          aria-hidden="true"
                        />
                      ) : (
                        'Reset'
                      )}
                    </MDBBtn>
                  </div>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default ResetPassword;
