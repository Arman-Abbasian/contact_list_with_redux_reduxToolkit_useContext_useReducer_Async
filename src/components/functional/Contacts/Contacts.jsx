import Contact from "../Contact/Contact";

const Contacts = ({contacts,deleteHandler}) => {
    return ( 
        <>
            {contacts && contacts.map(contact=>{
                return <Contact key={contact.id} name={contact.name} email={contact.email} id={contact.id} deleteHandler={()=>deleteHandler(contact.id)}/>
            })}
        </>
     );
}
 
export default Contacts;