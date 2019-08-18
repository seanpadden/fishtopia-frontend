import React, { Component } from "react";
import Fish from "../components/Fish.js";

export default class TankContainer extends Component {
  render() {
    
    return (
      <div>
        <h2>Fimsh Tank</h2>
        {this.props.fishTank.map(fish => <Fish fish={fish} />)}
      </div>
    );
  }
}
