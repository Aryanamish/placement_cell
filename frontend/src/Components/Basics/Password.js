import React from 'react'

const Password = ({placeHolder, label, inputName}) => {
  return (
    <>
        <label htmlFor={inputName}>{label}</label>
        <input 
          type="password"
          className="form-control" 
          name={inputName}
          placeholder={placeHolder} />
    </>
    )
}

export default Password
