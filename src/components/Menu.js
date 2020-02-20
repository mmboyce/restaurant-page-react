import React from 'react';
import PropTypes from 'prop-types';
import Close from './Close';

function Menu(props) {
  const { handleClose } = props;

  return (
    <div className="menu">
      <Close handleClose={handleClose} />
      <div id="menu-container">
        food
      </div>
    </div>
  );
}

Menu.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Menu;
