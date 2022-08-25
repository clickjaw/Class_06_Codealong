import React, { Component } from 'react'
import IQpic from "../pic/iqPic.png"

export default class Footer extends Component {
  render() {
    return (
      <footer style={{display: 'flex', flexDirection: "column", justifyContent: "center", fontSize: "12px", marginTop: '20px'}}>
            Brought to you by
            <img style = {{width: '10%', display: 'flex', position: 'relative', left: "460px"}}src = {IQpic}/>
        <p>&copy;Tyler Morgan, 2022</p>
      </footer>
    )
  }
}
