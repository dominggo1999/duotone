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
            <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, doloribus quidem impedit magni ullam corporis ratione recusandae? Et error nemo minus repellendus asperiores impedit repudiandae neque unde, aspernatur, necessitatibus aut blanditiis, sunt eveniet fuga. Quasi, eos quia beatae dolorem ratione cum ullam fugit, iusto pariatur hic ab, officia reiciendis ducimus eveniet eum vero rerum quisquam aliquam. Assumenda inventore quibusdam voluptatum et quas ipsum commodi. Quis excepturi modi atque. Sed fuga illo ducimus ea omnis quo enim deleniti laboriosam eaque facere quasi, vel quaerat, eos maiores repudiandae sequi doloribus, itaque blanditiis dignissimos? Dolor pariatur veniam ut aperiam quia odit velit voluptates?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Amet animi voluptatibus laboriosam aut eveniet vero cum velit fugit, perferendis asperiores? Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, nulla!</h2>
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
