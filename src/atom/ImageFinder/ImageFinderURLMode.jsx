import React, {
  useState, useRef, useContext,
} from 'react';
import {
  ImageFinderWrapper, SearchBar, LoadingWrapper, LoadingWrapperMobile,
} from './ImageFinder.style';
import { CanvasContext } from '../../context/Canvas.context';
import { Spinner, Skeleton } from '../../shared/Spinner';
import useSizes from '../../hooks/useSizes';

const ImageFinderURLMode = () => {
  const {
    updateValue,
    updateClientImageName,
    saveLink,
    urlModeLink,
  } = useContext(CanvasContext);
  const [errorMsg, setErrorMsg] = useState();
  const inputRef = useRef();
  const [loading, setLoading] = useState();
  const { isMedium } = useSizes();

  const imageExists = async (url, callback) => {
    const img = new Image();
    img.onload = () => { callback(true); };
    img.onerror = () => { callback(false); };
    img.src = url;
  };

  const findImageInURL = (e) => {
    e.preventDefault();
    setLoading(true);
    const url = inputRef.current.value;

    imageExists(url, (exists) => {
      if(exists) {
        saveLink(url);
        updateValue('image', 'src', url);
        updateValue('wrapper', 'scale', 1);
        updateClientImageName('');
        setErrorMsg('');
        setLoading(false);
        inputRef.current.blur();
      }else{
        setErrorMsg('Please Input A Valid Image URL');
        setLoading(false);
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

      {
         isMedium && loading && (
         <LoadingWrapper>
           <Spinner>
             <Skeleton />
           </Spinner>
         </LoadingWrapper>
         )
      }

      {
        !isMedium && loading && (
          <LoadingWrapperMobile>
            <Spinner>
              <Skeleton />
            </Spinner>
          </LoadingWrapperMobile>
        )
      }

      {errorMsg && <p>{errorMsg}</p> }
    </ImageFinderWrapper>
  );
};

export default ImageFinderURLMode;
