import React from 'react';
import { useDropzone } from 'react-dropzone';

const DropPicture = (props) => {
  const { acceptedFiles, rejectedFiles, getRootProps, getInputProps } = useDropzone({
    accept: 'image/jpeg, image/png, image/heic, image/jpg',
  });

  const acceptedFilesItems = acceptedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  const rejectedFilesItems = rejectedFiles.map((file) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <section
      className="container"
      style={{
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
        outline: 'none',
      }}
    >
      <div {...getRootProps({ className: 'dropzone' })}>
        <input {...getInputProps()} />
        <p>Drag 'n' drop some files here, or click to select files</p>
        <em>(Only *.jpeg and *.png images will be accepted)</em>
        {/* <aside>
          <h4>Accepted files</h4>
          <ul>{acceptedFilesItems}</ul>
          <h4>Rejected files</h4>
          <ul>{rejectedFilesItems}</ul>
        </aside> */}
      </div>
    </section>
  );
};

export default DropPicture;
