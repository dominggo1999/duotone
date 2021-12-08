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
  const { image, updateValue } = useContext(CanvasContext);
  const [loading, setLoading] = useState();
  const [error, setError] = useState('');
  const [showModal, setShowModal] = useState();

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

    const canvas = document.getElementById('final-image');
    await DomToImage.toPng(canvas, { cacheBust: true })
      .then((dataUrl) => {
        const link = document.createElement('a');
        link.download = 'my-beautiful-image.png';
        link.href = dataUrl;
        link.click();
        setLoading(false);
      })
      .catch((err) => {
        proxy(image.src);
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
