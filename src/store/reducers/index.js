import { combineReducers } from "redux";
import gallery from "./photos.reducer";

const allReducers = combineReducers({ gallery });

export default allReducers;
