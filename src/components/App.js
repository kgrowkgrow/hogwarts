import React, { Component } from "react";
import "../App.css";
import Nav from "./Nav";
import hogs from "../porkers_data";
// import Hog from "./Hog";
import HogContainer from "./HogContainer"

//imgs



class App extends Component {

  state= { 
    hogArr: hogs,
    sortByName: true,
    sortByGrease: "All"
   }

  handleChange = (event) => {
    this.setState({
      pigArr: event.target.value
    })
  }

  handleSort = (event) => {
    this.setState({
      sortByName: !this.state.sortByName
    })
  }

  handleGreased = (event) => {
    this.setState({
      sortByGrease: event.target.value
    })
  }

  render() {
    return (
      <div className="App ui grid container">
        <Nav sort={this.state.sortByName} handleSort={this.handleSort} handleGreased={this.handleGreased}/>
        <HogContainer hogs={this.state.hogArr} sort={this.state.sortByName} greased={this.state.sortByGrease}/>
      </div>
    );
  }
}

export default App;
