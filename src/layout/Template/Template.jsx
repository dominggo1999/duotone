import React, { useContext, useMemo } from 'react';
import short from 'short-uuid';
import {
  TemplateItem,
  TemplateWrapper,
  TemplateName,
  ColorPreview,
  Blob,
} from './Template.style';
import { CanvasContext } from '../../context/Canvas.context';
import { presets as presetsWithRandomShapes } from '../../config/presets';

const Template = () => {
  // VITE BUG, need to do this to prevent error on development
  if(!CanvasContext) {
    return null;
  }
  const {
    usePreset, state,
  } = useContext(CanvasContext) || {};

  // VITE BUG, need to do this to prevent error on development
  if(!CanvasContext) {
    return null;
  }

  const changeColors = (preset) => {
    usePreset(preset);
  };

  return useMemo(() => {
    return (
      <TemplateWrapper>
        {
          presetsWithRandomShapes && presetsWithRandomShapes.slice(0, 20).map((i) => {
            const { foreground, wrapper } = i.settings;

            return (
              <TemplateItem
                onClick={() => changeColors(i.settings)}
                key={short.generate()}
              >
                <ColorPreview>
                  <Blob
                    frames={i.frames}
                    scaleTime={i.scaleTime}
                    rotateTime={i.rotateTime}
                    style={{
                      backgroundImage: `linear-gradient(${foreground.bg},${wrapper.bg})`,
                    }}
                  />
                </ColorPreview>
                <TemplateName>
                  {i.name}
                </TemplateName>
              </TemplateItem>
            );
          })
        }
      </TemplateWrapper>
    );
  }, []);
};

export default Template;
