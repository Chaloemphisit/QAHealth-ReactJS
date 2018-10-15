import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {Home, Page404, Ask,ContactUs} from '../containers'

//const ContactUs = () => <h1 >อย่าพึ่งรีบดูสิ!!....กำลังทำอยู่</h1>
const LoginSignup = () => <h1 >อย่าพึ่งรีบดูสิ!!....กำลังทำอยู่</h1>

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ask" component={Ask} />
    <Route exact path="/contactus" component={ContactUs} />
    <Route exact path="/login" component={LoginSignup} />
    <Route component={Page404} />
  </Switch>
)