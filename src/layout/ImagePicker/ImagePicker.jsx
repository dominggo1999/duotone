import React from 'react';
import { FiLayers } from 'react-icons/fi';
import FilePicker from '../../atom/FilePicker/FilePicker';
import {
  Tab, Tabs, TabList, TabPanel,
  ImagePickerWrapper, TabLabel,
} from './ImagePicker.style';
import PanelWrapper from '../PanelWrapper/PanelWrapper';

const icons = [
  {
    id: 'FiLayers',
    icon: FiLayers,
    name: 'Template',
  },
  {
    id: 'customize',
    icon: FiLayers,
    name: 'Settings',
  },
];

const ImagePicker = () => {
  return (
    <ImagePickerWrapper>
      <Tabs defaultIndex={0}>
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque velit deserunt excepturi alias porro unde nam at. Totam, delectus inventore? Aspernatur voluptatibus ipsum totam temporibus aliquam, odit eaque, explicabo est mollitia hic eius minima quo eum quod saepe sapiente ad facere nobis, fugit incidunt expedita iure. Minima minus porro, quisquam dolorum autem aliquid itaque doloremque? Quas quaerat doloremque hic ducimus nam quidem quos voluptatem et placeat repudiandae ipsam necessitatibus vel reiciendis, maiores magnam modi consectetur sed numquam! Eius, voluptate eaque. Laudantium voluptatibus aspernatur praesentium quis rem. Aliquam libero quis suscipit asperiores omnis neque ullam dicta! Delectus officia accusantium sint. Rem?
          </TabPanel>
          <TabPanel>
            panel 2
          </TabPanel>
        </PanelWrapper>
      </Tabs>
    </ImagePickerWrapper>
  );
};

export default ImagePicker;
