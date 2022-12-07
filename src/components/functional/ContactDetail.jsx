import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useParams } from "react-router-dom";

const ContactDetail = () => {
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
            <p>name: {contact.data.name}</p>
            <p>email: {contact.data.email}</p>
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
 
export default ContactDetail;