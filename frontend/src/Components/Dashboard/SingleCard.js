import React from 'react'
import Center from '../Basics/Center'

const card_style = {
  width: '18rem',
  minHeight: '200px',
}

const SingleCard = (props) => {
    
  return (

    <div className="card  m-2" style={card_style}>
      <div className="card-body">
          <h5 className="card-title">{props.detail.title}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.detail.c_name}</h6>
          <p className="card-text">{props.detail.desc}</p>
          <a href="#" className="card-link">{props.detail.view}</a>
          <a href="#" className="card-link">{props.detail.slug}</a>
      </div>
    </div>  

  )
}

const AddCard = ()=>{
  const dotted_circle = {
    border: '1px dotted grey',
    borderRadius: '50%',
    transform: "scale(4.7)",
    padding: '5px',
    
    width:'25px',
    height: '25px',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
  }
  return (
    <>
      <div className="card  m-2" style={card_style}>
        <div className="card-body">
          <Center border={false}>
          <i style={dotted_circle}>
            <i className="fa-solid fa-plus-minus fa-1x"></i>
          </i>
          </Center>
        </div>  
      </div>
    </>
  )
}

SingleCard.AddCard = AddCard;

export default SingleCard;