import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, Page404, Ask, ContactUs, Topic,LoginSignup } from '../containers'

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ask" component={Ask} />
    <Route exact path="/Topic" component={Topic}></Route>
    <Route exact path="/contactus" component={ContactUs} />
    <Route exact path="/login" component={LoginSignup} />
    <Route component={Page404} />
  </Switch>
)