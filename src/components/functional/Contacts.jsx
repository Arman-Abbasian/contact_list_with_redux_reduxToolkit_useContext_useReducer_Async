import { Link } from "react-router-dom";
import Contact from "./Contact";

const Contacts = ({contacts,deleteHandler}) => {
    return ( 
        <div className="flex flex-col gap-2">
            {contacts && contacts.map(contact=>{
                return <Contact key={contact.id} name={contact.name} email={contact.email} id={contact.id}  deleteHandler={(e)=>deleteHandler(e,contact.id)}/>
            })}
        </div>
     );
}
 
export default Contacts;