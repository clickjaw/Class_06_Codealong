import React, { Component } from 'react'
import {Form, Button} from "react-bootstrap"
import axios from "axios";

export default class Playground extends Component {
    constructor(props) {
      super(props);
      this.state = {location: '', newLocation:''};
  
    //   this.handleChange = this.handleChange.bind(this);
    //   this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange = (e) => {
      this.setState({location: e.target.value});
    }
    handleSubmit = async (e) => {
        console.log(this.state.location)
        e.preventDefault();

        const API = `http://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION}&q=${this.state.location}&format=json`;

        const res = await axios.get(API); // telling our function to wait till the site is loaded

        this.setState({newLocation: res.data}, () => console.log(this.state.newLocation));


    }
  
    render() {
      return (
        <>
        <h2>Search City Names Across the World</h2>
        {/* Form onSubmit allows you to hit enter to submit info */}
        {/* you can have either input type submit or button submit that triggers the function */}
        <Form onSubmit={this.handleSubmit}>
            <input type="text" 
            // value={this.state.location} 
            onChange={this.handleChange}
            placeholder = "Enter a City Name" />
          {/* <input type="submit" id = "submitButton" value="Search" /> */}

        </Form>
        <Button type = "submit" onClick = {this.handleSubmit}>Search</Button>


        <ul>
        {this.state.newLocation !== '' 
        && this.state.newLocation.map(obj =>
             <li>{obj.display_name}</li>
            )
            }
       
        </ul>
        </>
      );
    }
  }
