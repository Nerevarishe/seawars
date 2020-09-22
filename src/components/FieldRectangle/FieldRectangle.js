import React from "react";
import PropTypes from "prop-types";

import FieldRectangleStyled from "./styled/FieldRectangleStyled";

/**
 * Part of the playing field. You can place a part of the ship on it and be shot by an opponent.
 */
const FieldRectangle = ({ hasShip, hasShooted, onShootHandler }) => {
  return (
    <FieldRectangleStyled
      hasShip={hasShip}
      hasShooted={hasShooted}
      onClick={onShootHandler}
    />
  );
};

FieldRectangle.propTypes = {
  hasShip: PropTypes.bool,
  hasShooted: PropTypes.bool,
};

FieldRectangle.defaultProps = {
  hasShip: false,
  hasShooted: false,
};

export default FieldRectangle;
