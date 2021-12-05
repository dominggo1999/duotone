import React from 'react';
import { FiLayers } from 'react-icons/fi';
import FilePicker from '../../atom/FilePicker/FilePicker';
import {
  Tab, Tabs, TabList, TabPanel,
  ImagePickerWrapper, TabLabel,
} from './ImagePicker.style';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import ImageFinder from '../../atom/ImageFinder/ImageFinder';

const icons = [
  {
    id: 'FiLayers',
    icon: FiLayers,
    name: 'Upload',
  },
  {
    id: 'customize',
    icon: FiLayers,
    name: 'Pexels',
  },
];

const ImagePicker = () => {
  return (
    <ImagePickerWrapper>
      <Tabs defaultIndex={1}>
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
        {/* Tab Item */}
        <PanelWrapper>
          <TabPanel>
            <FilePicker />
          </TabPanel>
          <TabPanel>
            <ImageFinder />
          </TabPanel>
        </PanelWrapper>
      </Tabs>
    </ImagePickerWrapper>
  );
};

export default ImagePicker;
