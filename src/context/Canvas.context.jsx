/* eslint-disable no-case-declarations */
import React, { useReducer, createContext } from 'react';
import produce from 'immer';
import { presets } from '../config/presets';

const index = presets.map((i) => i.name).indexOf('spotify');

const spotify = presets[index].settings;
spotify.image.src = 'https://picsum.photos/1000?image=874';

const initialState = {
  image: {
    blendMode: 'multiply',
    src: 'https://picsum.photos/1000?image=874',
    opacity: 80,
    blur: 0,
    brightness: 1,
    contrast: 1,
  },
  foreground: {
    bg: '#0a3463',
    blendMode: 'lighten',
  },
  wrapper: {
    spacing: '15',
    scale: 1,
    bg: '#08b76c',
  },
};

export const CanvasContext = createContext();

const reducer = (state = spotify, action) => {
  return produce(state, (draft) => {
    switch (action.type) {
      case 'UPDATE_VALUE':
        draft[action.payload.element][action.payload.property] = action.payload.value;
        return;

      case 'USE_PRESET':
        draft.image = action.payload.image;
        draft.foreground = action.payload.foreground;
        draft.wrapper = action.payload.wrapper;

        draft.image = { ...draft.image, src: state.image.src };
        return;

      default:
        return spotify;
    }
  });
};

const CanvasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, spotify);

  const updateValue = (element, property, value) => {
    dispatch({
      type: 'UPDATE_VALUE',
      payload: {
        element,
        property,
        value,
      },
    });
  };

  const usePreset = (template) => {
    dispatch({
      type: 'USE_PRESET',
      payload: template,
    });
  };

  const value = {
    ...state,
    updateValue,
    usePreset,
  };

  return (
    <CanvasContext.Provider value={value}>
      {children}
    </CanvasContext.Provider>
  );
};

export default CanvasProvider;
