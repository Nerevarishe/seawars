import styled from "styled-components/macro";
import rem from "../../../utils/rem";

import fireBg from "../../../assets/img/fire.svg";

// Type width and height of field in px
export const sizeOfField = 35;

const FieldRectangleStyled = styled.div`
  // Base empty field:
  width: ${rem(`${sizeOfField}px`)};
  height: ${rem(`${sizeOfField}px`)};
  border: 1px solid ${({ theme }) => theme.colors.darkGray};

  // Empty, shooted field:
  // TODO: re-design this part
  ${({ hasShooted, hasShip }) =>
    hasShooted && !hasShip
      ? `
    ::before {
      content: "X";
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  `
      : null}

  // Has ship part
  ${({ hasShip, theme }) =>
    hasShip
      ? `
    background: ${theme.colors.orange};
    border-color: ${theme.colors.orangeRed};
  `
      : null}

  // Has ship part shooted
  ${({ hasShip, hasShooted, theme }) =>
    hasShip && hasShooted
      ? `
    background: url('${fireBg}'), ${theme.colors.orangeRed};
    border-color: ${theme.colors.orangeRed};
  `
      : null}
`;

export default FieldRectangleStyled;
