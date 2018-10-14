import React from 'react'
import { Switch, Route } from 'react-router-dom'

import {Home} from '../containers'

const Ask = () => <h1 className="ml-auto">อย่าพึ่งรีบดูสิ!!....กำลังทำอยู่</h1>
const ContactUs = () => <h1 >อย่าพึ่งรีบดูสิ!!....กำลังทำอยู่</h1>
const LoginSignup = () => <h1 >อย่าพึ่งรีบดูสิ!!....กำลังทำอยู่</h1>

export default () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/ask" component={Ask} />
    <Route exact path="/contactus" component={ContactUs} />
    <Route exact path="/login" component={LoginSignup} />
  </Switch>
)