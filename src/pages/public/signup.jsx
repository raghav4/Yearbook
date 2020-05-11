// import React, { useState } from 'react';
// import axios from 'axios';
// import Joi from 'joi-browser';
// import Swal from 'sweetalert2';
// import { Link } from 'react-router-dom';
// import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
// import { TimerAlert, Input } from '../../components';

// const SignUp = () => {
//   const [credentials, setCredentials] = useState({
//     name: '',
//     email: '',
//     phoneNo: '',
//     password: '',
//   });
//   // const [deptSection, setdeptSection] = useState({
//   //   department: ['CSE', 'IT', 'EEE', 'ECE', 'MAE'],
//   //   section: ['A', 'B', 'C'],
//   // });
//   // const [name, setname] = useState('');
//   // const [email, setemail] = useState('');
//   // const [phoneNo, setphoneNo] = useState('');
//   // const [password, setpassword] = useState('');
//   const [confirmPassword, setconfirmPassword] = useState('');
//   const [department, setdepartment] = useState(['CSE', 'IT', 'EEE', 'ECE', 'MAE']);
//   const [section, setsection] = useState(['A', 'B', 'C']);
//   const [validationErrors, setValidationErrors] = useState({
//     name: '',
//     email: '',
//     phoneNo: '',
//     password: '',
//   });

//   // TODO #23: Get Department and section from the backend

// const schema = {
//   name: Joi.string().label('Name').required(),
//   email: Joi.string().email().label('Email').required(),
//   phoneNo: Joi.string().label('Phone Number').required(),
//   password: Joi.string().label('Password').required(),
//   department: Joi.string().label('Department').required(),
//   section: Joi.string().label('Section').required(),
// };

//   const validateForm = () => {};

//   const handleVerification = async ({ name, email, password, phoneNo }) => {
//     Swal.mixin({
//       input: 'text',
//       inputValidator: (value) => {
//         if (!value) {
//           return 'Please Enter the OTP!';
//         }
//       },
//       confirmButtonText: 'Next &rarr;',
//       showCancelButton: true,
//       showCloseButton: true,
//       onClose: () => {},
//       // progressSteps: ['1'],
//     })
//       .queue([
//         {
//           title: 'Email Verification',
//           html: `Enter the OTP sent to your Email`,
//         },
//       ])
//       .then(async (result) => {
//         if (result.value) {
//           // const answers = JSON.stringify(result.value);
//           const user = {
//             otp: result.value[0],
//             name,
//             email,
//             phoneNo,
//             password,
//             department,
//             section,
//           };
//           try {
//             await axios.post('http://localhost:5000/api/user/signup/verify', user);

//             Swal.fire({
//               icon: 'success',
//               title: 'You can login now',
//               html: '<p>Go to the <a href="/login">Login</a> Page to continue</p>',
//               showCloseButton: true,
//               showCancelButton: true,
//               showConfirmButton: false,
//               timer: 4500,
//             });
//           } catch ({ err }) {
//             TimerAlert('Error', 'Something Failed', 'error');
//           }
//         }
//       });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     // event.target.className += ' was-validated';
//     if ({ password }.password !== { confirmPassword }.confirmPassword) {
//       TimerAlert('Try Again', `Password doesn't matches`, 'error');
//       return;
//     }
//     const userObject = {
//       name: { name }.name,
//       email: { email }.email,
//       phoneNo: { phoneNo }.phoneNo,
//       password: { password }.password,
//       department: { department }.department,
//       section: { section }.section,
//     };
//     try {
//       await axios.post('http://localhost:5000/api/user/signup', userObject);

//       handleVerification(userObject);
//     } catch ({ response }) {
//       TimerAlert('Error', 'Try again later', 'error');
//     }
//   };
//   return (
//     <>
//       <div className="d-flex justify-content-center mb-5">
//         <div
//           className="jumbotron col-md-5 mx-5 my-5"
//           style={{ maxHeight: '690px', maxWidth: '500px', borderRadius: '5%' }}
//         >
//           <MDBContainer>
//             <MDBRow>
//               <MDBCol>
//                 <form className="needs-validation" onSubmit={submitHandler} noValidate>
//                   <p className="h4 text-center mb-4">Sign up</p>
//                   <Input
//                     name="name"
//                     label="Name"
//                     value={credentials.name}
//                     handleChange={handleChange}
//                     icon="address-card"
//                   />
//                   <MDBInput
//                     type="text"
//                     label="Full Name"
//                     onChange={(e) => setname(e.target.value)}
//                     outline
//                     required
//                   >
//                     {/* <div className="valid-feedback ml-3 pl-3">Looks good!</div> */}
//                   </MDBInput>
//                   <MDBInput
//                     type="tel"
//                     label="Phone Number"
//                     outline
//                     pattern="[1-9]{1}[0-9]{9}"
//                     onChange={(e) => setphoneNo(e.target.value)}
//                     required
//                   />
//                   <MDBInput
//                     type="email"
//                     label="Email"
//                     onChange={(e) => setemail(e.target.value)}
//                     outline
//                     required
//                   />
//                   <div className="my-4">
//                     <select
//                       className="browser-default custom-select"
//                       onChange={(e) => setdepartment(e.target.value)}
//                     >
//                       <option>Choose your Department</option>
//                       <option value="CSE">CSE</option>
//                       <option value="IT">IT</option>
//                       <option value="ECE">ECE</option>
//                       <option value="EEE">EEE</option>
//                       <option value="MAE">MAE</option>
//                     </select>
//                   </div>
//                   <div>
//                     <select
//                       className="browser-default custom-select"
//                       onChange={(e) => setsection(e.target.value)}
//                     >
//                       <option>Choose your Section</option>
//                       <option value="A">A</option>
//                       <option value="B">B</option>
//                       <option value="C">C</option>
//                     </select>
//                   </div>
//                   <MDBInput
//                     type="password"
//                     label="Password"
//                     onChange={(e) => setpassword(e.target.value)}
//                     outline
//                     required
//                   />
//                   <MDBInput
//                     type="password"
//                     label="Confirm Password"
//                     onChange={(e) => setconfirmPassword(e.target.value)}
//                     outline
//                     required
//                   />
//                   <div className="text-center mt-4">
//                     <MDBBtn color="unique" type="submit">
//                       Register
//                     </MDBBtn>
//                   </div>
//                   <p className="text-center mt-3 mr-2">
//                     Already a member?{'  '}
//                     <Link to="/login">Sign In</Link>
//                   </p>
//                 </form>
//               </MDBCol>
//             </MDBRow>
//           </MDBContainer>
//         </div>
//       </div>
//     </>
//   );
// };

