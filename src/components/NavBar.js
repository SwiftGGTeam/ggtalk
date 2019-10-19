import React, { Component } from 'react';
import './NavBar.css';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

class NavBar extends Component {
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
      <div className='nav-bar'>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">ggtalk</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink href="/">节目列表</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/search">搜索</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/android">安卓说明</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/faq">无法播放？</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target='_blank' href="https://swift.gg">SwiftGG 网站</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target='_blank' href="https://www.weibo.com/swiftguide">SwiftGG 微博</NavLink>
              </NavItem>
              <NavItem>
                <NavLink target='_blank' href="https://github.com/SwiftGGTeam/ggtalk">GitHub</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="/about">关于</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    )
  }
}

export default NavBar
