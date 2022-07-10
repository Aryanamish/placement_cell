import React from 'react'

const ButtonSubmit = ({value, inputName, className}) => {
  return (
    <>
        <button 
        name={inputName}
        id={inputName}
        type="submit" className="btn btn-primary">{value}</button>
    </>
    )
}

ButtonSubmit.defaultProps = {
  value: 'Enter Text Here',

}
export default ButtonSubmit
