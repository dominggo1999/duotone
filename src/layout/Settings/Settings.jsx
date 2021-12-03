import React, { useState, useContext } from 'react';
import Slider from '../../atom/Slider/Slider';
import { SettingsWrapper } from './Settings.style';
import { CanvasContext } from '../../context/Canvas.context';

const Settings = () => {
  const [values, setValues] = useState([20]);
  const {
    updateValue, image, foreground, wrapper,
  } = useContext(CanvasContext);

  const changeZoom = (val) => {
    updateValue('wrapper', 'scale', val);
  };

  const changeSpacing = (val) => {
    updateValue('wrapper', 'spacing', val);
  };

  const changeBrightness = (val) => {
    updateValue('image', 'brightness', val);
  };

  const changeBlur = (val) => {
    updateValue('image', 'blur', val);
  };

  const changeContrast = (val) => {
    updateValue('image', 'contrast', val);
  };

  const changeImageOpacity = (val) => {
    updateValue('image', 'opacity', val);
  };

  return (
    <SettingsWrapper>
      <Slider
        step={0.01}
        min={0.2}
        max={1.5}
        values={[wrapper.scale]}
        onChange={changeZoom}
        label="Zoom"
      />
      <Slider
        step={1}
        min={0}
        max={100}
        values={[wrapper.spacing]}
        onChange={changeSpacing}
        label="Spacing"
      />
      <Slider
        step={1}
        min={0}
        max={100}
        values={[image.opacity]}
        onChange={changeImageOpacity}
        label="Image Opacity"
      />
      <Slider
        step={0.01}
        min={0.5}
        max={1.3}
        values={[image.brightness]}
        onChange={changeBrightness}
        label="Brightness"
      />

      <Slider
        step={0.5}
        min={0}
        max={10}
        values={[image.blur]}
        onChange={changeBlur}
        label="Blur"
      />
      <Slider
        step={0.01}
        min={0.5}
        max={2}
        values={[image.contrast]}
        onChange={changeContrast}
        label="Contrast"
      />
    </SettingsWrapper>
  );
};

export default Settings;
