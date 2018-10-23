import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import Routing from '../routes'
import '../css/style.css';
import headerLogo from '../img/header-logo.png';
import { library } from '@fortawesome/fontawesome-svg-core';

import {
  Collapse, Navbar, NavbarToggler, Nav,
  NavItem, UncontrolledDropdown, DropdownToggle,
  DropdownItem, DropdownMenu
} from 'reactstrap';

/*---------------------------------------- FontAwesome ----------------------------------------*/
import { faEnvelope, faKey, faComments, faQuestion, faTrashAlt, faUserCircle } from '@fortawesome/free-solid-svg-icons';
library.add(faEnvelope, faKey, faComments, faQuestion, faTrashAlt, faUserCircle);
/*--------------------------------------------------------------------------------------------*/

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: false
    };
  }
  toggle = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  closeNav = () => {
    if (this.state.isOpen === true) {
      this.setState({
        isOpen: false
      });
    }
  }


  render() {
    return (
      <div className="App">
        <Navbar dark expand="md" className="navbar-default">
          <div className="top-logo"><Link to="/"><img src={headerLogo} className="inverted" alt="Header Logo" height="60" /></Link></div>
        </Navbar>
        <Navbar dark expand="md" color="info" >
          <Link to="/" className="link-none-underline"><div className="navbar-brand">Health QA</div></Link>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar >
              <NavItem>
                <Link to="/" id="link-none-underline" onClick={this.closeNav}><span className="nav-link" >หน้าหลัก</span></Link>
              </NavItem>
              <NavItem>
                <Link to="/ask" id="link-none-underline" onClick={this.closeNav}><span className="nav-link">ถามหมอ</span></Link>
              </NavItem>
              <NavItem>
                <Link to="/contactus" id="link-none-underline" onClick={this.closeNav}><span className="nav-link"  >ติดต่อเรา</span></Link>
              </NavItem>
              <NavItem>
                <Link to="/login" id="link-none-underline" onClick={this.closeNav}><span className="nav-link" >Log In/Sign Up</span></Link>
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
        <main>
          <Routing />
        </main>

      </div>
    );
  }
}



export default App;
