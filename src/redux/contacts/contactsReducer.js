import {DELETE_ONE_CONTACT_FAILURE, DELETE_ONE_CONTACT_SUCCESS,  EDIT_ONE_CONTACT_FAILURE, EDIT_ONE_CONTACT_SUCCESS, FETCH_CONTACTS_FAILURE, FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS, POST_ONE_CONTACT_FAILURE, POST_ONE_CONTACT_SUCCESS } from "./contactsType";


const initialState={
    data:[],
    error:"",
    laoding:false,
}
export const contactsReducer=(state=initialState,action)=>{
    switch (action.type) {
        case FETCH_CONTACTS_REQUEST:{
            console.log(state)
            return {data:[],error:"",laoding:true}
        };
        case FETCH_CONTACTS_SUCCESS:{
            console.log(action.payload)
            return {data:action.payload,error:"",laoding:false}
        };
        case FETCH_CONTACTS_FAILURE:{
            console.log(state)
            return {data:[],error:action.payload,laoding:false}
        }
        case POST_ONE_CONTACT_SUCCESS:{
            console.log(action.payload)
            return {data:action.payload,error:"",laoding:false}
        };
        case POST_ONE_CONTACT_FAILURE:{
            return {data:[],error:action.payload,laoding:false}
        };
        case DELETE_ONE_CONTACT_SUCCESS:{
            console.log(action.payload)
            return {data:action.payload,error:"",laoding:false}
        };
        case DELETE_ONE_CONTACT_FAILURE:{
            return {data:[],error:action.payload,laoding:false}
        };
        case EDIT_ONE_CONTACT_SUCCESS:{
            console.log(action.payload)
            return {data:action.payload,error:"",laoding:false}
        };
        case EDIT_ONE_CONTACT_FAILURE:{
            return {data:[],error:action.payload,laoding:false}
        };        
        default:
            return state;
    }
}
export default contactsReducer;
