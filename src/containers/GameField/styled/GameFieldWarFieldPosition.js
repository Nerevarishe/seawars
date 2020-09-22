import styled from "styled-components/macro";
import rem from "../../../utils/rem";

const GameFieldWarFieldPosition = styled.div`
  margin-right: ${rem("32px")};
  display: flex;
  justify-content: center;
  align-items: center;

  :last-child {
    margin-right: 0;
  }
`;

export default GameFieldWarFieldPosition;
