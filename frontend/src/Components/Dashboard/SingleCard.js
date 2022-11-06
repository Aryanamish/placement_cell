import React from 'react'
import { Link } from 'react-router-dom'
import Center from '../Basics/Center'
import './style.css'
const card_style = {
  width: '18rem',
  minHeight: '200px',
  cursor:'pointer',
}

const SingleCard = (props) => {
    
  return (

    <div className="card  m-2" style={card_style} >
      <div className="card-body">
          <h5 className="card-title">{props.detail.company_name}</h5>
          <h6 className="card-subtitle mb-2 text-muted">{props.detail.job_title}</h6>
          <p className="card-text">{props.detail.desc}</p>
          {/* <a href="#" className="card-link">{props.detail.view}</a> */}
          <Link to={'jobs/' + props.detail.slug} className="card-link">View More...</Link>
          <Link to={'/job/edit/' + props.detail.slug} className={'card-link'}>Edit</Link>
      </div>
    </div>  

  )
}

const AddCard = ()=>{
  const dotted_circle = {
    border: '1px dotted black',
    opacity:0.8,
    borderRadius: '50%',
    transform: "scale(4.7)",
    padding: '5px',
    
    width:'25px',
    height: '25px',
    display: 'flex',
    justifyItems: 'center',
    alignItems: 'center',
    ":hover": {
      backgroundColor: 'green',
    }
  }
  return (
    <>
      <div className="card  m-2 add_card" style={card_style} onClick={()=>window.location.replace('/job/add')} >
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