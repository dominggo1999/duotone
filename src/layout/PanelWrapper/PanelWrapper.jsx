import React from 'react';
import { Scrollbars } from 'react-custom-scrollbars-2';
import { Panel } from './PanelWrapper.style';

const PanelWrapper = ({ children }) => {
  return (
    <Panel>
      <Scrollbars
        autoHide
        autoHideDuration={200}
        renderThumbVertical={(props) => (
          <div
            {...props}
            className="custom-scrollbar-vertical"
          />
        )}
        renderThumbHorizontal={(props) => (
          <div
            {...props}
            style={{
              display: 'none',
            }}
          />
        )}
        renderTrackHorizontal={(props) => (
          <div
            {...props}
            style={{
              display: 'none',
            }}
          />
        )}
      >
        {children}
      </Scrollbars>
    </Panel>
  );
};

export default PanelWrapper;
