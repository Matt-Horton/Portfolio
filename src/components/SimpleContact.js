import React, { Component } from 'react';
import './SimpleContact.css';

class SimpleContact extends Component {
  render() {
    return (
      <section id="contact">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <h2 className="contact-heading">Get In Touch</h2>
              <hr />
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12 contact-email">
              <h4>Email Me:</h4>
              <h4>matthewhortonbusiness@gmail.com</h4>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default SimpleContact;
