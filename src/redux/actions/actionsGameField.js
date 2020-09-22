import { UPDATE_WAR_FIELD } from "../types";

export const updateGameField = (updatedGameField) => {
  return {
    type: UPDATE_WAR_FIELD,
    payload: updatedGameField,
  };
};
