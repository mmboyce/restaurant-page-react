import React from 'react';
import './styles/Sitemap.css';

class Sitemap extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ref: null,
    };
  }

  render() {
    return (
      <div className="sitemap">
        <div id="aboutRef" className="ref">About</div>
        <div id="menuRef" className="ref">Menu</div>
      </div>
    );
  }
}

export default Sitemap;
