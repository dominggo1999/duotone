import React, { useState, useRef, useContext } from 'react';
import { HexColorPicker, HexColorInput } from 'react-colorful';
import {
  ColorPickerWrapper, TogglePickerButton, Title, Symbol,
} from './ColorPicker.style';
import useClickOutside from '../../hooks/useClickOutside';
import { CanvasContext } from '../../context/Canvas.context';

const ColorPickerDesktop = ({
  label, value, element, control,
}) => {
  const ref = useRef(null);
  const [show, setShow] = useState(false);

  const { updateValue } = useContext(CanvasContext);

  const changeColor = (val) => {
    updateValue(element, control, val);
  };

  useClickOutside(ref, () => setShow(false));

  return (
    <>
      <Title>{label}</Title>
      <ColorPickerWrapper ref={ref}>
        <TogglePickerButton
          style={{
            backgroundColor: value,
          }}
          onClick={() => setShow(!show)}
        />
        <Symbol>#</Symbol>
        <HexColorInput
          color={value}
          onChange={changeColor}
        />
        {
      show
        && (
        <HexColorPicker
          color={value}
          onChange={changeColor}
        />
        )
      }
      </ColorPickerWrapper>
    </>
  );
};

export default ColorPickerDesktop;
