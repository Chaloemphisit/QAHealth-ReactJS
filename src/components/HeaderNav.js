import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink} from 'reactstrap';

export default class HeaderNav extends React.Component {
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
        <Navbar dark expand="md" color="info" >
          <NavbarBrand href="/">QA Health</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink active={window.location.pathname === '/' } href="/">หน้าหลัก</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={window.location.pathname === '/ask' } href="/ask">ถามหมอ</NavLink>
              </NavItem>
              <NavItem>
                <NavLink active={window.location.pathname === '/contactus' } href="/contactus">ติดต่อเรา</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}