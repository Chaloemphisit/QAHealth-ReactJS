import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Routing from '../routes'
import '../css/style.css';
import headerLogo from '../img/header-logo.png';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { faEnvelope, faKey, faComments, faQuestion } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey, faComments,faQuestion);


class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar dark expand="md" className="navbar-default">
          <div className="top-logo"><img src={headerLogo} alt="Header Logo" height="60" /></div>
        </Navbar>
        <Navbar dark expand="md" color="info" >
          <Link exact to="/" className="link-none-underline"><NavbarBrand>QA Health</NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <Link exact to="/"><NavLink active={window.location.pathname === '/'} >หน้าหลัก</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/ask" ><NavLink active={window.location.pathname === '/ask'} >ถามหมอ</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/contactus"><NavLink active={window.location.pathname === '/contactus'} >ติดต่อเรา</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/login"><NavLink active={window.location.pathname === '/login'} >Login/Signup</NavLink></Link>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
        <div>
          <Routing />
        </div>

      </div>
    );
  }
}



export default App;
