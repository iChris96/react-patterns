import React, { useState } from 'react';

const useSlider = (initialState = { min: 1, max: 100 }) => {

  const [value, setValue] = useState(0)

  const handleChange = ({ target }) => {
    const { value } = target
    setValue(value)
  }

  const getInputProps = () => ({
    max: initialState.max,
    min: initialState.min,
    value,
    onChange: handleChange,
    type: "range"
  })

  return {
    value,
    handleChange,
    max: initialState.max,
    min: initialState.min,
    getInputProps
  }
}

export const StateInitializerPage = () => {


  //const {isSliding, value, pos, length} = useSlider(ref);
  const { value, min, max, handleChange, getInputProps } = useSlider({ max: 500, min: 1 }) //setting initialState, instead use default by custom hook

  return (
    <>
      <h2>State Initializer</h2>
      <p>Default range slider:</p>
      <input type="range" min={min} max={max} value={value} onChange={handleChange} />
      <p>range slider with props getters</p>
      <input {...getInputProps()} />
    </>
  )
};
