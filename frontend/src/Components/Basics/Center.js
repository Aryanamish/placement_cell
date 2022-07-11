import React from 'react'

const Center = (props) => {
  return (
    <>
        <div className="d-flex align-items-center mt-10 justify-content-center h-100">
          {props.border===true ? <div className="border border-primary p-5">
            {props.children}
        </div>: props.children}
        
        </div>
    </>
  )
}

export default Center
