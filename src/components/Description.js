import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { setDescription } from '../actionsAndReducers/ticket'
const Description = ({ticket, setDescription}) => (
  <div>
  <div> hello ticket {JSON.stringify(ticket)} </div>
  <textarea onBlur={(event) => setDescription(event.target.value)}
  defaultValue = {ticket.decription}/>
  <Link to ='/issue' className = 'btn btn-secondary'>Submit</Link>
  </div>

)
const mapStateToProps = (state) => ({
  ticket: state.ticket
})
const mapActionToProps = (
  {
    setDescription
  }
)
export default connect(mapStateToProps, mapActionToProps)(Description)
