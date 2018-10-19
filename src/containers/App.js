import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Routing from '../routes'
import '../css/style.css';
import headerLogo from '../img/header-logo.png';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  Collapse, Navbar, NavbarToggler, NavbarBrand, Nav,
  NavItem, NavLink, UncontrolledDropdown, DropdownToggle,
  DropdownItem, DropdownMenu
} from 'reactstrap';

/*---------------------------------------- FontAwesome ----------------------------------------*/
import { faEnvelope, faKey, faComments, faQuestion, faTrashAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey, faComments, faQuestion, faTrashAlt, faUserCircle);
/*--------------------------------------------------------------------------------------------*/

class App extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.closeNav = this.closeNav.bind(this)
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNav() {
    if (this.state.isOpen === true) {
      this.setState({
        isOpen: false
      });
    }
  }


  render() {
    return (
      <div>
        <Navbar dark expand="md" className="navbar-default">
          <div className="top-logo"><Link exact to="/"><img src={headerLogo} className="inverted" alt="Header Logo" height="60" /></Link></div>
        </Navbar>
        <Navbar dark expand="md" color="info" >
          <Link exact to="/" className="link-none-underline"><NavbarBrand>Health QA</NavbarBrand></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <NavItem>
                <Link exact to="/" onClick={this.closeNav}><NavLink active={window.location.pathname === '/'} >หน้าหลัก</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/ask" onClick={this.closeNav}><NavLink active={window.location.pathname === '/ask'} >ถามหมอ</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/contactus" onClick={this.closeNav}><NavLink active={window.location.pathname === '/contactus'} >ติดต่อเรา</NavLink></Link>
              </NavItem>
              <NavItem>
                <Link to="/login" onClick={this.closeNav}><NavLink active={window.location.pathname === '/login'} >Log In/Sign Up</NavLink></Link>
              </NavItem>
              <UncontrolledDropdown nav inNavbar active={true}>
                <DropdownToggle nav caret>
                  [ชื่อ นามสกุล]
                </DropdownToggle>
                <DropdownMenu right onClick={this.closeNav}>
                  <DropdownItem>
                  <Link to="/profile/12345" >โปรไฟล์</Link>
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                  <Link to="/logout" >Log Out</Link>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
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
