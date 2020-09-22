import { combineReducers } from "redux";
import gameFieldReducer from "./gameFieldReducer";

const rootReducer = combineReducers({
  gameField: gameFieldReducer,
});

export default rootReducer;
