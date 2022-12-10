import axios from "axios";
import { useEffect, useState } from "react";
import { toast } from "react-hot-toast";
import { BsPerson } from "react-icons/bs";
import { CiMail } from "react-icons/ci";
import { useNavigate, useParams } from "react-router-dom";

const EditContact = ({updateHandler}) => {
    const id=useParams().id; 
    let navigate = useNavigate();
    const [formValues,setFormValues]=useState({name:"",email:""});
    useEffect(()=>{
        axios.get(`http://localhost:4000/contacts/${id}`)
        .then(res=>{
            setFormValues({name:res.data.name,email:res.data.email})
        })
        .catch(err=>toast.error(err.message))
    },[])

    const changeFormHandler=(e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
    };
    const updateHandlerr=(e)=>{
        e.preventDefault();
        updateHandler(formValues,id);
        setFormValues({name:"",email:""});
        navigate("/"); 
    }
    return ( 
        <div className=" w-full mb-16">
            <form className="max-w-xs mx-auto" onSubmit={updateHandlerr}>
                <div className="flex flex-col justify-center items-start text-1 gap-1 w-full mb-3">
                    <label htmlFor="name">name</label>
                    <div className="border border-primary-4 flex justify-start items-center rounded-sm w-full">
                        <p className="flex justify-center items-center ml-1"><BsPerson /></p>
                        <input type="text" name="name" className="py-1 px-2 outline-none flex-1 bg-primary-1" value={formValues.name} onChange={changeFormHandler} />
                    </div>
                </div>
                <div className="flex flex-col justify-center items-start text-1 gap-1 w-full mb-8">
                    <label htmlFor="name">email</label>
                    <div className="border border-primary-4 flex justify-start  items-center rounded-sm w-full">
                        <p className="flex justify-center items-center ml-1"><CiMail /></p>
                        <input type="text" name="email" className="py-1 px-2 outline-none flex-1  bg-primary-1" value={formValues.email} onChange={changeFormHandler} />
                    </div>
                </div>
                <div className="w-full">
                    <button type="submit" className="bg-primary-4 px-4 py-2 w-full rounded-sm">Update</button>
                </div>
            </form>
        </div>
     );
}
 
export default EditContact;