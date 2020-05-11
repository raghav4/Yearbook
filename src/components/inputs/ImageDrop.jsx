// Previous file is here : http://p.ip.fi/1LJF
import React, { useState } from 'react';
import FormData from 'form-data';
import axios from 'axios';

const DropPicture = () => {
  const [file, setFile] = useState(null);

  const handleFileChange = ({ currentTarget: input }) => {
    setFile(input.files[0]);
  };

  const handleUpload = async (e) => {
    let formdata = new FormData();
    formdata.append('image', file);
    formdata.append('name', 'Raghav');

    await axios.post('https://api.imgur.com/3/image', formdata, {
      headers: {
        Authorization: 'Client-ID 9aea24137cc5af8',
      },
    });
  };

  return (
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text" id="inputGroupFileAddon01">
          Upload
        </span>
      </div>
      <div className="custom-file">
        <input
          type="file"
          className="custom-file-input"
          onChange={(e) => handleFileChange(e)}
          id="inputGroupFile01"
          aria-describedby="inputGroupFileAddon01"
        />
        <label className="custom-file-label" htmlFor="inputGroupFile01">
          Choose file
        </label>
      </div>
      <button className="btn btn-primary" type="button" onClick={(e) => handleUpload(e)}>
        Upload
      </button>
    </div>
  );
};

export default DropPicture;
