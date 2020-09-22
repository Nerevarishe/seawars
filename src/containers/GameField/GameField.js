import React from "react";
import GameFieldStyled from "./styled/GameFieldStyled";
import GameFieldWarFieldPosition from "./styled/GameFieldWarFieldPosition";
import WarField from "../../components/WarField";

const GameField = () => {
  return (
    <GameFieldStyled>
      <GameFieldWarFieldPosition>
        <WarField />
      </GameFieldWarFieldPosition>
    </GameFieldStyled>
  );
};


export default GameField;
