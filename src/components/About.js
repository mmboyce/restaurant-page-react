import React from 'react';
import PropTypes from 'prop-types';
import Close from './Close';

function About(props) {
  const { handleClose } = props;

  return (
    <div className="about">
      <Close handleClose={handleClose} />
      <div id="about-us">About</div>
    </div>
  );
}

About.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default About;
