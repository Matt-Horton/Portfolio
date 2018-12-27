import React, { Component } from 'react';
import './About.css';

class About extends Component{
    render(){
        return(
            <section id="about">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-8 about-container">
                            <h2 className="about-heading">About Me</h2>
                            <hr />
                            <p className="about-description">I'm originally from Liverpool but now living in Sheffield, England.
                             Studying BSc Computer Science at The University of Sheffield. I am passionate about creating stunning user experiences with a clean and easy to use UI/UX.  </p>
                            <a href='#projects' className="btn btn-light">View Projects</a>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

export default About;