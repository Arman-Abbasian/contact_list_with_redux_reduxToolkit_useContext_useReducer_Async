import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteOneContact, fetchContacts } from "../../redux/contacts/contactsAction";
import ContactRedex from "./ContactRedux";

const ContactsRedux = () => {
    const contacts=useSelector(state=>state.contacts);
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(fetchContacts())
    },[])
    return ( 
        <div className="flex flex-col gap-2">
            {contacts.data && contacts.data.map(contact=>{
                return <ContactRedex key={contact.id} name={contact.name} email={contact.email} id={contact.id} deleteHandler={()=>dispatch(deleteOneContact(contact.id))} />
            })}
        </div>
     );
}
 
export default ContactsRedux;