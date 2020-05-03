import React from 'react';
import { useDropzone } from 'react-dropzone';
import BackupIcon from '@material-ui/icons/Backup';
import urlPropType from 'url-prop-type';

const DropPicture = ({ defaultPicture }) => {
  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png, image/heic, image/jpg',
  });

  const acceptedFilesItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} -{file.size} bytes
    </li>
  ));

  const customStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: '2px',
    borderRadius: '2px',
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#f2f2f2',
    transition: 'border .24s ease-in-out',
    outline: 'none',
  };

  return (
    <section className="container" style={customStyle}>
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <div className="text-center">
          <BackupIcon className="mb-1" fontSize="large" />
          <p className="text-center" style={{ textDecoration: 'underline' }}>
            Updload your profile picture
          </p>
          <p>Drag n drop some files here, or click to select files</p>
          <p className="text-center">
            <small>
              <mark>Only *.jpeg, *jpg, *heic and *.png images will be accepted</mark>
            </small>
          </p>
        </div>
        <aside>
          <ul>{acceptedFilesItems}</ul>
        </aside>
        {defaultPicture && (
          <div className="text-center">
            <img src={defaultPicture} alt="user" width="90" height="84" />
          </div>
        )}
      </div>
    </section>
  );
};

DropPicture.propTypes = {
  defaultPicture: urlPropType.isRequired,
};

export default DropPicture;
