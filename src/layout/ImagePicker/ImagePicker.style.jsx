import tw, { styled } from 'twin.macro';

import {
  Tab as UnstyledTab,
  TabList as UnstyledTabList,
  Tabs as UnstyledTabs,
  TabPanel as UnstyledTabPanel,
} from 'react-tabs';

export const ImagePickerWrapper = styled.div`
  ${tw` 
    flex 
    flex-col 
    h-full
  `}
`;

export const Tabs = styled(UnstyledTabs)`
  ${tw`
    hidden
    flex 
    flex-col-reverse 
    justify-between
    md:flex-col
    md:justify-start  
    h-full
  `}
`;

export const TabList = styled(UnstyledTabList)`
  ${tw`
    flex  
  `}

  gap: calc((100% - 240px)/3);
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
    ${tw`text-accent bg-black `}
  }
`;

export const TabPanel = styled(UnstyledTabPanel).attrs({ selectedClassName: 'selected' })`
  ${tw`
    hidden 
  `}

  &.selected {
    ${tw`   
      flex
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
