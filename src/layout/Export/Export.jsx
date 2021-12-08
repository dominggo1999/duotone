import React, { useContext, useState } from 'react';
import DomToImage from '@yzfe/dom-to-image';
import { Portal } from 'react-portal';
import { CanvasContext } from '../../context/Canvas.context';
import {
  ExportButton, ExportSection, Spinner, Backdrop,
} from './Export.style';
import OutputCode from '../../atom/OutputCode/OutputCode';
import Message from '../Message/Message';

const proxyUrl = import.meta.env.VITE_APP_IMAGE_PROXY;

const Export = () => {
  const { image: img, wrapper, updateValue } = useContext(CanvasContext);
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState();

  const generateImage = async () => {
    const canvas = document.getElementById('final-image');

    const clonedCanvas = canvas.cloneNode(true);
    const image = clonedCanvas.querySelector('img');

    const realWidth = image.naturalWidth;
    const realHeight = image.naturalHeight;
    const canvasWidth = canvas.clientWidth;

    const scale = realWidth / canvasWidth;
    const scaledPadding = wrapper.spacing * scale;

    clonedCanvas.style.position = 'absolute';
    clonedCanvas.style.top = 0;
    clonedCanvas.style.zIndex = -1;
    clonedCanvas.style.transform = 'scale(1)';
    clonedCanvas.style.padding = `${scaledPadding}px`;
    clonedCanvas.style.width = `${realWidth}px`;
    clonedCanvas.style.height = `${realHeight}px`;
    image.style.width = `${realWidth - scaledPadding}px`;
    image.style.height = `${realHeight - (scaledPadding * 2)}px`;
    image.style.maxHeight = `${realHeight - (scaledPadding * 2)}px`;
    image.style.filter = `grayscale(100%) contrast(${img.contrast}) blur(${img.blur * scale}px) brightness(${img.brightness})`;
    document.querySelector('#capsule').appendChild(clonedCanvas);
    return { canvas: clonedCanvas, scaled: true };
  };

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
        }).finally(() => {
          setLoading(false);
        });
    }
  };

  const downloadImage = async () => {
    setLoading(true);

    const { canvas, scaled } = await generateImage();

    await DomToImage.toPng(canvas, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-beautiful-image.png';
        link.href = dataUrl;
        link.click();
        setLoading(false);
      })
      .catch((err) => {
        proxy(img.src);
      }).finally(() => {
        if(scaled) {
          canvas.remove();
        }
      });
  };

  return (
    <ExportSection>
      <ExportButton onClick={downloadImage}> {loading ? <Spinner /> : 'Download as PNG' }</ExportButton>
      <ExportButton onClick={() => setShowModal(true)}>HTML and CSS Code</ExportButton>

      {
        showModal
        && (
          <Portal>
            <Backdrop onClick={() => setShowModal(false)}>
            </Backdrop>
            <OutputCode closeModal={setShowModal} />
          </Portal>
        )
      }

      {error && <p>{error}</p> }
      <Message />
    </ExportSection>
  );
};

export default Export;
