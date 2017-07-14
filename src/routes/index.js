// We only need to import the modules necessary for initial render
import CoreLayout from '../components/PageLayout'
import React from 'react'
import { Route } from 'react-router'
import Home from '../components/Home'
import Category from '../components/Category'
import Model from '../components/Model'
import Description from '../components/Description'

export default (
  <CoreLayout>
    <Route exact path='/' component={Home} />
    <Route exact path='/category' component={Category} />
    <Route exact path='/model' component={Model} />
    <Route exact path='/issue' component={Description} />
  </CoreLayout>
)
