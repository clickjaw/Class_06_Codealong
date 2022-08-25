import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <footer style={{display: 'flex', justifyContent: 'space-evenly', fontSize: "12px", marginTop: '20px'}}>
        <p>&copy;Tyler Morgan, 2022</p>
      </footer>
    )
  }
}
