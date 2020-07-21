import React, { useState } from 'react';
import { Alert } from '@material-ui/lab';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Input, Emoji, TimerAlert } from '../../../../components';
import { apiUrl } from '../../../../config.json';
import { http } from '../../../../services';

const ResetPassword = () => {
  const [password, setPassword] = useState('');
  const [confirmNewPassword, setconfirmNewPassword] = useState('');
  const [newPassword, setnewPassword] = useState('');
  const [Loading, setLoading] = useState(false);
  const [passwordErrors, setPasswordErrors] = useState('');
  const [serverError, setServerErrors] = useState('');

  const disabledButton = () => {
    return newPassword !== confirmNewPassword;
  };

  const handlePasswordChange = ({ currentTarget: input }) => {
    setPassword(input.value);
  };

  const handleNewPwsdChange = ({ currentTarget: input }) => {
    setnewPassword(input.value);
  };

  const handleConfirmNewPswdChange = ({ currentTarget: input }) => {
    if (input.value !== newPassword) {
      setPasswordErrors('New Password do not matches');
    } else {
      setPasswordErrors('');
    }
    setconfirmNewPassword(input.value);
  };

  const submitHandler = async (e) => {
    setLoading(true);
    e.preventDefault();
    try {
      const { data } = await http.post(`${apiUrl}/api/user/self/reset`, {
        password,
        newPassword,
      });
      setServerErrors('');
      setPassword('');
      setconfirmNewPassword('');
      setnewPassword('');
      TimerAlert(' ', data, 'success');
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
      <div className="d-flex justify-content-center mt-5">
        <div className="jumbotron col-md-3 mx-5 my-5" style={{ borderRadius: '5%' }}>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form
                  className="needs-validation"
                  onSubmit={submitHandler}
                  noValidate
                >
                  <p className="h5 text-center mb-4">
                    Reset your password <Emoji label="🤔" symbol="🤔" />
                  </p>
                  <Input
                    name="password"
                    label="Password"
                    value={password}
                    type="password"
                    handleChange={handlePasswordChange}
                    error={serverError}
                    feedback={serverError}
                  />

                  <Input
                    name="newPassword"
                    label="New Password"
                    value={newPassword}
                    handleChange={handleNewPwsdChange}
                    type="password"
                  />

                  <Input
                    name="confirmNewPassword"
                    label="Confirm New Password"
                    value={confirmNewPassword}
                    handleChange={handleConfirmNewPswdChange}
                    error={passwordErrors}
                    feedback={passwordErrors}
                    type="password"
                  />

                  {/* {passwordErrors && (
                    <Alert
                      severity="error"
                      style={{ fontFamily: 'Sofia Pro Medium' }}
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
