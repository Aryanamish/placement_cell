import React from 'react'
import PropTypes from 'prop-types'

const Email = ({placeholder, label, className, inputName, type}) => {
  return (
    <>
        <label htmlFor="exampleInputEmail1">{label}</label>
        <input 
          type={type}
          aria-describedby="emailHelp"
          className={className} 
          name={inputName}
          id={inputName}
          placeholder={placeholder} />
    </>
  )
}

Email.defaultProps = {
  placeholder: "Enter A placeholder Text",
  className: 'form-control',
  type: 'text'

}

Email.propTypes = {
  placeholder: PropTypes.string,
  className: PropTypes.string,
  label: PropTypes.string,
  inputName: PropTypes.string.isRequired,
}

export default Email;
