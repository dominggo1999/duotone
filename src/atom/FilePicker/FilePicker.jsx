import React, { useState, useMemo, useContext } from 'react';
import { useDropzone } from 'react-dropzone';
import {
  FilePickerWrapper,
  PickerBox,
  DnDMessage,
  AcceptedFileMessage,
  AccentColor,
  FileName,
  ErrorMessage,
} from './FilePicker.style';
import { CanvasContext } from '../../context/Canvas.context';

const truncate = (str) => {
  if(str.length > 50) {
    str = `${str.slice(0, 10)}.........${str.slice(str.length - 10)}`;
  }

  return str;
};

const FilePicker = () => {
  const [errorMessage, setErrorMessage] = useState('');
  const { updateValue, updateClientImageName, clientImageName } = useContext(CanvasContext);

  const readFile = (file) => {
    const reader = new FileReader();
    reader.onload = () => {
      const newSrc = reader.result;
      updateValue('image', 'src', newSrc);
    };

    reader.readAsDataURL(file);
  };

  const onDrop = (acceptedFiles) => {
    if(acceptedFiles.length === 1) {
      updateClientImageName(acceptedFiles[0].path);
      setErrorMessage('');

      // if accepted read file as base64 and change image(canvas) background
      readFile(acceptedFiles[0]);
    }else{
      updateClientImageName('');
      setErrorMessage('');
    }
  };

  const onDropRejected = (err) => {
    const { code } = err[0].errors[0];

    if(code === 'file-invalid-type') {
      setErrorMessage('Invalid File Type');
    }else if (code === 'file-too-large') {
      setErrorMessage('File Size Is Too Large');
    } else{
      setErrorMessage('An error occured');
    }
  };

  const {
    getRootProps,
    getInputProps,
  } = useDropzone({
    accept: 'image/jpeg, image/png, image/gif',
    multiple: false,
    onDrop,
    onDropRejected,
  });

  return useMemo(() => {
    return (
      <FilePickerWrapper>
        <PickerBox {...getRootProps({ className: 'dropzone' })}>
          <input {...getInputProps()} />
          <DnDMessage>Drag and drop an image here, or click to select file</DnDMessage>
          <AcceptedFileMessage>
            Only
            {' '}
            <AccentColor>
              *.jpeg ,*.png, and *.gif
            </AccentColor>
            {' '}

            image will be accepted
          </AcceptedFileMessage>
          <br />
          <AcceptedFileMessage>
            Max file size :
            {' '}
            <AccentColor>
              10 mb
            </AccentColor>
          </AcceptedFileMessage>

          {
            clientImageName
            && <FileName>{ truncate(clientImageName)}</FileName>
          }

          {
            errorMessage
          && <ErrorMessage>** {' '}{errorMessage}</ErrorMessage>
          }

        </PickerBox>
      </FilePickerWrapper>
    );
  }, [updateClientImageName, errorMessage]);
};

export default FilePicker;
