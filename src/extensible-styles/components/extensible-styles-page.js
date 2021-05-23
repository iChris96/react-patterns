import React from 'react';
import PropTypes from 'prop-types';
import './styles.css'


const CustomButton = ({
  name, type = 'button', onClick, className = 'btn', style = {}, children
}) => {

  return (
    <button
      name={name}
      type={type}
      onClick={onClick}
      style={style}
      className={className}

    >{children}</button>
  )
}

CustomButton.propTypes = {
  type: PropTypes.oneOf(['button', 'submit']).isRequired,
  children: PropTypes.node.isRequired,
  name: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
  style: PropTypes.object,
};

export const ExtensibleStylesPage = () => {

  const onClick = () => {
    console.log('clicked')
  }

  return (
    <>
      <h2>Extensible Styles</h2>
      <CustomButton
        type='button'
        onClick={onClick}
        name='btn'
        className='btn coral-btn'
      >Click me!</CustomButton>

      <br />
      <CustomButton
        type='button'
        onClick={onClick}
        name='btn'
        className='btn red-btn'
        style={{ color: 'white', backgroundColor: 'blue' }}
      >Click me!</CustomButton>

      <br />
      <CustomButton
        type='button'
        onClick={onClick}
        name='btn'
      >Click me!</CustomButton>
    </>
  )
};
