import React from 'react';
import { FiLayers } from 'react-icons/fi';
import { GiSettingsKnobs } from 'react-icons/gi';
import { BsImages } from 'react-icons/bs';
import { RiFolderUploadFill } from 'react-icons/ri';
import {
  Tab, Tabs, TabList, TabPanel,
  SidebarWrapper, TabLabel,
} from './Sidebar.style';
import PanelWrapper from '../PanelWrapper/PanelWrapper';
import Brand from '../Brand/Brand';

// Panel
import Template from '../Template/Template';

const icons = [
  {
    id: 'FiLayers',
    icon: FiLayers,
    name: 'Template',
  },
  {
    id: 'customize',
    icon: GiSettingsKnobs,
    name: 'Settings',
  },
  {
    id: 'image',
    icon: BsImages,
    name: 'Image',
  },
  {
    id: 'export',
    icon: RiFolderUploadFill,
    name: 'Export',
  },
];

const Sidebar = () => {
  return (
    <SidebarWrapper>
      {/* Brand */}
      <Brand />

      {/* Tab Navigation */}
      <Tabs>
        {/* Tab List */}
        <TabList>
          {
            icons.map((i) => {
              const { icon: Icon, name } = i;
              return (
              // Tab Item
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
            <Template />
          </TabPanel>
          <TabPanel>
            <h2>Any content 2</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            <h2>Any content 4</h2>
          </TabPanel>
        </PanelWrapper>
      </Tabs>
    </SidebarWrapper>
  );
};

export default Sidebar;
