import { useState } from "react";
import { BsPerson } from "react-icons/bs";
import { CiMail } from "react-icons/ci";

const AddContact = () => {
    const [formValues,setFormValues]=useState({name:"",email:""});
    const changeFormHandler=(e)=>{
        setFormValues({...formValues,[e.target.name]:e.target.value})
    }
    return ( 
        <div className=" w-full">
            <form className="p-2 max-w-xs mx-auto">
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
                    <button className="bg-primary-4 px-4 py-2 w-full rounded-sm">Add</button>
                </div>
            </form>
        </div>
     );
}
 
export default AddContact;