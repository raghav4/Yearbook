import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import Joi from 'joi-browser';
import { DropPicture, NotifyAlert, Input } from '../../../components';
import { DetailsSchema } from '../../../utils/schemas';

const UserInfo = () => {
  const [credentials, setCredentials] = useState({ name: '', phoneNo: '', email: '' });
  const [info, setInfo] = useState({ bio: '', profilePicture: '' });
  const [deptSection, setDeptSection] = useState({ department: '', section: '' });
  const [ValidationErrors, setValidationErrors] = useState({
    bio: '',
    contactEmail: '',
    whatsappNo: '',
    facebook: '',
    linkedin: '',
    instagram: '',
    snapchat: '',
  });
  const [socialHandles, setSocialHandles] = useState({
    contactEmail: '',
    contactNo: '',
    instagram: '',
    whatsappNo: '',
    facebook: '',
    linkedin: '',
    snapchat: '',
  });

  useEffect(() => {
    document.title = 'User Info';

    const fetchUserDetails = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/user/info', {
          headers: { 'x-auth-token': cookies.load('x-auth-token') },
        });
        setCredentials({
          ...credentials,
          name: data.credentials.name,
          phoneNo: data.credentials.phoneNo,
          email: data.credentials.email,
        });
        setDeptSection({
          ...deptSection,
          department: data.deptSection.department,
          section: data.deptSection.section,
        });
        setInfo({ ...info, bio: data.info.bio, profilePicture: data.info.profilePicture });
        setSocialHandles({
          ...socialHandles,
          contactEmail: data.socialHandles.contactEmail,
          contactNo: data.socialHandles.contactNo,
          instagram: data.socialHandles.instagram,
          whatsappNo: data.socialHandles.whatsappNo,
          facebook: data.socialHandles.facebook,
          linkedin: data.socialHandles.linkedin,
          snapchat: data.socialHandles.snapchat,
        });
      } catch (ex) {}
    };
    fetchUserDetails();
  }, []);

  const validateForm = () => {
    const { contactEmail, facebook, linkedin } = socialHandles;
    const { error } = Joi.validate({ contactEmail, facebook, linkedin }, DetailsSchema(), {
      abortEarly: false,
    });
    if (!error) return null;
    const errors = {};
    // eslint-disable-next-line no-restricted-syntax
    for (const item of error.details) {
      errors[item.path[0]] = item.message;
    }
    return errors;
  };

  const validateInputFields = ({ name, value }) => {
    const obj = { [name]: value };
    const fieldSchema = {
      [name]: DetailsSchema()[name],
    };
    const { error } = Joi.validate(obj, fieldSchema);

    return error ? error.details[0].message : null;
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    // const errors = validateForm();
    // setValidationErrors(errors || {});
    // if (errors) return;

    const userObject = {
      info,
      deptSection,
      socialHandles,
    };
    try {
      await axios.put('http://localhost:5000/api/user/info', userObject, {
        headers: { 'x-auth-token': cookies.load('x-auth-token') },
      });
      NotifyAlert('Successfully Updated Details');
    } catch (ex) {
      console.log(ex.response);
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setCredentials({
      ...credentials,
      [input.name]: input.value,
    });
  };

  const handleChangeInfo = (e) => {
    setInfo({
      ...info,
      [e.target.name]: e.target.value,
    });
  };

  const handleChangeDeptSection = (e) => {
    setDeptSection({
      ...deptSection,
      [e.target.name]: e.target.value,
    });
  };

  const handleSocialHandles = ({ currentTarget: input }) => {
    const errors = { ...ValidationErrors };

    const errorMessage = validateInputFields(input);
    if (errorMessage) {
      errors[input.name] = errorMessage;
    } else {
      delete errors[input.name];
    }

    setSocialHandles({
      ...socialHandles,
      [input.name]: input.value,
    });

    setValidationErrors({
      ...ValidationErrors,
      [input.name]: errors[input.name],
    });
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-6 mt-5 jumbotron ml-3 mr-3">
          <h3 className="h3-responsive text-center">Update your Profile</h3>
          <form className="needs-validation" onSubmit={handleUpdate} noValidate>
            <div className="row">
              <div className="col-md-12">
                <DropPicture defaultPicture={info.profilePicture} />
              </div>
            </div>
            <div className="form-group">
              <div className="row">
                <div className="col">
                  <div style={{ cursor: 'not-allowed' }}>
                    <Input
                      name="name"
                      label="Name"
                      value={credentials.name}
                      handleChange={handleChange}
                      icon="user"
                      isDisabled
                    />
                    <Input
                      name="phoneNo"
                      label="Phone Number"
                      value={credentials.phoneNo}
                      handleChange={handleChange}
                      icon="phone-alt"
                      isDisabled
                    />
                    <Input
                      name="email"
                      label="Account Email"
                      value={credentials.email}
                      handleChange={handleChange}
                      icon="envelope-open"
                      isDisabled
                    />
                    <Input
                      name="department"
                      label="Department"
                      value={deptSection.department}
                      handleChange={handleChangeDeptSection}
                      icon="user-graduate"
                      isDisabled
                    />
                    <Input
                      name="section"
                      label="Section"
                      value={deptSection.section}
                      handleChange={handleChangeDeptSection}
                      icon="users"
                      isDisabled
                    />
                  </div>
                  <div className="text-center">
                    <small>Update your bio</small>
                  </div>
                  <Input
                    name="bio"
                    label="Bio"
                    value={info.bio}
                    handleChange={handleChangeInfo}
                    icon="address-card"
                  />

                  <p className="p-responsive text-center">Contact Details/ Social Media</p>
                  <div className="row">
                    <div className="col">
                      <Input
                        name="contactEmail"
                        label="Email"
                        value={socialHandles.contactEmail}
                        handleChange={handleSocialHandles}
                        error={ValidationErrors.contactEmail}
                        feedback={ValidationErrors.contactEmail}
                        icon="envelope-open"
                      />

                      <Input
                        name="contactNo"
                        label="Contact Number"
                        value={socialHandles.contactNo}
                        handleChange={handleSocialHandles}
                        error={ValidationErrors.contactNo}
                        feedback={ValidationErrors.contactNo}
                        icon="phone-alt"
                      />

                      <Input
                        name="whatsappNo"
                        label="Whatsapp Number"
                        value={socialHandles.whatsappNo}
                        handleChange={handleSocialHandles}
                        error={ValidationErrors.whatsappNo}
                        feedback={ValidationErrors.whatsappNo}
                      />
                      <Input
                        name="facebook"
                        label="Facebook"
                        value={socialHandles.facebook}
                        handleChange={handleSocialHandles}
                        error={ValidationErrors.facebook}
                        feedback={ValidationErrors.facebook}
                      />
                      <Input
                        name="linkedin"
                        label="LinkedIn"
                        value={socialHandles.linkedin}
                        handleChange={handleSocialHandles}
                        error={ValidationErrors.linkedin}
                        feedback={ValidationErrors.linkedin}
                      />
                      <Input
                        name="instagram"
                        label="Instagram"
                        value={socialHandles.instagram}
                        handleChange={handleSocialHandles}
                      />
                      <Input
                        name="snapchat"
                        label="Snapchat"
                        value={socialHandles.snapchat}
                        handleChange={handleSocialHandles}
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
