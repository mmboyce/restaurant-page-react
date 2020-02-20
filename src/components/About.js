import React from 'react';
import PropTypes from 'prop-types';
import Close from './Close';
import Title from './Title';
import './styles/About.css';

function About(props) {
  const { handleClose } = props;

  return (
    <div className="about">
      <Close handleClose={handleClose} />
      <div id="about-us">
        <p>
          Welcome to
          {' '}
          <Title />
          , the best spot in town for pasta and bread!
        </p>
        <p>
          Here at our restaurant, we pride ourselves on the finest baking
          and culinary talents around.
        </p>
        <p>
          Our staff has been rated as the best in hospitality
          {' '}
          <strong id="brag">FIVE YEARS IN A ROW</strong>
          {' '}
          by the Restaurant Board!
        </p>
        <p>
          So enjoy good eats and take a load off at the best spot in town,
          {' '}
          <Title />
          .
        </p>
      </div>
    </div>
  );
}

About.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default About;
