import React, { Component } from 'react';
import './HeaderBanner.css';

class HeaderBanner extends Component {
  render() {
    return (
      <div id="headerBanner" className="d-flex">
        <div className="container marginAuto">
          <div className="row">
            <div className="col-lg-10 col-centered">
              <h1 className="bannerTitle">Hi, I'm Matt Horton</h1>
              <hr/>
            </div>
            <div className="col-lg-8 col-centered">
              <h4 className="bannerDescription marginAuto">I'm a Full Stack Web developer and Mobile Developer with a passion for crafting stunning user interfaces</h4>
              <a href="#services" className="btn btn-primary btn-xl bannerBtn marginAuto">Find Out More</a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeaderBanner;