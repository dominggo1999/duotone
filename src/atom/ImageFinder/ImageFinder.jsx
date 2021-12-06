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
  const [loading, setLoading] = useState(false);

  const queryPexels = async (query) => {
    const q = queryString.stringify({
      query,
      per_page: 30,
    });

    const url = `${baseURL}${q}`;

    try {
      const res = await fetch(url, {
        headers: {
          Authorization: apiKey,
        },
      });

      const results = await res.json();
      const photos = results.photos;

      if(photos.length) {
        savePexelsResults(photos);
        setLoading(false);
      }else{
        savePexelsResults([]);
        setErrorMsg('No Result Found');
        setLoading(false);
      }
    } catch (error) {
      setLoading(false);
      setErrorMsg('Error When Getting Images');
      console.log(error);
    }
  };

  const findImages = (e) => {
    e.preventDefault();
    const query = inputRef.current;

    setLoading(true);
    queryPexels(query.value);
    query.value = '';
  };

  const useImage = (img) => {
    updateValue('image', 'src', img);
    updateValue('wrapper', 'scale', 1);
    updateClientImageName('');
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
              loading={loading}
            />
          )
          : (
            <ImageFinderMobile
              pexelsImages={pexelsImages}
              useImage={useImage}
              errorMsg={errorMsg}
              loading={loading}
            />
          )
      }
    </ImageFinderWrapper>
  );
};

export default ImageFinder;
