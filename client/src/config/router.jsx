import React from 'react'
import { Switch, Route } from 'react-router-dom'

import UserEntries from '../features/user-entries'
import CreateUserEntry from '../features/user-entries/create'
import ShowUserEntry from '../features/user-entries/show'
import EditUserEntry from '../features/user-entries/edit'

const Router = () => (
  <Switch>
    <Route exact path='/' component={UserEntries} />
    <Route exact path='/user-entries/new' component={CreateUserEntry} />
    <Route exact path='/user-entries/:id' component={ShowUserEntry} />
    <Route exact path='/user-entries/:id/edit' component={EditUserEntry} />
  </Switch>
)

export default Router