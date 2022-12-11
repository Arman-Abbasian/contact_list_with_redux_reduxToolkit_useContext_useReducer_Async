import { useEffect } from "react";
import { useContacts, useContactsActions } from "../../providers/ContactsProvider";
import ContactContext from "./ContactContext";



const ContactsContext = () => {
    const contacts=useContacts();
    const {initialLoading,deleteHandler}=useContactsActions();
    useEffect(()=>{
        initialLoading();
    },[]);
    console.log(contacts)
    const rendering=()=>{
        contacts.loading &&  <p>loading...</p>
        contacts.error &&   <p>{contacts.error}</p>
        !contacts.data &&   <p>no contacts existed</p>
        return ( 
            <div className="flex flex-col gap-2">
                {contacts.data && contacts.data.map(contact=>{
                    return <ContactContext key={contact.id} name={contact.name} email={contact.email} id={contact.id}  deleteHandler={()=>deleteHandler(contact.id)}/>
                })}
            </div>
         );
    };
      return(
        <div>{rendering()}</div>
      )
}
 
export default ContactsContext;