import React, { Component } from 'react'

import { Outlet } from 'react-router-dom'

export default class Header extends Component {
  render() {
    return (
      <>
        <h1 className = "header">World Wide City Search</h1>
        <Outlet/>
        
      </>
    )
  }
}
