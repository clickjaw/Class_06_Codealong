import React, { Component } from 'react'

import { Outlet } from 'react-router-dom'

import { LinkContainer } from 'react-router-bootstrap'

import { NavLink, Nav } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
      <>
        <Nav className='navMenu' style={{paddingRight: '2rem', marginTop: "-60px", display: 'flex', justifyContent:'center', fontFamily:"Carter One",}}>
            <LinkContainer to='/'>
                <NavLink>Home</NavLink>
            </LinkContainer>
            <LinkContainer to='about'>
                <NavLink>About</NavLink>
            </LinkContainer>
        </Nav>
        <h1 className = "header">World Wide City Search</h1>
        {/* <h3>powered by <img style={{width: '100px'}} alt='LocationIQ Logo' src={locationIQ}/></h3> */}
        <Outlet/>
        
      </>
    )
  }
}
