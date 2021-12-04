import React, { useContext } from 'react';
import Slider from '../../atom/Slider/Slider';
import { SettingsWrapper } from './Settings.style';
import { CanvasContext } from '../../context/Canvas.context';
import ColorPickerDesktop from '../../atom/ColorPickerDesktop/ColorPickerDesktop';
import BlenmodePicker from '../../atom/BlenmodePicker/BlenmodePicker';

const Settings = () => {
  const {
    image, wrapper, foreground,
  } = useContext(CanvasContext);

  return (
    <SettingsWrapper>
      <ColorPickerDesktop
        label="Image Color"
        value={foreground.bg}
        element="foreground"
        control="bg"
      />
      <BlenmodePicker
        label="Image Blend Mode"
        value={image.blendMode}
        element="image"
        control="blendMode"
      />
      <ColorPickerDesktop
        label="Background Color"
        value={wrapper.bg}
        element="wrapper"
        control="bg"
      />
      <BlenmodePicker
        label="Background Blend Mode"
        value={foreground.blendMode}
        element="foreground"
        control="blendMode"
      />
      <Slider
        step={0.01}
        min={0.2}
        max={1.5}
        values={[wrapper.scale]}
        label="Zoom"
        element="wrapper"
        control="scale"
      />
      <Slider
        step={1}
        min={0}
        max={100}
        values={[wrapper.spacing]}
        label="Spacing"
        element="wrapper"
        control="spacing"
      />
      <Slider
        step={1}
        min={0}
        max={100}
        values={[image.opacity]}
        label="Image Opacity"
        element="image"
        control="opacity"
      />
      <Slider
        step={0.5}
        min={0}
        max={10}
        values={[image.blur]}
        label="Blur"
        element="image"
        control="blur"
      />
      <Slider
        step={0.01}
        min={0.5}
        max={1.3}
        values={[image.brightness]}
        label="Brightness"
        element="image"
        control="brightness"
      />
      <Slider
        step={0.01}
        min={0.5}
        max={2}
        values={[image.contrast]}
        label="Contrast"
        element="image"
        control="contrast"
      />
    </SettingsWrapper>
  );
};

export default Settings;
