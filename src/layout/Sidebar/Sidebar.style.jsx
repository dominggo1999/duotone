import tw, { styled } from 'twin.macro';

import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from 'react-tabs';

export const SidebarWrapper = styled.div`
  ${tw`
    h-[300px]
    md:h-full 
    md:w-[400px]
    bg-primary 
    pt-5
    px-4
    md:py-5 
    md:px-6 
    overflow-hidden
  `}
`;

export const Tabs = styled(UnstyledTabs)`
  ${tw`
    h-full
    flex 
    flex-col-reverse 
    justify-between
    md:flex-col
    md:justify-start 
  `}
`;

export const TabList = styled(UnstyledTabList)`
  ${tw`
    flex 
    justify-between 
    py-2
    md:py-5
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
    w-[60px]
    h-[60px]
    rounded-lg 
    cursor-pointer 
    p-2
  `}

  transition: all ease-in-out 100ms ;

  svg{
    ${tw`text-xl mb-2`}
  }

  &.selected {
    ${tw`bg-secondary `}
  }
`;

export const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: 'selected' })`
  ${tw`
    hidden
  `}

  &.selected {
    ${tw`
      block 
      md:pr-2
    `}
  }
`;

Tab.tabsRole = 'Tab';
Tabs.tabsRole = 'Tabs';
TabPanel.tabsRole = 'TabPanel';
TabList.tabsRole = 'TabList';

export const TabLabel = styled.span`
  ${tw`
    text-[12px]
  `}
`;