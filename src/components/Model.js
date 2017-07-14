import React from 'react'
import { Link } from 'react-router-dom'
import {connect} from 'react-redux'
import { setModel } from '../actionsAndReducers/ticket'
const Model = ({ticket, setModel}) => (
  <div>
  {categoryToModel(ticket.category).map((model, index) => (
    <Link to ='/model' key={index} className = 'btn btn-secondary d-block' onClick={() => setModel(model)}>{model}</Link>
  ))}
  </div>
)
const model = {
  iPhone: ['iPhone6s','iPhone7','iPhone6s Plus','iPhone7 Plus'],
  Macbook: ['Macbook Pro', 'Macbook Air'],
  iPad: ['iPad Mini', 'ipadPro','ipad']
}

const categoryToModel = (category) => {
  return model[category] || model.iPhone
}
const mapStateToProps = (state) => ({
  ticket: state.ticket
})
const mapActionToProps = (
  {
    setModel
  }
)
export default connect(mapStateToProps, mapActionToProps)(Model)
