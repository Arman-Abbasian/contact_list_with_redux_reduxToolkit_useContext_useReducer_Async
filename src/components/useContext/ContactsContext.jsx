import { useContacts, useContactsActions } from "../../providers/ContactsProvider";
import ContactContext from "./ContactContext";
import {useEffect} from 'react';


const ContactsContext = () => {
    const contacts=useContacts();
    const {initialLoading,deleteHandler}=useContactsActions();
    useEffect(()=>{
        console.log("use Effect");
        initialLoading();
    },[]);
    console.log(contacts)
    return ( 
        <div className="flex flex-col gap-2">
            {contacts.data && contacts.data.map(contact=>{
                return <ContactContext key={contact.id} name={contact.name} email={contact.email} id={contact.id}  deleteHandler={()=>deleteHandler(contact.id)}/>
            })}
        </div>
     );
}
 
export default ContactsContext;