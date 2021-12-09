import React, { useContext, useState } from 'react';
import DomToImage from '@yzfe/dom-to-image';
import { Portal } from 'react-portal';
import { BiDownload } from 'react-icons/bi';
import { HiCode } from 'react-icons/hi';
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
  const [disableButton, setDisableButton] = useState(false);

  const generateImage = async () => {
    const canvas = document.getElementById('final-image');
    const displayedImage = document.getElementById('bg-image');

    const clonedCanvas = canvas.cloneNode(true);
    const image = clonedCanvas.querySelector('img');

    const realWidth = displayedImage.naturalWidth;
    const realHeight = displayedImage.naturalHeight;

    const displayedImageWidth = displayedImage.clientWidth;

    const scale = realWidth / displayedImageWidth;
    const scaledPadding = wrapper.spacing * scale;

    clonedCanvas.style.position = 'absolute';
    clonedCanvas.style.top = 0;
    clonedCanvas.style.zIndex = -1;
    clonedCanvas.style.transform = 'scale(1)';
    clonedCanvas.style.padding = `${scaledPadding}px`;
    clonedCanvas.style.width = `${realWidth + (scaledPadding * 2)}px`;
    clonedCanvas.style.height = `${realHeight + (scaledPadding * 2)}px`;
    image.style.width = `${realWidth}px`;
    image.style.height = `${realHeight}px`;
    image.style.maxHeight = `${realHeight}px`;
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
    setDisableButton(true);

    const { canvas } = await generateImage();

    await DomToImage.toPng(canvas)
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-beautiful-image.png';
        link.href = dataUrl;
        link.click();
        setLoading(false);
      })
      .catch((err) => {
        proxy(img.src);
      })
      .finally(() => {
        setDisableButton(false);
        canvas.remove();
      });
  };

  return (
    <ExportSection>
      <ExportButton
        disabled={disableButton}
        onClick={downloadImage}
      > {loading ? <Spinner /> : (
        <span>
          <BiDownload />
          Download as PNG
        </span>
      ) }
      </ExportButton>
      <ExportButton onClick={() => setShowModal(true)}>
        <span>
          <HiCode />
          HTML and CSS Code
        </span>
      </ExportButton>

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
