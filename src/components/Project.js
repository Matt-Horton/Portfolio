import React, { Component } from 'react';
import './Project.css';
import Pill from './Pill';

class Project extends Component {
  render() {
    return (
      <div className="col-md-4 col-sm-6 portfolio-item">
        <div className="portfolio-img-container">
          <img className="img-fluid" src={require(`../images/${this.props.url.toLowerCase()}.png`)} alt="placeholder"></img>
        </div>
        <div className="portfolio-caption">
          <h3>{this.props.title}</h3>
          <div className="item-container">
            {this.props.items.map((item, index) => (
              <Pill key={index} name={item}/>
            ))}
          </div>
        </div>
      </div>
    )
  }
}

export default Project;