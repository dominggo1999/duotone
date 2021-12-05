/* eslint-disable no-case-declarations */
import React, { useReducer, createContext } from 'react';
import produce from 'immer';
import { presets } from '../config/presets';

const index = presets.map((i) => i.name).indexOf('spotify');

const initialPreset = presets[index].settings;
initialPreset.image.src = 'https://picsum.photos/1000?image=874';

const initialState = {
  ...initialPreset,
  clientImageName: '',
  pexelsImages: [],
};

export const CanvasContext = createContext();

const reducer = (state = initialState, action) => {
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

      case 'UPDATE_CLIENT_IMAGE_NAME':
        draft.clientImageName = action.payload;
        return;

      case 'SAVE_PEXELS_RESULTS':
        draft.pexelsImages = action.payload;
        return;

      default:
        return initialState;
    }
  });
};

const CanvasProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

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

  const updateClientImageName = (fileName) => {
    dispatch({
      type: 'UPDATE_CLIENT_IMAGE_NAME',
      payload: fileName,
    });
  };

  const savePexelsResults = (photos) => {
    dispatch({
      type: 'SAVE_PEXELS_RESULTS',
      payload: photos,
    });
  };

  const value = {
    ...state,
    updateValue,
    usePreset,
    updateClientImageName,
    savePexelsResults,
  };

  return (
    <CanvasContext.Provider value={value}>
      {children}
    </CanvasContext.Provider>
  );
};

export default CanvasProvider;
