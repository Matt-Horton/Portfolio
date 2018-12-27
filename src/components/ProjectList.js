import React, { Component } from 'react';
import './ProjectList.css';
import Project from './Project';


class ProjectList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          title: 'Time Wise',
          url: 'timewise',
          items: [
            'Android',
            'Java',
            'SQL',
          ]
        },
        {
          title: 'SWWOP',
          url: 'swwop',
          items: [
            'Ruby',
            'JQuery',
            'SASS',
            'PostgreSQL',
          ]
        },
        {
          title: 'Portfolio Website',
          url: 'portfolio',
          items: [
            'React JS',
            'Node JS',
          ]
        }
      ],
    }
  }
  render() {
    return (
      <section id="projects">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="services-heading">Projects</h2>
              <hr />
            </div>
          </div>
          <div className="row">
          {this.state.projects.map((project, index) => (
            <Project key={index} index={index} url={project.url} title={project.title} items={project.items} />
          ))}
          </div>
        </div>
      </section>
    )
  }
}

export default ProjectList;
