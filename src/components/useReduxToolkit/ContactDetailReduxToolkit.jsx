import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const ContactDetailReduxToolkit = () => {
    const params=useParams();
    const [contact,setContact]=useState({data:null,error:null,loading:false});
    useEffect(()=>{
        setContact({data:null,error:null,loading:true})
        axios.get(`http://localhost:4000/contacts/${id}`)
        .then(res=>setContact({data:res.data,error:null,loading:false}))
        .catch(err=>{
            setContact({data:null,error:err.message,loading:false});
            toast.error("fetching data failed")
        })
    },[]);
    const rendering=()=>{
        if (contact.loading)  return <p>loading</p>
        if(!contact.loading && contact.error ) return <p>{contact.error}</p>
        if(contact.data)  return (<div>
            <h2 className="mb-5"><span className="font-bold">name:</span> {contact.data.name}</h2>
            <h2 className="mb-5"><span className="font-bold">email:</span> {contact.data.email}</h2>
            <h2 className="mb-5"><span className="font-bold">mobile:</span> {contact.data.mobile}</h2>
            <h2 className="mb-5"><span className="font-bold">phone:</span> {contact.data.phone}</h2>
            <h2 className="mb-5"><span className="font-bold">address:</span> {contact.data.address}</h2>
            </div>
        )
    }

    console.log(params.id)
    const id=params.id;
    return ( 
        <div>
            {rendering() }
        </div>
     );
}
 
export default ContactDetailReduxToolkit;