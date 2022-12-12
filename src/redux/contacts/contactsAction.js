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

const postContactFailure=(payload)=>{
    return{
        type:POST_ONE_CONTACT_FAILURE,
        payload
    }
};
const postContactSuccess=(payload)=>{
    return{
        type:POST_ONE_CONTACT_SUCCESS,
        payload
    }
};
const deleteContactFailure=(payload)=>{
    return{
        type:DELETE_ONE_CONTACT_FAILURE,
        payload
    }
};
const deleteContactSuccess=(payload)=>{
    return{
        type:DELETE_ONE_CONTACT_SUCCESS,
        payload
    }
};
const editContactFailure=(payload)=>{
    return{
        type:EDIT_ONE_CONTACT_FAILURE,
        payload
    }
};
const editContactSuccess=(payload)=>{
    return{
        type:EDIT_ONE_CONTACT_SUCCESS,
        payload
    }
};

export const fetchContacts=()=>{
    return function(dispatch){
        dispatch(fetchContactsRequest());
        axios.get(`http://localhost:4000/contacts`)
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
        axios.post(`http://localhost:4000/contacts`,payload)
        .then(res=> fetchContacts())
        .catch(err=>{
            dispatch(postContactFailure(err.message))
        })
    }
};
export const deleteOneContact=(payload)=>{
    payload.e.stopPropagation();
    return function(dispatch){
        axios.delete(`http://localhost:4000/contacts/${payload.id}`)
        .then(res=>{
            axios.get(`http://localhost:4000/contacts`)
            .then(res=>{
                dispatch(deleteContactSuccess(res.data));
            })   
        })
        .catch(err=>{
            dispatch(deleteContactFailure(err.message))
        })
    }
};
export const putOneContact=(payload)=>{
    console.log(payload)
    return function(dispatch){
        axios.put(`http://localhost:4000/contacts/${payload.id}`,payload.formValues)
        .then(res=>{
            axios.get(`http://localhost:4000/contacts`)
            .then(res=>{
                dispatch(editContactSuccess(res.data));
            })   
        })
        .catch(err=>{
            dispatch(editContactFailure(err.message))
        })
    }
};