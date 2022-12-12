import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsyncContacts, removeAsyncContact } from "../../feature/contactsSlice";
import ContactRedex from "./ContactReduxToolkit";

const ContactsReduxToolkit = () => {
    const contacts=useSelector(state=>state.contacts);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAsyncContacts())
    },[])
    return ( 
        <div className="flex flex-col gap-2">
            {contacts.data && contacts.data.map(contact=>{
                return <ContactRedex key={contact.id} name={contact.name} email={contact.email} id={contact.id} deleteHandler={()=>dispatch(removeAsyncContact(contact.id))} />
            })}
        </div>
     );
}
 
export default ContactsReduxToolkit;