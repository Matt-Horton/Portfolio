import React, { Component } from 'react';
import { Navbar, Nav, NavItem} from "react-bootstrap";
import './SimpleNavbar.css';

class SimpleNavbar extends Component {
  state = {
    isOpen: false,
    isTop: true,
  }
  componentDidMount(){
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 200;
      if(isTop !== this.state.isTop){
        this.setState({ isTop });
      }
    })
  }

  render() {
    return (
      <Navbar collapseOnSelect fixedTop id="mainNav" className={this.state.isTop ? 'bk-trans' : 'bk-white'}>
        <Navbar.Header>
          <Navbar.Brand>
            <a className="nav-brand" href="#">Matt Horton</a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav id="navMenu" pullRight>
            <NavItem className={`navMenuItem ${this.state.isTop ? 'navTop' : 'navScrolled' }`} eventKey={1} href="#services">
              Services
            </NavItem>
            <NavItem className={`navMenuItem ${this.state.isTop ? 'navTop' : 'navScrolled' }`} eventKey={2} href="#about">
              About
            </NavItem>
            <NavItem className={`navMenuItem ${this.state.isTop ? 'navTop' : 'navScrolled' }`} eventKey={3} href="#projects">
              Projects
            </NavItem>
            <NavItem className={`navMenuItem ${this.state.isTop ? 'navTop' : 'navScrolled' }`} eventKey={4} href="#contact">
              Contact
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default SimpleNavbar;