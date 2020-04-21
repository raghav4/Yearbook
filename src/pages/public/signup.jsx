import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';

const SignUp = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phoneNumber, setphoneNumber] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [isLoading, setisLoading] = useState(false);
  const [registerButton, setregisterButton] = useState('Register');

  const handleVerification = async ({ name, email, password, phoneNumber }) => {
    let user;
    let flag = true;
    Swal.mixin({
      input: 'text',
      inputValidator: (value) => {
        if (!value) {
          return 'Please Enter the OTP!';
        }
      },
      confirmButtonText: 'Next &rarr;',
      showCancelButton: true,
      showCloseButton: true,
      onClose: () => {
        flag = false;
      },
      // progressSteps: ['1'],
    })
      .queue([
        {
          title: 'Email Verification',
          html: `Enter the OTP sent to your Email`,
        },
        // {
        //   title: 'Phone Verification',
        //   text: 'Enter the OTP sent to your mobile',
        // },
      ])
      .then(async (result) => {
        if (result.value) {
          // const answers = JSON.stringify(result.value);
          user = {
            otp: result.value[0],
            name,
            email,
            phoneNumber,
            password,
          };
        }
        try {
          if (!flag) return;
          await axios.post('http://localhost:3000/api/admin/user/verify', user);
          Swal.fire({
            icon: 'success',
            title: 'You can login now',
            html: '<p>Go to the <a href="/login">Login</a> Page to continue</p>',
            showCloseButton: true,
            showCancelButton: true,
            showConfirmButton: false,
            timer: 4500,
          });
        } catch ({ response }) {
          Swal.fire({
            icon: 'error',
            title: `${response.data}`,
            timer: 3500,
          });
        }
      });
  };
  const submitHandler = async (event) => {
    // setisLoading(true);
    // setregisterButton('Loading');
    // event.preventDefault();
    // event.target.className += ' was-validated';
    if ({ password }.password !== { confirmPassword }.confirmPassword) {
      Swal.fire({
        icon: 'error',
        title: 'Try Again',
        text: 'Those passwords does not matches',
        showConfirmButton: false,
        timer: 2500,
        timerProgressBar: true,
      });
      setisLoading(false);
      setregisterButton('Register');
      return;
    }
    const userObject = {
      name: { name }.name,
      email: { email }.email,
      phoneNumber: { phoneNumber }.phoneNumber,
      password: { password }.password,
    };
    try {
      await axios.post('http://localhost:3000/api/admin/user', userObject);
      handleVerification(userObject);
    } catch ({ response }) {
      let timerInterval;
      Swal.fire({
        title: 'Error!',
        icon: 'error',
        html: `<b>${response.data}</>`,
        timer: 3000,
        timerProgressBar: true,
        onClose: () => {
          clearInterval(timerInterval);
        },
      });
      setisLoading(false);
      setregisterButton('Register');
      console.log(response.data);
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="jumbotron col-md-5 mx-5 my-5" style={{ borderRadius: '5%' }}>
          <MDBContainer>
            <MDBRow>
              <MDBCol>
                <form className="needs-validation" onSubmit={submitHandler} noValidate>
                  <p className="h4 text-center mb-4">Sign up</p>
                  <MDBInput
                    type="text"
                    label="Full Name"
                    onChange={(e) => setname(e.target.value)}
                    outline
                    required
                  >
                    {/* <div className="valid-feedback ml-3 pl-3">Looks good!</div> */}
                  </MDBInput>
                  <MDBInput
                    type="tel"
                    label="Phone Number"
                    outline
                    pattern="[1-9]{1}[0-9]{9}"
                    onChange={(e) => setphoneNumber(e.target.value)}
                    required
                  ></MDBInput>
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
                  <MDBInput
                    type="password"
                    label="Confirm Password"
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    outline
                    required
                  ></MDBInput>
                  <div className="text-center mt-4">
                    <MDBBtn color="unique" type="button" onClick={(e) => submitHandler(e)}>
                      {{ isLoading }.isLoading && (
                        <span
                          className="spinner-border spinner-border-sm mr-2"
                          role="status"
                          aria-hidden="true"
                        />
                      )}
                      {{ registerButton }.registerButton}
                    </MDBBtn>
                  </div>
                  <p className="text-center mt-3 mr-2">
                    Already a member?{'  '}
                    <Link to="/login">Sign In</Link>
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

export default SignUp;
