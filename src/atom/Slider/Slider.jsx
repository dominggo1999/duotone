import React, { useContext, useMemo } from 'react';
import { Range, getTrackBackground } from 'react-range';
import {
  SliderBar,
} from './Slider.style';
import { colors } from '../../constants/colors';
import { CanvasContext } from '../../context/Canvas.context';

import { Info, LabelName, Value } from '../../shared/SettingsSubHeader';

const Slider = ({
  step,
  min,
  max,
  values,
  label,
  element,
  control,
}) => {
  const { updateValue } = useContext(CanvasContext);

  const handleChange = (val) => {
    updateValue(element, control, val);
  };

  return useMemo(() => {
    return (
      <SliderBar>
        <Info>
          <LabelName>{label}</LabelName>
          <Value>{values[0]}</Value>
        </Info>
        <Range
          step={step}
          min={min}
          max={max}
          values={values}
          onChange={handleChange}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              className="wrapper"
              role="button"
            >
              <div
                ref={props.ref}
                className="track"
                style={{
                  background: getTrackBackground({
                    values,
                    colors: [colors.accent, '#ccc'],
                    min,
                    max,
                  }),
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              className="thumb"
            >
            </div>
          )}
        />
      </SliderBar>
    );
  }, [values[0]]);
};

export default Slider;
