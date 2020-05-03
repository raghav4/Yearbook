import React, { useContext, useState } from 'react';
import axios from 'axios';
import cookie from 'react-cookies';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Link } from 'react-router-dom';
import { PublicContext } from '../../contexts';

const Login = (props) => {
  const [email, setemail] = useState('');
  const [password, setpassword] = useState('');
  const { history } = useContext(PublicContext);

  const submitHandler = async () => {
    try {
      const { headers } = await axios.post('http://localhost:3000/api/user/auth', {
        email: { email }.email,
        password: { password }.password,
      });
      cookie.save('x-auth-token', headers['x-auth-token']);
      history.push('/');
    } catch ({ response }) {
      console.log(response.data);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="jumbotron col-md-3 mx-5 my-5" style={{ borderRadius: '5%' }}>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form className="needs-validation">
                  <p className="h4 text-center mb-4">Sign In</p>
                  {/* <small id="emailHelp" className="form-text text-muted">
                      We'll never share your email with anyone else.
                    </small> */}
                  <MDBInput
                    type="email"
                    label="Email"
                    onChange={(e) => setemail(e.target.value)}
                    outline
                    required
                  ></MDBInput>
                  <MDBInput
                    type="password"
                    label="Password"
                    onChange={(e) => setpassword(e.target.value)}
                    outline
                    required
                  ></MDBInput>

                  <div className="text-center mt-4">
                    <MDBBtn color="unique" type="button" onClick={submitHandler}>
                      Continue
                    </MDBBtn>
                  </div>
                  <p className="text-center mt-3 mr-2">
                    Not a member?{'  '}
                    <Link to="/signup">Register</Link>
                    <br />
                    Forgot Password?{'  '}
                    <Link to="/reset">Reset Password</Link>
                  </p>
                </form>
              </MDBCol>
            </MDBRow>
          </MDBContainer>
        </div>
      </div>
    </>
  );
};

export default Login;
