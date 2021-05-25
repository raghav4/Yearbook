import React, { useState, useContext } from 'react';
import cookie from 'react-cookies';
import { MDBContainer, MDBRow, MDBCol, MDBBtn } from 'mdbreact';
import { Input, Emoji, TimerAlert } from '../../../components';
import { http } from '../../../services';
import { apiUrl } from '../../../config.json';
import { PublicContext } from '../../../contexts';

const AdminLogin = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [Loading, setLoading] = useState(false);
  const { history } = useContext(PublicContext);

  const disabledButton = () => {
    return !(username !== '' && password !== '');
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const { data, headers } = await http.post(`${apiUrl}/api/admin/auth`, {
        username,
        password,
      });
      cookie.save('x-auth-token', headers['x-auth-token']);
      TimerAlert('Success', data, 'success');
      history.push('/');
    } catch (ex) {
      // if (ex.response && ex.reponse.status && ex.response.status === 400) {
      //   TimerAlert('Error', ex.response.data, 'error');
      // }
      // if (ex.reponse && ex.response.status && ex.response.status === 401) {
      //   TimerAlert('Error', 'Invalid Username or Password', 'error');
      // }
      console.log(ex.response)
      setLoading(false);
    }
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
                  <div className="text-center">
                    <Emoji symbol="🔐" /> <Emoji symbol="👩🏻‍💻" /> <Emoji symbol="👨🏻‍💻" />
                  </div>
                  <p className="h4 text-center mb-4">Login in as admin</p>
                  <Input
                    name="username"
                    label="Username"
                    value={username}
                    handleChange={(e) => setUsername(e.target.value)}
                  />

                  <Input
                    name="password"
                    label="Password"
                    value={password}
                    handleChange={(e) => setPassword(e.target.value)}
                    type="password"
                  />

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
                        'Continue'
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

export default AdminLogin;
