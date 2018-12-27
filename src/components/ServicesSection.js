import React, { Component } from 'react';
import './ServicesSection.css';
import ServicesRow from './ServicesRow';


class ServicesSection extends Component{
    render(){
        return(
            <section id="services">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <h2 className="services-heading">Services</h2>
                            <hr/>
                        </div>
                    </div>
                </div>
                <ServicesRow />
            </section>
        )
    }
}

export default ServicesSection;