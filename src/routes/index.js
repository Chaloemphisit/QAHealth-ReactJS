import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { Home, Page404, Ask, ContactUs, Topic, LoginSignup, UserProfile, EditProfile } from '../containers'

export default () => (
  <Switch >
    <Route exact path="/" component={Home} />
    <Route  path="/ask" component={Ask} />
    <Route path="/topic/:id" component={Topic} />
    <Route path="/contactus" component={ContactUs} />
    <Route path="/login" component={LoginSignup} />
    <Route path="/profile/:id" component={UserProfile}/>
    <Route path="/editProfile/:id" component={EditProfile} />
    <Route component={Page404} />
  </Switch>
)