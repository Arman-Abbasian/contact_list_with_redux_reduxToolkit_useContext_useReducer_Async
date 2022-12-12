import { combineReducers } from "redux";
import { contactsReducer } from "./contacts/contactsReducer";


const rootReducer=combineReducers({
    contacts: contactsReducer
});
export default rootReducer;
