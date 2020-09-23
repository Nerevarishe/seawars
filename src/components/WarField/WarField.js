import React from "react";
import { useDispatch, useSelector } from "react-redux";

import WarFieldRowStyled from "./styled/WarFieldRowStyled";
import FieldRectangle from "../FieldRectangle";
import { updateGameField } from "../../redux/actions/actionsGameField";

/**
 * Field, where game is held. On page exist two field players and opponents
 */
const WarField = () => {
  const dispatch = useDispatch();
  const myField = useSelector((state) => state.gameField.myField);

  const onShootHandler = (fieldId) => {
    // Copy state fields array
    const copyFields = [...myField];

    // Find object by it ID key:
    // In each nested array find index of element that have fieldId
    copyFields.forEach((row, index) => {
      const tempArray = [...row];
      // Element index in array:
      const elIndex = tempArray.findIndex((el) => el.fieldPartId === fieldId);
      // Object, that need to edit:
      const elObject = tempArray.find((el) => el.fieldPartId === fieldId);

      // If object in array found:
      if (elObject) {
        // elObject.hasShooted = !elObject.hasShooted;
        elObject.hasShooted = true;
        // Replace element in copyFields array with new elObject element:
        tempArray.splice(elIndex, 1, { ...elObject });
        // Replace in parent array all child array:
        copyFields.splice(index, 1, tempArray);
        // Set edited array as new state in redux:
        dispatch(updateGameField(copyFields));
      }
    });
  };

  return (
    <div>
      {myField.length
        ? myField.map((rowArray, index) => {
            return (
              <WarFieldRowStyled key={index}>
                {rowArray.map((field) => {
                  // Check if already shooted to this field.
                  // If TRUE - disable onShootHandler
                  const isAlreadyShooted = field.hasShooted
                    ? () => null
                    : () => onShootHandler(field.fieldPartId);
                  return (
                    <FieldRectangle
                      key={field.fieldPartId}
                      hasShip={field.hasShip}
                      hasShooted={field.hasShooted}
                      onShootHandler={isAlreadyShooted}
                    />
                  );
                })}
              </WarFieldRowStyled>
            );
          })
        : null}
    </div>
  );
};

export default WarField;
