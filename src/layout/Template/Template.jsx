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

const colors = [
  {
    color1: '#00007E',
    color2: '#6AFF7F',
    name: 'Spotify',
  },
  {
    color1: '#682218',
    color2: '#F8BE3D',
    name: 'Yeah',
  },
  {
    color1: '#290900',
    color2: '#FFEFB3',
    name: 'Brownies',
  },
  {
    color1: '#8682D9',
    color2: '#DEFCFE',
    name: 'RedBlack',
  },
  {
    color1: '#4693AA',
    color2: '#EF009E',
    name: 'RedBlack',
  },
  {
    color1: '#91CFF8',
    color2: '#FFFFFF',
    name: 'RedBlack',
  },
];

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
    updateValue,
  } = useContext(CanvasContext) || {};

  // VITE BUG, need to do this to prevent error on development
  if(!CanvasContext) {
    return null;
  }

  const changeColors = (theme) => {
    updateValue('wrapper', 'bg', theme.color2);
    updateValue('foreground', 'bg', theme.color1);
  };

  return useMemo(() => {
    return (
      <TemplateWrapper>
        {
          colors && colors.map((i) => {
            const frames = createKeyFrames();
            const scaleTime = 10 + Math.ceil(Math.random() * 20);
            const rotateTime = 30 + Math.ceil(Math.random() * 100);

            return (
              <TemplateItem key={short.generate()}>
                <ColorPreview>
                  <Blob
                    onClick={() => changeColors(i)}
                    c1={i.color1}
                    c2={i.color2}
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
  }, [colors]);
};

export default Template;
