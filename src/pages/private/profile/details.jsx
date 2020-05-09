import React, { useState, useEffect } from 'react';
import axios from 'axios';
import cookies from 'react-cookies';
import { MDBInput } from 'mdbreact';
import { DropPicture, NotifyAlert } from '../../../components';

const UserInfo = () => {
  const [name, setName] = useState('');
  const [phoneNo, setPhoneNo] = useState('');
  const [accountEmail, setAccountEmail] = useState('');
  const [bio, setBio] = useState('');
  const [ProfilePicture, setProfilePicture] = useState('https://i.imgur.com/P104MWw.png');
  const [instagram, setInstagram] = useState('');
  const [contactEmail, setContactEmail] = useState('');
  const [whatsappNo, setWhatsappNo] = useState('');

  useEffect(() => {
    document.title = 'User Info';
    const fetchUserDetails = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/user/info', {
          headers: { 'x-auth-token': cookies.load('x-auth-token') },
        });
        setName(data.credentials.name);
        setPhoneNo(data.credentials.phoneNo);
        setAccountEmail(data.credentials.email);
        setBio(data.info.bio);
        setProfilePicture(data.info.profilePicture);
        setInstagram(data.socialHandles.instagram);
        setContactEmail(data.socialHandles.contactEmail);
        setWhatsappNo(data.socialHandles.whatsappNo);
      } catch (ex) {}
    };
    fetchUserDetails();
  }, []);

  const handleUpdate = async () => {
    const userObject = {
      bio,
      contactEmail,
      instagram,
      whatsappNo,
    };
    try {
      // const { data } =
      await axios.put('http://localhost:5000/api/user/info', userObject, {
        headers: { 'x-auth-token': cookies.load('x-auth-token') },
      });
      NotifyAlert('Successfully Updated Details');
    } catch (ex) {
      console.log(ex.response);
    }
  };

  return (
    <>
      <div className="d-flex justify-content-center">
        <div className="col-md-6 mt-5">
          <div className="jumbotron ml-3 mr-3">
            <h3 className="h3-responsive text-center">Update your Profile</h3>
            <form>
              <div className="row">
                <div className="col-md-12">
                  <DropPicture defaultPicture={ProfilePicture} />
                </div>
              </div>
              <div className="form-group">
                <div className="row">
                  <div className="col">
                    <div className="">
                      <MDBInput
                        style={{ cursor: 'not-allowed' }}
                        type="text"
                        label="Full Name"
                        value={name}
                        outline
                        disabled
                        required
                      />
                      <MDBInput
                        type="text"
                        label="Phone Number"
                        value={phoneNo}
                        outline
                        disabled
                        required
                      />
                      <MDBInput
                        type="text"
                        label="Email"
                        value={accountEmail}
                        outline
                        disabled
                        required
                      />
                      <MDBInput
                        type="text"
                        label="Department"
                        value="CSE"
                        outline
                        disabled
                        required
                      />
                      <MDBInput type="text" label="Section" value="B" outline disabled required />
                      <MDBInput
                        type="text"
                        label="Bio"
                        value={bio}
                        outline
                        required
                        onChange={(e) => setBio(e.target.value)}
                      />
                    </div>
                    <p className="p-responsive text-center">Contact Details/ Social Media</p>
                    <div className="row">
                      <div className="col">
                        <MDBInput
                          type="text"
                          label="Contact Email"
                          value={contactEmail}
                          onChange={(e) => setContactEmail(e.target.value)}
                          outline
                          required
                        />
                        <MDBInput type="text" label="Facebook URL" outline required />
                        <MDBInput type="text" label="LinkedIn URL" outline required />
                        <MDBInput
                          type="tel"
                          label="WhatsApp Number"
                          value={whatsappNo}
                          onChange={(e) => setWhatsappNo(e.target.value)}
                          outline
                          required
                        />
                        <MDBInput
                          type="text"
                          label="Instagram"
                          value={instagram}
                          onChange={(e) => setInstagram(e.target.value)}
                          outline
                          required
                        />
                        <MDBInput type="text" label="Snapchat" outline required />
                      </div>
                    </div>
                    <div className="text-center">
                      <button type="submit" className="btn btn-primary" onClick={handleUpdate}>
                        Submit
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserInfo;
