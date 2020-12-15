import piggy from "../porco.png";
import React from "react";

const Nav = (props) => {
  return (
    <div className="navWrapper">
      <span className="headerText">Hogwarts</span>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="piggy" />
      </div>
      <div>
        <input type="checkbox" onClick={props.handleSort}></input>
        <label>  Sort by weight</label>
      </div>
      <div>
        <select type="dropdown" onChange={props.handleGreased}>
          <option>All</option>
          <option>Greased Hogs</option>
          <option>Ungreased Hogs</option>
        </select>
      </div>
      <span className="normalText">A React App for County Fair Hog Fans</span>
    </div>
  );
};

export default Nav;
