import React, {
  useState, useContext, useRef,
} from 'react';
import queryString from 'query-string';
import {
  ImageFinderWrapper, SearchBar,
} from './ImageFinder.style';
import { CanvasContext } from '../../context/Canvas.context';
import useSizes from '../../hooks/useSizes';
import ImageFinderDesktop from './ImageFinderDesktop';
import ImageFinderMobile from './ImageFinderMobile';

import 'react-lazy-load-image-component/src/effects/blur.css';

const apiKey = import.meta.env.VITE_APP_PEXELS_API_KEY;
const baseURL = 'https://api.pexels.com/v1/search?';

const ImageFinder = () => {
  const {
    savePexelsResults, pexelsImages, updateValue, updateClientImageName,
  } = useContext(CanvasContext);
  const inputRef = useRef();
  const [errorMsg, setErrorMsg] = useState('');

  const queryPexels = async (query) => {
    const q = queryString.stringify({
      query,
      per_page: 30,
    });

    const url = `${baseURL}${q}`;

    const res = await fetch(url, {
      headers: {
        Authorization: apiKey,
      },
    });

    const results = await res.json();
    const photos = results.photos;

    if(photos.length) {
      savePexelsResults(photos);
    }else{
      savePexelsResults([]);
      setErrorMsg('No Result Found');
    }
  };

  const findImages = (e) => {
    e.preventDefault();
    const query = inputRef.current;

    queryPexels(query.value);
    query.value = '';
  };

  const useImage = (img) => {
    updateValue('image', 'src', img);
    updateValue('wrapper', 'scale', 1);
    updateClientImageName('');
  };

  const breakpointColumns = {
    default: 2,
    768: 3,
  };

  const { isMedium } = useSizes();

  return (
    <ImageFinderWrapper>
      <SearchBar onSubmit={findImages}>
        <input
          ref={inputRef}
          type="text"
          placeholder="Try: Sea"
        />
        <button type="submit">Search</button>
      </SearchBar>
      {
        isMedium
          ? (
            <ImageFinderDesktop
              pexelsImages={pexelsImages}
              useImage={useImage}
              errorMsg={errorMsg}
            />
          )
          : (
            <ImageFinderMobile
              pexelsImages={pexelsImages}
              useImage={useImage}
              errorMsg={errorMsg}
            />
          )
      }
    </ImageFinderWrapper>
  );
};

export default ImageFinder;
