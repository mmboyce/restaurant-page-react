import React from 'react';
import PropTypes from 'prop-types';
import './styles/Close.css';

function Close(props) {
  const { handleClose } = props;

  return (
    <div
      className="close"
      tabIndex="0"
      role="button"
      onClick={handleClose}
      onKeyDown={(e) => {
        if (e.keyCode === 13 || e.keyCode === 32) {
          handleClose();
        }
      }}
    >
      X
    </div>
  );
}

Close.propTypes = {
  handleClose: PropTypes.func.isRequired,
};

export default Close;
