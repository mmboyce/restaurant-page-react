import React from 'react';
import './styles/Body.css';
import Sitemap from './Sitemap';
import Menu from './Menu';
import About from './About';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: 'sitemap',
    };
  }

  render() {
    const { ref } = this.state;
    let display;
    if (ref === 'sitemap') {
      display = <Sitemap />;
    } else if (ref === 'menu') {
      display = <Menu />;
    } else if (ref === 'about') {
      display = <About />;
    }

    return (
      <div className="body">
        {display}
      </div>
    );
  }
}

export default Body;
