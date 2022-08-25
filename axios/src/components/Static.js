import React, { Component } from 'react'

import { Modal} from 'react-bootstrap'

export default class Static extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        show: false,
      }
    }

    handleClose = () =>{
        this.setState({show: false})
        this.props.closeModalFromCards();
    }

    render() {
    return (
        <>
        <Modal show={this.props.isClicked} onHide={this.handleClose}>
        <Modal.Header closeButton>
            <Modal.Title>{this.props.title}</Modal.Title>
        </Modal.Header>
         <Modal.Body><img style={{width: '450px', height: '200px'}} alt='a map' src={this.props.src}/></Modal.Body>
        <Modal.Footer>
            {/* <Button variant="secondary" onClick={this.handleClose}>
            Close
            </Button> */}
        </Modal.Footer>
        </Modal>
        
        {/* {this.props.isClicked && <Button onClick={this.createMap}>View Map</Button>} */}

        </>
    )
    }
}
