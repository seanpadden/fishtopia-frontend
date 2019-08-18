import React, { Component } from "react";
import TankContainer from './TankContainer.js'
import OceanContainer from './OceanContainer.js';
import Form from '../components/Form.js'

export default class MainContainer extends Component {

  state = {
    fishTank: [],
    fishOcean: [],
    users: []
  }

  componentDidMount() {
    fetch("http://localhost:3001/fish")
    .then(resp => resp.json())
    .then(fishData => this.setState({
      fishTank: fishData
    }))
  }


  render(){
    return(
      <div>
        <Form />
        <TankContainer fishTank={this.state.fishTank}/>
        {/* <OceanContainer /> */}
      </div>
    )
  }
}