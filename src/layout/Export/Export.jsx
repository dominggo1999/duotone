import React from 'react';
import DomToImage from '@yzfe/dom-to-image';

const Export = () => {
  const downloadImage = async () => {
    const canvas = document.getElementById('final-image');

    await DomToImage.toPng(canvas).then((dataUrl) => {
      const link = document.createElement('a');
      link.download = 'my-beautiful-quote.png';
      link.href = dataUrl;
      link.click();
    });
  };

  return (
    <div>
      <button onClick={downloadImage}>Download</button>
    </div>
  );
};

export default Export;
