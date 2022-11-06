import React from 'react'
import PropTypes from 'prop-types'
const Input = (prop) => {
  return (
    <>
        <input value={prop.value} onChange={e=>prop.setValue(e.target.value)} {...prop} />
    </>
  )
}

Input.defaultProps = {
  className: 'form-control',

}


export default Input;
