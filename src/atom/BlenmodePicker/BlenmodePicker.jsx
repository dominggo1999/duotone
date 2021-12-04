import React, { useMemo, useContext } from 'react';
import Select from 'react-select';
import { BlenmodePickerWrapper, Title } from './BlenmodePicker.style';
import { blendModes } from '../../constants/blenModes';
import { CanvasContext } from '../../context/Canvas.context';

const BlenmodePicker = ({
  label, value, element, control,
}) => {
  const { updateValue } = useContext(CanvasContext);
  const index = blendModes.map((i) => i.value).indexOf(value);
  const defaultValue = blendModes[index];

  const handleChange = (e) => {
    updateValue(element, control, e.value);
  };

  return useMemo(() => {
    console.log('Gegewa');

    return (
      <BlenmodePickerWrapper>
        <Title>
          {label}
        </Title>
        <Select
          defaultValue={defaultValue}
          onChange={handleChange}
          options={blendModes}
          isSearchable={false}
          classNamePrefix="react-select"
        />
      </BlenmodePickerWrapper>
    );
  }, [value]);
};

export default BlenmodePicker;
