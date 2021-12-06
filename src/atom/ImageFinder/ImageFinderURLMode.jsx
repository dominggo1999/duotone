import React, {
  useState, useRef, useContext, useEffect,
} from 'react';
import queryString from 'query-string';
import {
  ImageFinderWrapper, SearchBar,
} from './ImageFinder.style';
import { CanvasContext } from '../../context/Canvas.context';

const ImageFinderURLMode = () => {
  const {
    updateValue,
    updateClientImageName,
    saveLink,
    urlModeLink,
  } = useContext(CanvasContext);
  const [errorMsg, setErrorMsg] = useState();
  const inputRef = useRef();

  const imageExists = (url, callback) => {
    const img = new Image();
    img.onload = () => { callback(true); };
    img.onerror = () => { callback(false); };
    img.src = url;
  };

  const findImageInURL = (e) => {
    e.preventDefault();
    const url = inputRef.current.value;

    imageExists(url, (exists) => {
      if(exists) {
        saveLink(url);
        updateValue('image', 'src', url);
        updateValue('wrapper', 'scale', 1);
        updateClientImageName('');
        setErrorMsg('');
        inputRef.current.blur();
      }else{
        setErrorMsg('Please Input A Valid Image URL');
      }
    });
  };

  return (
    <ImageFinderWrapper>
      <SearchBar onSubmit={findImageInURL}>
        <input
          defaultValue={urlModeLink}
          ref={inputRef}
          type="text"
          placeholder="Paste Image URL Here"
        />
        <button type="submit">Search</button>
      </SearchBar>

      {errorMsg && <p>{errorMsg}</p> }
    </ImageFinderWrapper>
  );
};

export default ImageFinderURLMode;
