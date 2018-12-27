import React, { Component } from 'react';
import './Footer.css';

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <span className="copyright">Copyright © Matt Horton 2018</span>
            </div>
            <div className="col-md-6">
              <ul className="social-btns">
                <li className="inline-list-item">
                  <a href="https://github.com/Matty-Horton">
                    <i className="fab fa-github"></i>
                  </a>
                </li>
                <li className="inline-list-item">
                  <a href="https://www.linkedin.com/in/matt-horton-567274174/">
                    <i className="fab fa-linkedin-in"></i>
                  </a>
                </li>
                <li className="inline-list-item">
                  <a href="#">
                    <i className="far fa-envelope"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}

export default Footer;
