/* eslint-disable no-case-declarations */
import React, { useEffect, useReducer, createContext } from 'react';

const initialState = {
  image: {
    blendMode: 'multiply',
    src: 'https://c.tenor.com/q8U6frZyn_0AAAAC/kato.gif',
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
    bg: ' #08b76c',
  },
};

export const CanvasContext = createContext();

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'UPDATE_VALUE':
      const newValue = {
        [action.payload.property]: action.payload.value,
      };

      return {
        ...state,
        [action.payload.element]: {
          ...state[action.payload.element],
          ...newValue,
        },
      };
    case 'USE_TEMPLATE':
      return {
        ...state,
        ...action.payload,
      };

    default:
      return initialState;
  }
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

  const useTemplate = (template) => {
    dispatch({
      type: 'USE_TEMPLATE',
      payload: template,
    });
  };

  const value = {
    ...state,
    updateValue,
    useTemplate,
  };

  return (
    <CanvasContext.Provider value={value}>
      {children}
    </CanvasContext.Provider>
  );
};

export default CanvasProvider;
