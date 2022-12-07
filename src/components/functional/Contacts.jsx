import { Link } from "react-router-dom";
import Contact from "./Contact";

const Contacts = ({contacts,deleteHandler}) => {
    return ( 
        <div className="flex flex-col gap-2 mb-12">
            {contacts && contacts.map(contact=>{
                return <Link key={contact.id} to={`/contact/${contact.id}`}><Contact key={contact.id} name={contact.name} email={contact.email} id={contact.id} deleteHandler={()=>deleteHandler(contact.id)}/></Link>
            })}
        </div>
     );
}
 
export default Contacts;