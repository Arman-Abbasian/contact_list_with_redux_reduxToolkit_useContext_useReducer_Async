import { BsPerson } from "react-icons/bs";
import { AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const ContactReduxToolkit = ({ name, mobile, id, deleteHandler }) => {
  return (
    <div className="flex justify-between items-center gap-5 border border-primary-4 rounded-sm p-2 w-full">
      <Link to={`/contact/${id}`} className="flex-1 flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-primary-4 flex justify-center items-center">
          <BsPerson className="w-6 h-6 text-primary-2" />
        </div>
        <div className="flex flex-col justify-start items-start flex-1 overflow-hidden text-xs gap-2">
          <p className=" overflow-hidden">name : {name}</p>
          <p>mobile : {mobile}</p>
        </div>
      </Link>
      <div className="flex justify-center items-center gap-2">
        <Link to={`/edit/${id}`}>
          <AiOutlineEdit className="w-6 h-6 cursor-pointer text-primary-4" />
        </Link>
        <AiOutlineDelete
          onClick={(e) => deleteHandler(e, id)}
          className="w-6 h-6 cursor-pointer text-primary-4"
        />
      </div>
    </div>
  );
};

export default ContactReduxToolkit;
