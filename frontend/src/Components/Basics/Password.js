import React from 'react'

const Password = ({placeholder, label, inputName}) => {
  return (
    <>
        <label htmlFor={inputName}>{label}</label>
        <input 
          type="password"
          className="form-control" 
          name={inputName}
          placeholder={placeholder} />
    </>
    )
}

export default Password
