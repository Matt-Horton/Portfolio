import React, { Component } from 'react';
import './Pill.css';

class Pill extends Component{
    render(){
        return(
            <span className="badge">{this.props.name}</span>
        )
    }
}

export default Pill;