import { BsPerson } from "react-icons/bs";
import { AiOutlineDelete,AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const Contact = ({name,email,id,deleteHandler,updateHandler}) => {
    return ( 
        <div  className="flex justify-between items-center gap-5  border border-primary-4 rounded-sm p-2 w-full">
            <div><BsPerson className="w-6 h-6" /></div>
            <div className="flex flex-col justify-start items-start flex-1 overflow-hidden text-xs">
                <p className=" overflow-hidden">name : {name}</p>
                <p>email : {email}</p>
            </div>
            <div className="flex justify-center items-center gap-2"> 
                <Link to={`/edit/${id}`}><AiOutlineEdit className="w-6 h-6 cursor-pointer" /></Link>
                <AiOutlineDelete onClick={()=>deleteHandler(id)} className="w-6 h-6 cursor-pointer" />
                
            </div>
        </div>
     );
}
 
export default Contact;