import React, { Component } from 'react';
import './ServicesRow.css'


class ServicesRow extends Component {
    render(){
        return(
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box mx-auto">
                            <i className="service-icon fas fa-desktop"></i>
                            <h3 className="service-box-title">Web Development</h3>
                            <p className="service-box-description">Fast, Responsive And Scalable Bespoke Sites</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box mx-auto">
                            <i className="service-icon fas fa-mobile-alt"></i>
                            <h3 className="service-box-title">Mobile Development</h3>
                            <p className="service-box-description">Robust Android Apps Tailored To Your Needs</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box mx-auto">
                            <i className="service-icon fas fa-stopwatch"></i>
                            <h3 className="service-box-title">Site Optimisation</h3>
                            <p className="service-box-description">Reduce Load Times To Provide A Responsive User Experience</p>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 text-center">
                        <div className="service-box mx-auto">
                            <i className="service-icon fas fa-chart-line"></i>
                            <h3 className="service-box-title">SEO</h3>
                            <p className="service-box-description">Improve Your Search Ranking And Get More Traffic</p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ServicesRow;