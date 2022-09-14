import { legacy_createStore as createStore } from "redux";
import Calendar from "./reducer";

const store = createStore(Calendar);
export default store;
