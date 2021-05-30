import React, { useState } from 'react';


const MyInput = () => {
  const [val, setVal] = useState('') //we cannot access to the state from outside

  const handleOnChange = ({ target: { value } }) => {
    setVal(value)
  }

  return (
    <input value={val} onChange={handleOnChange} />
  )
}


const MyControlledInput = ({ value, setValue }) => {

  const handleOnChange = ({ target: { value } }) => {
    setValue(value)
  }

  return (
    <input value={value} onChange={handleOnChange} />
  )
}


export const ControlPropsPage = () => {

  const [val, setVal] = useState('') //now we can handle the state from outside

  return (
    <>
      <h2>No - Control Props</h2>
      <MyInput />
      <button onClick={() => { console.log('nothing to do..') }}>clean input</button>
      <hr />
      <MyControlledInput value={val} setValue={(value) => { setVal(value) }} />
      <button onClick={() => { setVal('') }}>clean input</button>
    </>
  )
};
