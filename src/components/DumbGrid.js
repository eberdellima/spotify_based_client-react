import React from "react";
import Card from './Card.js';

import "../static/dumbgrid.scss";

const DumbGrid = (props) => {
  return (
    <div className="dumbgrid">
      <h2 style={{ textTransform: "capitalize" }}>
        {props.sectionName}
      </h2>
      <div className="container">
        {props.items.map(item => <Card key={item.name} sectionName={props.sectionName} {...item} />)}
      </div>
    </div>
  )
}

export default DumbGrid;
