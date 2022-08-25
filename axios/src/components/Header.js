import React, { Component } from 'react'

import { Outlet } from 'react-router-dom'

import { LinkContainer } from 'react-router-bootstrap'

import { NavLink, Nav } from 'react-bootstrap'

export default class Header extends Component {
  render() {
    return (
      <>
        <Nav className='justify-content-end' style={{paddingRight: '2rem', marginTop: "-50px", display: 'flex', justifyContent:'center'}}>
            <LinkContainer to='/'>
                <NavLink>Home</NavLink>
            </LinkContainer>
            <LinkContainer to='about'>
                <NavLink>About</NavLink>
            </LinkContainer>
        </Nav>
        <h1 className = "header">Tyler Maps</h1>
        {/* <h3>powered by <img style={{width: '100px'}} alt='LocationIQ Logo' src={locationIQ}/></h3> */}
        <Outlet/>
        
      </>
    )
  }
}
