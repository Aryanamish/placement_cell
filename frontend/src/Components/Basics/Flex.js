import React from 'react'

const Flex = (props) => {
  return (
    <div className='d-flex flex-wrap'>
      {props.children}
    </div>
  )
}

export default Flex
