import React, {
  useState, useContext, useRef, useEffect,
} from 'react';
import Masonry from 'react-masonry-css';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import {
  ImageFinderWrapper, SearchBar, ImageList, ImageWrapper,
} from './ImageFinder.style';
import { CanvasContext } from '../../context/Canvas.context';

import 'react-lazy-load-image-component/src/effects/blur.css';

import { client } from '../../config/pexels.config';

const ImageFinder = () => {
  const {
    savePexelsResults, pexelsImages, updateValue, updateClientImageName,
  } = useContext(CanvasContext);
  const inputRef = useRef();
  const [errorMsg, setErrorMsg] = useState('');

  const queryPexels = async (query) => {
    const res = await client.photos.search(
      {
        query,
        per_page: 30,
      },
    );

    const photos = res.photos;

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
      <ImageList>
        <Masonry
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
          breakpointCols={2}
        >
          {
            pexelsImages?.length > 0 && pexelsImages.map((image) => {
              return (
                <ImageWrapper
                  onClick={() => useImage(image.src.large)}
                  key={image.id}
                  w={image.width}
                  h={image.height}
                >
                  <LazyLoadImage
                    src={image.src.small}
                    effect="blur"
                    alt={image.photographer}
                  />
                </ImageWrapper>
              );
            })
          }

          {
            errorMsg && <p> no result found</p>
          }
        </Masonry>
      </ImageList>
    </ImageFinderWrapper>
  );
};

export default ImageFinder;
