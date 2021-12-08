import React from 'react';
import { FiUpload } from 'react-icons/fi';
import { SiPexels } from 'react-icons/si';
import { AiOutlineLink } from 'react-icons/ai';
import FilePicker from '../../atom/FilePicker/FilePicker';
import {
  Tab, Tabs, TabList, TabPanel,
  ImagePickerWrapper, TabLabel,
} from './ImagePicker.style';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import ImageFinder from '../../atom/ImageFinder/ImageFinder';
import ImageFinderURLMode from '../../atom/ImageFinder/ImageFinderURLMode';

const icons = [
  {
    id: 'Upload',
    icon: FiUpload,
    name: 'Upload',
  },
  {
    id: 'customize',
    icon: SiPexels,
    name: 'Pexels',
  },
  {
    id: 'url',
    icon: AiOutlineLink,
    name: 'Url',
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
          <TabPanel>
            <ImageFinderURLMode />
          </TabPanel>
        </PanelWrapper>
      </Tabs>
    </ImagePickerWrapper>
  );
};

export default ImagePicker;
