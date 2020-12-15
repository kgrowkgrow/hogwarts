import React, { Component } from "react";

// const pigImage = []

//  pigImage[0] = require('../hog-imgs/augustus_gloop.jpg')
//  pigImage[1] = require('../hog-imgs/babe.jpg')
//  pigImage[2] = require('../hog-imgs/bailey.jpg')
//  pigImage[3] = require('../hog-imgs/cherub.jpg')
//  pigImage[4] = require('../hog-imgs/galaxy_note.jpg')
//  pigImage[5] = require('../hog-imgs/leggo_my_eggo.jpg')
//  pigImage[6] = require('../hog-imgs/peppa.jpg')
//  pigImage[7] = require('../hog-imgs/piggy_smalls.jpg')
//  pigImage[8] = require('../hog-imgs/piglet.jpg')
//  pigImage[9] = require('../hog-imgs/porkchop.jpg')
//  pigImage[10] = require('../hog-imgs/trouble.jpg')
//  pigImage[11] = require('../hog-imgs/truffle_shuffle.jpg')




class Hog extends Component {

  state = {hidden: true}

  string_parameterize = function (str1) {
    return str1.trim().toLowerCase().replace(/[^a-zA-Z0-9 -]/, "").replace(/\s/g, "_");
  };

  handleChange = (event) => {
    this.setState({hidden: !this.state.hidden})
  }

  render() {
    
    
    const {name, specialty, weight} = this.props.hog

    const hogImage = require(`../hog-imgs/${this.string_parameterize(name)}.jpg`)
    
    return (
      <div className="ui card">
        <h3 onClick={this.handleChange}>{name}</h3>
        <img src={hogImage} alt={"Hog here"}/>
        {this.state.hidden ? null : <p>specialty: {specialty}</p>}
        {this.state.hidden ? null : <p>weight: {weight}</p>}
      </div>
    );
  }
}

export default Hog;
