import React, { useState, useEffect } from 'react';
import Joi from 'joi-browser';
import Swal from 'sweetalert2';
import {
  DropPicture,
  NotifyAlert,
  TimerAlert,
  Input,
  Emoji,
} from '../../../../components';
import { DetailsSchema } from '../../../../utils/schemas';
import { apiUrl, endPoints } from '../../../../config.json';
import http from '../../../../services/httpService';

const UserInfo = () => {
  const [credentials, setCredentials] = useState({
    name: '',
    email: '',
  });
  const [info, setInfo] = useState({ bio: '', profilePicture: '' });
  const [deptSection, setDeptSection] = useState({
    department: '',
    section: '',
  });
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
        const { data } = await http.get(`${apiUrl}/${endPoints.user.loggedInUser}`);
        setCredentials({
          name: data.name,
          phoneNo: data.socialHandles.phone,
          email: data.socialHandles.email,
        });
        setDeptSection({
          department: data.department,
          section: data.section,
        });
        setInfo({
          bio: data.bio,
          profilePicture: data.profilePicture,
        });
        setSocialHandles({
          contactEmail: data.socialHandles.email,
          contactNo: data.socialHandles.phone,
          instagram: data.socialHandles.instagram,
          whatsappNo: data.socialHandles.whatsapp,
          facebook: data.socialHandles.facebook,
          linkedin: data.socialHandles.linkedin,
          snapchat: data.socialHandles.snapchat,
        });
      } catch (ex) {
        if (ex.response && ex.response.status === 404) {
          TimerAlert('Error', ex.response.data, 'error');
        }
      }
    };
    fetchUserDetails();
  }, []);

  const validateForm = () => {
    const { contactEmail, facebook, linkedin } = socialHandles;
    const { error } = Joi.validate(
      { contactEmail, facebook, linkedin },
      DetailsSchema(),
      {
        abortEarly: false,
      },
    );
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
    /* TODO #29:
     * 1. form validation when the user needs the field to be empty after adding/updating it
     * 2. form validation from the server side, i.e the user wants to delete a field
     * 3. Do not let the user to update the field before validation, i.e restrict, handleUpdate()
     */
    e.preventDefault();
    // const errors = validateForm();
    // setValidationErrors(errors || {});
    // if (errors) return;

    const userObject = {
      info: { bio: info.bio },
      socialHandles,
    };
    try {
      await http.put(`${apiUrl}/api/user/self`, userObject);
      NotifyAlert('Successfully Updated Details');
    } catch (ex) {
      if (ex.response && ex.response.status === 400) {
        Swal.fire(ex.response.data);
      }
    }
  };

  const handleChange = ({ currentTarget: input }) => {
    setCredentials({
      ...credentials,
      [input.name]: input.value,
    });
  };

  const handleChangeInfo = ({ currentTarget: input }) => {
    if (input.name === 'bio') {
      setInfo({ profilePicture: info.profilePicture, bio: input.value });
    }
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
        <div
          className="col-md-6 mt-5 jumbotron ml-3 mr-3"
          style={{ borderRadius: '7px' }}
        >
          <h4 className="h4-responsive text-center">
            Update your Profile <Emoji label="🤔" symbol="🤔" />
          </h4>
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

                    {/* <Input
                      name="email"
                      label="Account Email"
                      value={credentials.email}
                      handleChange={handleChange}
                      icon="envelope"
                      isDisabled
                    /> */}
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

                  <p className="p-responsive text-center">
                    Contact Details/ Social Media
                  </p>
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
                        icon="whatsapp"
                        IconBrand
                      />
                      <Input
                        name="facebook"
                        label="Facebook"
                        value={socialHandles.facebook}
                        handleChange={handleSocialHandles}
                        error={ValidationErrors.facebook}
                        feedback={ValidationErrors.facebook}
                        icon="facebook"
                        IconBrand
                      />
                      <Input
                        name="linkedin"
                        label="LinkedIn"
                        value={socialHandles.linkedin}
                        handleChange={handleSocialHandles}
                        error={ValidationErrors.linkedin}
                        feedback={ValidationErrors.linkedin}
                        icon="linkedin"
                        IconBrand
                      />
                      <Input
                        name="instagram"
                        label="Instagram"
                        value={socialHandles.instagram}
                        handleChange={handleSocialHandles}
                        icon="instagram"
                        IconBrand
                      />
                      <Input
                        name="snapchat"
                        label="Snapchat"
                        value={socialHandles.snapchat}
                        handleChange={handleSocialHandles}
                        icon="snapchat-ghost"
                        IconBrand
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <button type="submit" className="btn btn-elegant">
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
