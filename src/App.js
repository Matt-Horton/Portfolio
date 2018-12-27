import React, { Component } from 'react';
import SimpleNavbar from './components/SimpleNavbar';
import './App.css';
import HeaderBanner from './components/HeaderBanner';
import ServicesSection from './components/ServicesSection';
import ProjectList from './components/ProjectList';
import About from './components/About';
import SimpleContact from './components/SimpleContact';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleNavbar />
        <HeaderBanner />
        <ServicesSection />
        <About />
        <ProjectList />
        <SimpleContact />
        <Footer />
      </div>
    );
  }
}

export default App;
