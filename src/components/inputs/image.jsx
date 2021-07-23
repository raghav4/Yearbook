import React, { useState, useCallback } from 'react';
import urlPropType from 'url-prop-type';
import CircularProgress from '@material-ui/core/CircularProgress';
import imageCompression from 'browser-image-compression';
import BackupIcon from '@material-ui/icons/Backup';
import { useDropzone } from 'react-dropzone';
import { http } from '../../services';
import { apiUrl, endPoints } from '../../config.json';
import { TimerAlert } from '../alerts';

const DropPicture = ({ defaultPicture }) => {
  const [Image, setImage] = useState(defaultPicture);
  const [ImageName, setImageName] = useState('');
  const [ProgressBar, setProgressBar] = useState(false);

  const customStyle = {
    flex: '1',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '20px',
    borderWidth: '2px',
    borderRadius: '7px',
    borderColor: '#eeeeee',
    borderStyle: 'dashed',
    backgroundColor: '#f2f2f2',
    transition: 'border .24s ease-in-out',
    outline: 'none',
    cursor: 'pointer',
  };

  const onDrop = useCallback((acceptedFiles) => {
    setImage(acceptedFiles[0]);
    setImageName(acceptedFiles[0].name);
    setProgressBar(true);
    const uploadImage = async () => {
      const formData = new FormData();
      const options = {
        maxSizeMB: 0.7,
        maxWidthOrHeight: 1920,
        useWebWorker: true,
      };
      try {
        const compressedFile = await imageCompression(acceptedFiles[0], options);
        formData.append('file', compressedFile);
        const { data } = await http.patch(
          `${apiUrl}/${endPoints.user.updateProfilePicture}`,
          formData,
          {
            headers: {
              'Content-Type': 'multipart/form-data',
            },
          },
        );
        setImage(data);
      } catch (ex) {
        if (
          ex.response &&
          (ex.response.status === 404 ||
            ex.response.status === 400 ||
            ex.response.status === 500)
        ) {
          TimerAlert('Error', ex.response.data, 'error');
        }
      }
      setProgressBar(false);
    };
    uploadImage();
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png, image/jpg',
    onDrop,
  });

  return (
    <>
      <section className="container" style={customStyle}>
        <div {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <div className="text-center" style={{ fontFamily: 'Inter' }}>
            <BackupIcon className="mb-1" fontSize="large" />
            <strong>
              <p className="text-center">Upload your profile picture</p>
            </strong>
            <p>
              <strong>Click to choose an image or Drag it here </strong>
            </p>
            <p className="text-center">
              <small>
                <mark>Only *.jpeg, *jpg, and *.png images will be accepted</mark>
              </small>
            </p>
          </div>

          <div className="text-center">
            {ProgressBar && <CircularProgress />}
            <img
              style={{ borderRadius: '10%' }}
              src={Image || defaultPicture}
              className="hoverable"
              alt="user_image"
              width="160"
              height="160"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default DropPicture;
