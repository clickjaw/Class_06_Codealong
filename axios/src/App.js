import React, { Component } from "react";
import axios from "axios";
import { Form, Button } from "react-bootstrap";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      location: "",
    };

  }

  //   handleChange = (e) => {
  //   this.setState({location: e.target.value}, () => console.log(this.state.location));
  // }

  handleSubmit = async (e) => {
    //await key stops this function until process (API call) is done
    //async and await go together
    // .then() will run regardless, will not wait


      this.setState({location: e.target.value}, () => console.log(this.state.location));

    //  const API = `http://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION}&q=${this.state.location}&format=json`;

    // const res = await axios.get(API); // telling our function to wait till the site is loaded
    // console.log(res.data[0].display_name);
    // // //data is the special keyword in the function

    // console.log(res.data.activity);

    // this.setState({location: res.data}, () => console.log(this.state.location));
  };

  render() {
    return (
      <div>
        <Form onSubmit = {this.handleSubmit}>
          <input
            type="text"
            id="searchBox"
            value = {this.state.location}
            placeholder="Enter a City Name"
          ></input>
        </Form>

        <ul>
          {this.state.location !== "" &&
            this.state.location.map((obj) => <li>{obj.display_name}</li>)}
        </ul>
      </div>
    );
  }
}
