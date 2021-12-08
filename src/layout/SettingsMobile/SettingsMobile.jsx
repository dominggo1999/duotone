import React, { useContext } from 'react';
import { IoIosColorPalette } from 'react-icons/io';
import { MdOutlineZoomOutMap, MdOutlineOpacity } from 'react-icons/md';
import { ImBrightnessContrast } from 'react-icons/im';
import Slider from '../../atom/Slider/Slider';
import { CanvasContext } from '../../context/Canvas.context';
import {
  Tabs, TabList, Tab, TabPanel, SettingsMobileWrapper, TabLabel,
} from './SettingsMobile.style';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import ColorPickerDesktop from '../../atom/ColorPickerDesktop/ColorPickerDesktop';
import BlenmodePicker from '../../atom/BlenmodePicker/BlenmodePicker';

const icons = [
  {
    id: 'colors',
    icon: IoIosColorPalette,
    name: 'Colors',
  },
  {
    id: 'zoom',
    icon: MdOutlineZoomOutMap,
    name: 'Zoom',
  },
  {
    id: 'effect',
    icon: MdOutlineOpacity,
    name: 'Effect',
  },
  {
    id: 'contrast',
    icon: ImBrightnessContrast,
    name: 'Contrast',
  },
];

const SettingsMobile = () => {
  const {
    image, wrapper, foreground,
  } = useContext(CanvasContext);

  return (
    <SettingsMobileWrapper>
      <Tabs>
        {/* Tab Navigation */}
        <TabList>
          {
            icons.map((i) => {
              const { icon: Icon, name } = i;
              return (
                <Tab key={i.id}>
                  <Icon />
                  <TabLabel>{name}</TabLabel>
                </Tab>
              );
            })
            }
        </TabList>
        <PanelWrapper>
          <TabPanel>
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
              value={image.blendMode}
              element="image"
              control="blendMode"
              needPadding
            />
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
          <TabPanel>
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
          </TabPanel>
        </PanelWrapper>
      </Tabs>
    </SettingsMobileWrapper>
  );
};

export default SettingsMobile;
