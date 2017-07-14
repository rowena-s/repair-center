import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { setCategory } from '../actionsAndReducers/ticket'
const Category = ({ticket, setCategory}) => (
  <div>
  <div> hello ticket {JSON.stringify(ticket)} </div>
  {['iPhone','Macbook','iPad'].map((category, index) => (
    // <Link to ='/model' key={index} className={`btn btn-secondary d-block ${category == ticket.category ? 'active': ''}`} onClick={() => setCategory(category)}>{category}</Link>
    <Link to ='/model' key={index} className='btn btn-secondary d-block' onClick={() => setCategory(category)}>{category}</Link>
  ))}
  </div>
  // <Link to ='#' className = 'btn btn-secondary d-block' onClick={() => setCategory('iPhone')}>Iphone</Link>
  // <Link to ='#' className = 'btn btn-secondary d-block' onClick={() => setCategory('Macbook')}>macbook</Link>
  // <Link to ='#' className = 'btn btn-secondary d-block' onClick={() => setCategory('iPad')}>Ipad</Link>

)
const mapStateToProps = (state) => ({
  ticket: state.ticket
})
const mapActionToProps = (
  {
    setCategory
  }
)
export default connect(mapStateToProps, mapActionToProps)(Category)
