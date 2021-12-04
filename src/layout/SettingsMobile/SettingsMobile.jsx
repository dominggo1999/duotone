import React, { useContext } from 'react';
import { FiLayers } from 'react-icons/fi';
import Slider from '../../atom/Slider/Slider';
import { CanvasContext } from '../../context/Canvas.context';
import {
  Tabs, TabList, Tab, TabPanel, SettingsMobileWrapper,
} from './SettingsMobile.style';
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
  {
    id: 'image',
    icon: FiLayers,
    name: 'Image',
  },
  {
    id: 'export',
    icon: FiLayers,
    name: 'Export',
  },
];

const SettingsMobile = () => {
  const {
    image, wrapper,
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
                </Tab>
              );
            })
            }
        </TabList>
        <PanelWrapper>
          <TabPanel>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Praesentium, in provident doloribus fuga, suscipit deserunt ea eum, aliquid at maxime officia quis quae maiores amet tempora error ducimus dolores. Cumque facilis porro sequi maiores, id veritatis suscipit provident cum libero! Mollitia possimus asperiores assumenda dolor a voluptatibus perspiciatis corporis facilis adipisci maiores sed delectus illum, dolore debitis deserunt quasi vel, non eum similique error aliquam! Minima, distinctio velit? Voluptatibus quos delectus deserunt maxime eos provident pariatur dolores enim non a quae mollitia, illo repellat ad ut aut iure. Magni officia fuga adipisci laudantium corporis cum ab tempora veniam perspiciatis nisi?
          </TabPanel>
          <TabPanel>
            panel2
          </TabPanel>
          <TabPanel>
            panel3
          </TabPanel>
          <TabPanel>
            panel4
          </TabPanel>
        </PanelWrapper>
      </Tabs>
    </SettingsMobileWrapper>
  );
};

export default SettingsMobile;
