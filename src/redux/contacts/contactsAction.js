import axios from "axios";
import { toast } from "react-hot-toast";
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
    console.log(payload)
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
    return function(dispatch){
        axios.post(`http://localhost:4000/contacts`,payload)
        .then(res=>{
            toast.success("data added successfully")  
            axios.get(`http://localhost:4000/contacts`)
        .then(res=>{
            dispatch(postContactSuccess(res.data));
        })   
        }
        )
        .catch(err=>{
            toast.error(err.message)  
            dispatch(postContactFailure(err.message))
        })
    }
};
export const deleteOneContact=(payload)=>{
    return function(dispatch){
        axios.delete(`http://localhost:4000/contacts/${payload}`)
        .then(res=>{
            toast.success("data removed successfully")
            axios.get(`http://localhost:4000/contacts`)
            .then(res=>{
                dispatch(deleteContactSuccess(res.data));
            })   
        })
        .catch(err=>{
            toast.error(err.message)
            dispatch(deleteContactFailure(err.message))
        })
    }
};
export const putOneContact=(payload)=>{
    return function(dispatch){
        axios.put(`http://localhost:4000/contacts/${payload.id}`,payload.formValues)
        .then(res=>{
            toast.success("data changed successfully");
            axios.get(`http://localhost:4000/contacts`)
            .then(res=>{
                dispatch(editContactSuccess(res.data));
            })   
        })
        .catch(err=>{
            toast.error(err.message)
            dispatch(editContactFailure(err.message))
        })
    }
};