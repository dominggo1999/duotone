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
import useSizes from '../../hooks/useSizes';
import SettingsMobile from '../SettingsMobile/SettingsMobile';
import Export from '../Export/Export';

// Panel
import Template from '../Template/Template';
import Settings from '../Settings/Settings';

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
  const { isMedium } = useSizes();

  const watchIndex = (index) => {
    if(index === 1) {
      console.log('yeah');
    }
  };

  return (
    <SidebarWrapper>
      {/* Brand */}
      <Brand />

      <Tabs
        defaultIndex={1}
        onSelect={watchIndex}
      >
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
            <Template />
          </TabPanel>
          <TabPanel>
            {isMedium ? <Settings /> : <SettingsMobile /> }
          </TabPanel>
          <TabPanel>
            <h2>Any content 3</h2>
          </TabPanel>
          <TabPanel>
            {/* Just for testing */}
            <Export />
          </TabPanel>
        </PanelWrapper>
      </Tabs>
    </SidebarWrapper>
  );
};

export default Sidebar;
