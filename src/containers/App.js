import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Routing from '../routes'
import '../css/style.css';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

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
          <div className="top-logo">QA Health Logo</div>
        </Navbar>
        <Navbar dark expand="md" color="info" >
          <NavbarBrand href="/">QA Health</NavbarBrand>
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
        <div className="container-fluid" xs="12" md="8">
          <Routing />
        </div>

      </div>
    );
  }
}



export default App;
