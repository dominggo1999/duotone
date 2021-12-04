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
import { presets } from '../../config/presets';

const generateBorder = (s1, s2) => {
  return `${s2 + Math.ceil(Math.random() * (s1 - s2))}%`;
};

const createPoints = () => {
  const f1 = generateBorder(40, 33);
  const f2 = generateBorder(67, 60);
  const f3 = generateBorder(64, 42);
  const f4 = generateBorder(58, 30);
  const f5 = generateBorder(64, 30);
  const f6 = generateBorder(65, 30);
  const f7 = generateBorder(70, 35);
  const f8 = generateBorder(70, 36);

  return `${f1} ${f2} ${f3} ${f4} / ${f5} ${f6} ${f7} ${f8}`;
};

const createKeyFrames = () => {
  const frames = [];

  for (let i = 0; i < 5; i += 1) {
    frames.push(createPoints());
  }

  return frames;
};

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
          presets && presets.map((i) => {
            const { foreground, wrapper } = i.settings;

            const frames = createKeyFrames();
            const scaleTime = 10 + Math.ceil(Math.random() * 20);
            const rotateTime = 30 + Math.ceil(Math.random() * 100);

            return (
              <TemplateItem
                onClick={() => changeColors(i.settings)}
                key={short.generate()}
              >
                <ColorPreview>
                  <Blob
                    c1={foreground.bg}
                    c2={wrapper.bg}
                    frames={frames}
                    scaleTime={scaleTime}
                    rotateTime={rotateTime}
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
  }, [state]);
};

export default Template;
