import React from 'react';
import './styles/Body.css';
import './styles/Sitemap.css';
import Menu from './Menu';
import About from './About';

class Body extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: 'sitemap',
    };

    this.handleSelection = this.handleSelection.bind(this);
    this.handleMenu = this.handleMenu.bind(this);
    this.handleAbout = this.handleAbout.bind(this);
  }

  handleSelection(newRef) {
    this.setState({
      ref: newRef,
    });
  }

  handleMenu() {
    this.handleSelection('menu');
  }

  handleAbout() {
    this.handleSelection('about');
  }

  render() {
    const { ref } = this.state;
    let display;
    if (ref === 'sitemap') {
      display = (
        <div className="sitemap">
          <div
            id="aboutRef"
            className="ref"
            onClick={this.handleAbout}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                this.handleAbout();
              }
            }}
            role="button"
            tabIndex="0"
          >
            About
          </div>
          <div
            id="menuRef"
            className="ref"
            onClick={this.handleMenu}
            onKeyDown={(e) => {
              if (e.keyCode === 13) {
                this.handleMenu();
              }
            }}
            role="button"
            tabIndex="0"
          >
            Menu
          </div>
        </div>
      );
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
