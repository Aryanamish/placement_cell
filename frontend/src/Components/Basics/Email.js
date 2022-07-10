import React from 'react'
import PropTypes from 'prop-types'
const Input = ({placeHolder, label, className, inputName}) => {
  return (
    <>
        <label htmlFor="exampleInputEmail1">{label}</label>
        <input 
          type="email"
          aria-describedby="emailHelp"
          className={className} 
          name={inputName}
          placeholder={placeHolder} />
    </>
  )
}

Input.defaultProps = {
  placeHolder: "Enter A PlaceHolder Text",
  className: 'form-control',

}

Input.propTypes = {
  placeHolder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  inputName: PropTypes.string.isRequired,
}

export default Input
