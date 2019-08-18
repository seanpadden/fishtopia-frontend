import React from "react";

const Fish = props => (
  <div>
    <div>
        <h3 className="fish-card">name: {props.fish.name}</h3>
        <h4 className="fish-card">trade: {props.fish.skill}</h4>
        <img className="card-image" src={`${props.fish.image}`} />
    </div>
  </div>
);

export default Fish;
