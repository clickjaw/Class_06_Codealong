import React, { Component } from "react";

import { Card, Button } from "react-bootstrap";

import Static from "./Static";

export default class Cards extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isClicked: false,
      lat: this.props.lat,
      lon: this.props.lon,
      src: "",
    };
  }
  //when the user clicks a card, i want a modal to show up with the location of that specific card

  handleButton = () => {
    this.setState({ isClicked: true });
    this.createMap();
  };

  createMap = () => {
    const API = `https://maps.locationiq.com/v3/staticmap?key=pk.f33dffa5bc3e6218c310d007c07dfff3&center=${this.props.lat},${this.props.lon}&zoom=5&size=400x200&format=png&maptype=dark&markers=icon:small-yellow-cutout|${this.props.lat},${this.props.lon}`;

    this.setState({ src: API });
  };

  closeModalFromCards = () => {
    this.setState({ isClicked: false });
  };

  render() {
    return (
      <>
        <Card style={{ width: "18rem", backgroundColor: "rgb(33, 129, 167)", color: 'white', border: "5px rgb(16, 101, 134) solid" }}>
          <Card.Header>
            <img style={{ width: "1rem", fontFamily: "Chakra Petch" }} />
          </Card.Header>
          <Card.Body>
            <Card.Title>{this.props.display_name}</Card.Title>
            {/* <Card.Text>
              Latitude: {this.props.lat}
              <br />
              Longitude: {this.props.lon}
            </Card.Text> */}
          </Card.Body>
          <Card.Footer>
            {this.state.isClicked ? (
              <Button
                style={{ margin: "0 20px" }}
                variant="info"
                onClick={this.handleButton}
              >
                Map!
              </Button>
            ) : (
              <Button
                style={{ margin: "0 20px" }}
                variant="warning"
                onClick={this.handleButton}
              >
                View Map
              </Button>
            )}
            <br />
          </Card.Footer>
        </Card>

        <Static
          title={this.props.display_name}
          closeModalFromCards={this.closeModalFromCards}
          isClicked={this.state.isClicked}
          src={this.state.src}
        />
      </>
    );
  }
}
