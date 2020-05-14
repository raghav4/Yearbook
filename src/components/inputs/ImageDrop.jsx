import React, { useState, useCallback } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import imageCompression from 'browser-image-compression';
import BackupIcon from '@material-ui/icons/Backup';
import { useDropzone } from 'react-dropzone';
import { http } from '../../services';
import { apiUrl } from '../../config.json';

const DropPicture = () => {
  const [Image, setImage] = useState('');
  const [ImageName, setImageName] = useState('');
  const [ProgressBar, setProgressBar] = useState(false);

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
        const { data } = await http.post(`${apiUrl}/api/pic`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        setImage(data);
      } catch (ex) {}
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
          <div className="text-center">
            <BackupIcon className="mb-1" fontSize="large" />
            <p className="text-center" style={{ textDecoration: 'underline' }}>
              Updload your profile picture
            </p>
            <p>Drag n drop some files here, or click to select files</p>
            <p className="text-center">
              <small>
                <mark>Only *.jpeg, *jpg, and *.png images will be accepted</mark>
              </small>
            </p>
          </div>

          <div className="text-center">
            {ProgressBar && <CircularProgress />}
            <img src={Image} alt="user_image" width="90" height="84" />
          </div>
        </div>
      </section>
    </>
  );
};

export default DropPicture;
