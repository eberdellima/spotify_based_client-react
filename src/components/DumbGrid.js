import React, { Component } from "react";
import Card from './Card.js';

import "../static/dumbgrid.scss";

class DumbGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (
      <div className="dumbgrid">
        <h2 style={{ textTransform: "capitalize" }}>
          {this.props.sectionName}
        </h2>
        <div className="container">
          {this.props.items.map(item => <Card key={item.name} sectionName={this.props.sectionName} {...item}/>)}
        </div>
      </div>
    );
  }
}

export default DumbGrid;
