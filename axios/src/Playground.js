// import React, { Component } from "react";
// import { Form, Button } from "react-bootstrap";
// import Card from "react-bootstrap/Card";
// import axios from "axios";
// import Map from "../components/Map"

// export default class Playground extends Component {
//   constructor(props) {
//     super(props);
//     this.state = { location: "", newLocation: "", map: "", latMap: "", lonMap: "",};

//     //   this.handleChange = this.handleChange.bind(this);
//     //   this.handleSubmit = this.handleSubmit.bind(this);
//   }

//   handleChange = (e) => {
//     this.setState({ location: e.target.value });
//   };
//   handleSubmit = async (e) => {
//     console.log(this.state.location);
//     e.preventDefault();

//     const API = `http://us1.locationiq.com/v1/search?key=${process.env.REACT_APP_LOCATION}&q=${this.state.location}&format=json`;
    
//     const res = await axios.get(API); // telling our function to wait till the site is loaded

//     this.setState({newLocation: res.data }, () =>
//       console.log(this.state.newLocation)
//     );

//     // this.setState({lonMap:res.data.lonMap}, () => console.log(this.state.lonMap));


//     // const APImap = 'http://maps.locationiq.com/v3/staticmap?key=pk.f33dffa5bc3e6218c310d007c07dfff3&center=<latitude>,<longitude>&zoom=10&size=<400>x<400>&format=png&maptype=roadmap&markers=icon:tiny-yellow-cutout|<latitude>,<longitude>&markers=icon:tiny-yellow-cutout|<latitude>,<longitude>';
//     // const resMap = await axios.get(APImap);
//     // this.setState({map:resMap.data}, () => console.log(this.state.map))

//   };
//   handleButton = () =>{
//     this.createMap()
//   }
  
//   createMap = () => {
//     const APImap = `https://maps.locationiq.com/v3/staticmap?key=pk.f33dffa5bc3e6218c310d007c07dfff3&center=${this.props.lat},${this.props.lon}&zoom=16&size=480x480&markers=icon:small-yellow-cutout|${this.props.lat},${this.props.lon}`

//     this.setState({src: APImap})
//   }


//   render() {
//     return (
//       <>
//         <h2>Search City Names Across the World</h2><br/>

//         {/* Form onSubmit allows you to hit enter to submit info */}
//         {/* you can have either input type submit or button submit that triggers the function */}
//         <Form onSubmit={this.handleButton}>
//           <input
//             type="text"
//             // value={this.state.location}
//             onChange={this.handleChange}
//             placeholder="Search a City"
//           />
//           {/* <input type="submit" id = "submitButton" value="Search" /> */}
//         </Form>
//         <br/>
//         <Button type="submit" onClick={this.handleSubmit}>
//           Search
//         </Button>
//         <br/>
//         <ul>
//           {this.state.newLocation !== "" && this.state.newLocation.map((obj) =>
//           <>
          
//             <li>{`City: ${obj.display_name}`}</li>
//             <li>{`latitude: ${obj.lat}`}</li>
//             <li>{`longitude:${obj.lon}`}</li>
//             {/* <Map/> */}
            
//             <br/>
//           </>
//             )}
//         </ul>
//       </>
//     );
//   }
// }

// // Below is code for specific calls for this API

// {
//   /* Below is the call to bring up every instance of city name in API */
// }
// {
//   /* <ul>
//         {this.state.newLocation !== '' 
//         && this.state.newLocation.map(obj =>
//              <li>{obj.display_name}</li>
            
//             )
//             }
       
//         </ul> */
// }
