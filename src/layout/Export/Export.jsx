import React, { useContext, useState } from 'react';
import DomToImage from '@yzfe/dom-to-image';
import { CanvasContext } from '../../context/Canvas.context';

const proxyUrl = import.meta.env.VITE_APP_IMAGE_PROXY;

const Export = () => {
  const { image, updateValue } = useContext(CanvasContext);
  const [error, setError] = useState('');

  let res;

  const proxy = async (url) => {
    try {
      res = await fetch(`${proxyUrl}?url=${url}`);
    } catch (error) {
      setError('Something wrong when downloading the image');
    }

    if(res.status === 200) {
      const corsImage = await res.text();
      updateValue('image', 'src', corsImage);
      const canvas = document.getElementById('final-image');
      await DomToImage.toPng(canvas, { cacheBust: true })
        .then((dataUrl) => {
          const link = document.createElement('a');
          link.download = 'my-beautiful-image.png';
          link.href = dataUrl;
          link.click();
        }).catch((err) => {
          console.log(err);
          setError('Something wrong when downloading the image');
        });
    }
  };

  const downloadImage = async () => {
    const canvas = document.getElementById('final-image');
    await DomToImage.toPng(canvas, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-beautiful-image.png';
        link.href = dataUrl;
        link.click();
      }).catch((err) => {
        proxy(image.src);
      });
  };

  return (
    <div>
      <button onClick={downloadImage}>Download</button>
      {error && <p>{error}</p> }
    </div>
  );
};

export default Export;
