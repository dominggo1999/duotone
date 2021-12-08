import tw, { styled } from 'twin.macro';

import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from 'react-tabs';

export const SettingsMobileWrapper = styled.div`
  ${tw`  
    h-full 
    absolute 
    inset-0 
  `}
`;

export const Tabs = styled(UnstyledTabs)`
  ${tw` 
    h-full 
    flex 
    flex-col-reverse
    justify-between 
    px-4 
  `}
`;

export const TabList = styled(UnstyledTabList)`
  ${tw`   
    flex   
    justify-between  
    bg-primary
  `}
`;
export const TabLabel = styled.span`
  ${tw`
    text-[12px]
  `}
`;

export const Tab = styled(UnstyledTab).attrs({
  selectedClassName: 'selected',
  disabledClassName: 'disabled',
})`
  ${tw`
    flex 
    flex-col 
    justify-center 
    items-center
    text-center 
    rounded-lg 
    cursor-pointer 
    p-2  
  `}

  width: 60px; 
  height: 60px; 
  transition: all ease-in-out 100ms ;

  svg{
    ${tw`text-xl mb-2`}
  }

  &.selected {
    ${tw`text-accent`}
  }
`;

export const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: 'selected' })`
  ${tw`
    hidden
  `}

  &.selected {
    ${tw` 
      block  
      h-full 
    `}
  }
`;

Tab.tabsRole = 'Tab';
Tabs.tabsRole = 'Tabs';
TabPanel.tabsRole = 'TabPanel';
TabList.tabsRole = 'TabList';
