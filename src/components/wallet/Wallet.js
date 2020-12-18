import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Navbar, Nav, NavItem } from 'react-bootstrap'
import Radium from 'radium'
import { Link } from 'react-router'

import { UserActions } from '../../actions'
const { getUserInfo } = UserActions

class Wallet extends Component {

  componentDidMount() {
    if (this.props.user.userData.length === 0) {
      this.props.getUserInfo()
    }
  }

  render() {
    return (
      <div>
        <Navbar fixedTop fluid collapseOnSelect style={STYLES.nav}>
          <Navbar.Header>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse style={STYLES.nav}>
            <Nav>
              <NavItem
                componentClass={Link}
                href="/wallet"
                to="/wallet"
                active={location.pathname === '/wallet'}>
                Home
              </NavItem>
              <NavItem
                componentClass={Link}
                href="/manage-accounts"
                to="/manage-accounts"
                active={location.pathname === '/manage-accounts'}>
                Manage Accounts
              </NavItem>
            </Nav>
            <Nav pullRight>
              <NavItem
                componentClass={Link}
                href="/profile"
                to="/profile"
                active={location.pathname === '/profile'}>
                <span className="glyphicon glyphicon-cog"></span>
              </NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        {this.props.children}
      </div>
    )
  }
}

function mapStateToProps(state) {
    return {
        user: state.user
    }
}

const STYLES = {
  nav: {
    backgroundColor: 'transparent',
    width: '100%',
    border: 'none',
    textDecoration: 'none',
    position: 'relative'
  }
}

export default connect(mapStateToProps, {
  getUserInfo
})(Wallet)
