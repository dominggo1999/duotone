import React, { useMemo, useContext } from 'react';
import Select from 'react-select';
import { BlenmodePickerWrapper, Title } from './BlenmodePicker.style';
import { blendModes } from '../../constants/blenModes';
import { CanvasContext } from '../../context/Canvas.context';
import { Info, LabelName } from '../../shared/SettingsSubHeader';

const BlenmodePicker = ({
  label, value, element, control, needPadding,
}) => {
  const { updateValue } = useContext(CanvasContext);
  const index = blendModes.map((i) => i.value).indexOf(value);
  const defaultValue = blendModes[index];

  const handleChange = (e) => {
    updateValue(element, control, e.value);
  };

  return useMemo(() => {
    return (
      <BlenmodePickerWrapper>
        <Info>
          <LabelName>
            {label}
          </LabelName>
        </Info>
        <Select
          defaultValue={defaultValue}
          onChange={handleChange}
          options={blendModes}
          isSearchable={false}
          classNamePrefix="react-select"
        />
        {
          needPadding
          && (
          <>
            <br />
            <br />
            <br />
            <br />
          </>
          )
        }
      </BlenmodePickerWrapper>
    );
  }, [value]);
};

export default BlenmodePicker;
