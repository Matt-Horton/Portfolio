import React, { Component } from 'react';
import './Contact.css';

class Contact extends Component {
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
            <div className="col-lg-12">
              <form id="contact-form">
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input className="form-control" id="contact-name" type="text" placeholder="Your Name *" aria-invalid="false" required="required" data-validation-required-message="Please enter your name."></input>
                      <p className="text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="contact-email" type="text" placeholder="Your Email *" aria-invalid="false" required="required" data-validation-required-message="Please enter your name."></input>
                      <p className="text-danger"></p>
                    </div>
                    <div className="form-group">
                      <input className="form-control" id="contact-phone" type="text" placeholder="Your Phone *" aria-invalid="false" required="required" data-validation-required-message="Please enter your name."></input>
                      <p className="text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <textarea className="form-control" id="contact-message" type="text" placeholder="Your Message *" aria-invalid="false" required="required" data-validation-required-message="Please enter your message."></textarea>
                      <p className="text-danger"></p>
                    </div>
                  </div>
                  <div className="clearfix"></div>
                  <div className="col-lg-12">
                    <button id="sendContactMessage" className="btn btn-primary">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Contact;