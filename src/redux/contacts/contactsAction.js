import axios from "axios";
import { DELETE_ONE_CONTACT_FAILURE, DELETE_ONE_CONTACT_SUCCESS, EDIT_ONE_CONTACT_FAILURE, EDIT_ONE_CONTACT_SUCCESS, FETCH_CONTACTS_FAILURE, FETCH_CONTACTS_REQUEST, FETCH_CONTACTS_SUCCESS, POST_ONE_CONTACT_FAILURE, POST_ONE_CONTACT_SUCCESS } from "./contactsType";



const fetchContactsRequest=()=>{
    return{
        type:FETCH_CONTACTS_REQUEST,
    }
};
const fetchContactsFailure=(payload)=>{
    return{
        type:FETCH_CONTACTS_FAILURE,
        payload
    }
};
const fetchContactsSuccess=(payload)=>{
    return{
        type:FETCH_CONTACTS_SUCCESS,
        payload
    }
};

const postContactsFailure=(payload)=>{
    return{
        type:POST_ONE_CONTACT_FAILURE,
        payload
    }
};
const postContactsSuccess=(payload)=>{
    return{
        type:POST_ONE_CONTACT_SUCCESS,
        payload
    }
};
const deleteContactsFailure=(payload)=>{
    return{
        type:DELETE_ONE_CONTACT_FAILURE,
        payload
    }
};
const deleteContactsSuccess=(payload)=>{
    return{
        type:DELETE_ONE_CONTACT_SUCCESS,
        payload
    }
};
const editOneContactFailure=(payload)=>{
    return{
        type:EDIT_ONE_CONTACT_FAILURE,
        payload
    }
};
const editOneContactSuccess=(payload)=>{
    return{
        type:EDIT_ONE_CONTACT_SUCCESS,
        payload
    }
};

export const fetchContacts=()=>{
    return function(dispatch){
        dispatch(fetchCostsRequest());
        axios.get(`http://localhost:4000/expenses`)
        .then(res=>{
            dispatch(fetchContactsSuccess(res.data));
        })
        .catch(err=>{
            dispatch(fetchContactsFailure(err.message))
        })
    }
};
export const addOneContact=(payload)=>{
    console.log(payload)
    return function(dispatch){
        axios.post(`http://localhost:4000/expenses`,payload)
        .then(res=>{
            axios.get(`http://localhost:4000/expenses`)
            .then(res=>{
                dispatch(postContactsSuccess(res.data));
            })   
        })
        .catch(err=>{
            dispatch(postContactsFailure(err.message))
        })
    }
};
export const deleteOneContact=(payload)=>{
    payload.e.stopPropagation();
    return function(dispatch){
        axios.delete(`http://localhost:4000/expenses/${payload.id}`)
        .then(res=>{
            axios.get(`http://localhost:4000/expenses`)
            .then(res=>{
                dispatch(deleteContactsSuccess(res.data));
            })   
        })
        .catch(err=>{
            dispatch(deleteContactsFailure(err.message))
        })
    }
};

export const putOneContact=(payload)=>{
    console.log(payload)
    return function(dispatch){
        axios.put(`http://localhost:4000/expenses/${payload.id}`,payload.formValues)
        .then(res=>{
            axios.get(`http://localhost:4000/expenses`)
            .then(res=>{
                dispatch(editOneContactSuccess(res.data));
            })   
        })
        .catch(err=>{
            dispatch(editOneContactFailure(err.message))
        })
    }
};