// export default SignUp;

import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { MDBContainer, MDBRow, MDBCol, MDBBtn, MDBInput } from 'mdbreact';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { TimerAlert } from '../../components';

const SignUp = () => {
  const [name, setname] = useState('');
  const [email, setemail] = useState('');
  const [phoneNo, setphoneNo] = useState('');
  const [password, setpassword] = useState('');
  const [confirmPassword, setconfirmPassword] = useState('');
  const [department, setdepartment] = useState(['CSE', 'IT', 'EEE', 'ECE', 'MAE']);
  const [section, setsection] = useState(['A', 'B', 'C']);

  // TODO #23: Get Department and section from the backend

  const handleVerification = async ({ name, email, password, phoneNo }) => {
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
      onClose: () => {},
      // progressSteps: ['1'],
    })
      .queue([
        {
          title: 'Email Verification',
          html: `Enter the OTP sent to your Email`,
        },
      ])
      .then(async (result) => {
        if (result.value) {
          // const answers = JSON.stringify(result.value);
          const user = {
            otp: result.value[0],
            name,
            email,
            phoneNo,
            password,
            department,
            section,
          };
          try {
            await axios.post('http://localhost:5000/api/user/signup/verify', user);

            Swal.fire({
              icon: 'success',
              title: 'You can login now',
              html: '<p>Go to the <a href="/login">Login</a> Page to continue</p>',
              showCloseButton: true,
              showCancelButton: true,
              showConfirmButton: false,
              timer: 4500,
            });
          } catch ({ err }) {
            TimerAlert('Error', 'Something Failed', 'error');
          }
        }
      });
  };
  const submitHandler = async (event) => {
    // event.preventDefault();
    // event.target.className += ' was-validated';
    if ({ password }.password !== { confirmPassword }.confirmPassword) {
      TimerAlert('Try Again', `Password doesn't matches`, 'error');
      return;
    }
    const userObject = {
      name: { name }.name,
      email: { email }.email,
      phoneNo: { phoneNo }.phoneNo,
      password: { password }.password,
      department: { department }.department,
      section: { section }.section,
    };
    try {
      await axios.post('http://localhost:5000/api/user/signup', userObject);

      handleVerification(userObject);
    } catch ({ response }) {
      TimerAlert('Error', 'Try again later', 'error');
    }
  };
  return (
    <>
      <div className="d-flex justify-content-center mb-5">
        <div className="jumbotron col-md-5 mx-5 my-5" style={{ borderRadius: '3%' }}>
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
                    onChange={(e) => setphoneNo(e.target.value)}
                    required
                  />
                  <MDBInput
                    type="email"
                    label="Email"
                    onChange={(e) => setemail(e.target.value)}
                    outline
                    required
                  />
                  <div className="my-4">
                    <select
                      className="browser-default custom-select"
                      onChange={(e) => setdepartment(e.target.value)}
                    >
                      <option>Choose your Department</option>
                      <option value="CSE">CSE</option>
                      <option value="IT">IT</option>
                      <option value="ECE">ECE</option>
                      <option value="EEE">EEE</option>
                      <option value="MAE">MAE</option>
                    </select>
                  </div>
                  <div>
                    <select
                      className="browser-default custom-select"
                      onChange={(e) => setsection(e.target.value)}
                    >
                      <option>Choose your Section</option>
                      <option value="A">A</option>
                      <option value="B">B</option>
                      <option value="C">C</option>
                    </select>
                  </div>
                  <MDBInput
                    type="password"
                    label="Password"
                    onChange={(e) => setpassword(e.target.value)}
                    outline
                    required
                  />
                  <MDBInput
                    type="password"
                    label="Confirm Password"
                    onChange={(e) => setconfirmPassword(e.target.value)}
                    outline
                    required
                  />
                  <div className="text-center mt-4">
                    <MDBBtn color="unique" type="button" onClick={(e) => submitHandler(e)}>
                      Register
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
