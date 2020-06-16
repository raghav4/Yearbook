import React, { useState, useEffect } from 'react';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol } from 'mdbreact';

const EmailNotifications = () => {
  const [emailSubject, setEmailSubject] = useState('');
  const [emailBody, setEmailBody] = useState('');

  const sendEmail = () => {};

  return (
    <>
      <MDBContainer className="mt-5 text-center">
        {/* <MDBRow>
          <MDBCol> */}
        <MDBJumbotron>
          {/* <h4 className="h4 display-6">Send Email Notifications 🔔</h4> */}
          <div>
            <div className="form-group">
              {/* <label htmlFor="formGroupExampleInput"></label> */}
              <input
                type="text"
                className="form-control"
                placeholder="Email Subject"
                value={emailSubject}
                id="formGroupExampleInput"
                onChange={({ currentTarget: input }) => setEmailSubject(input.value)}
              />
            </div>
            <div className="form-group">
              <textarea
                className="form-control"
                placeholder="Email Body"
                value={emailBody}
                id="exampleFormControlTextarea1"
                onChange={({ currentTarget: input }) => setEmailBody(input.value)}
                rows="5"
              />
            </div>
          </div>
          <button className="btn btn-mdb-color btn-block btn-md" onClick={sendEmail}>
            Send
          </button>
        </MDBJumbotron>
        {/* </MDBCol>
        </MDBRow> */}
      </MDBContainer>
    </>
  );
};

export default EmailNotifications;
