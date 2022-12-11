// import axios from "axios";
// import { useEffect, useState } from "react";
// import { toast } from "react-hot-toast";
// import { BsPerson } from "react-icons/bs";
// import { CiMail } from "react-icons/ci";
// import { useNavigate, useParams } from "react-router-dom";

// const EditContact = ({updateHandler}) => {
//     const id=useParams().id; 
//     let navigate = useNavigate();
//     const [formValues,setFormValues]=useState({name:"",email:""});
//     useEffect(()=>{
//         axios.get(`http://localhost:4000/contacts/${id}`)
//         .then(res=>{
//             setFormValues({name:res.data.name,email:res.data.email})
//         })
//         .catch(err=>toast.error(err.message))
//     },[])

//     const changeFormHandler=(e)=>{
//         setFormValues({...formValues,[e.target.name]:e.target.value})
//     };
//     const updateHandlerr=(e)=>{
//         e.preventDefault();
//         updateHandler(formValues,id);
//         setFormValues({name:"",email:""});
//         navigate("/"); 
//     }
//     return ( 
//         <div className=" w-full mb-16">
//             <form className="max-w-xs mx-auto" onSubmit={updateHandlerr}>
//                 <div className="flex flex-col justify-center items-start text-1 gap-1 w-full mb-3">
//                     <label htmlFor="name">name</label>
//                     <div className="border border-primary-4 flex justify-start items-center rounded-sm w-full">
//                         <p className="flex justify-center items-center ml-1"><BsPerson /></p>
//                         <input type="text" name="name" className="py-1 px-2 outline-none flex-1 bg-primary-1" value={formValues.name} onChange={changeFormHandler} />
//                     </div>
//                 </div>
//                 <div className="flex flex-col justify-center items-start text-1 gap-1 w-full mb-8">
//                     <label htmlFor="name">email</label>
//                     <div className="border border-primary-4 flex justify-start  items-center rounded-sm w-full">
//                         <p className="flex justify-center items-center ml-1"><CiMail /></p>
//                         <input type="text" name="email" className="py-1 px-2 outline-none flex-1  bg-primary-1" value={formValues.email} onChange={changeFormHandler} />
//                     </div>
//                 </div>
//                 <div className="w-full">
//                     <button type="submit" className="bg-primary-4 px-4 py-2 w-full rounded-sm">Update</button>
//                 </div>
//             </form>
//         </div>
//      );
// }
 
// export default EditContact;




























import { useFormik } from "formik";
import Input from '../../common/Input';
import * as Yup from 'yup';
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { BiMobile } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import Textarea from "../../common/Textarea";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-hot-toast";

const EditContact = ({updateHandler}) => {
    const id=useParams().id;
    const [formValues,setFormValues]=useState(null);
    const initialValues={name:"",email:"",mobile:"",phone:"",address:""};
    let navigate = useNavigate();
    useEffect(()=>{
        axios.get(`http://localhost:4000/contacts/${id}`)
        .then(res=>{
            setFormValues(res.data);
        })
        .catch(err=>toast.error(err.message))
    },[])
    const onSubmit=(values, { resetForm })=>{
        console.log(values);
        updateHandler(values,id);
        resetForm();
        navigate("/")
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema=Yup.object({
    name:Yup.string().required('name is required').min(6,"min character is 6"),
    email:Yup.string().email('the input is not an email').required('email is required'),
    mobile:Yup.string().required('mobile number is required').matches(phoneRegExp, 'Phone number is not valid'),
    phone: Yup.string().required("phone number is required").matches(phoneRegExp, 'Phone number is not valid'),
    address:Yup.string().required('address is required').min(10,"min character is 10"),
});
const formik=useFormik({initialValues:formValues,onSubmit,validationSchema,validateOnMount:true,enableReinitialize: true,});
console.log(formik.errors);
console.log(formik.touched)
console.log(formik.isValid);
    return ( 
        
        <div>
            <form onSubmit={formik.handleSubmit} className="max-w-xs mx-auto">
                <Input name='name'  formik={formik} logo={<MdPersonOutline className="w-6 h-6 text-primary-4 ml-1" />} />
                <Input name='email'  formik={formik} logo={<MdOutlineEmail className="w-6 h-6 text-primary-4 ml-1" />}/>
                <Input name='mobile' formik={formik} logo={<BiMobile  className="w-6 h-6 text-primary-4 ml-1" />} />
                <Input name='phone'  formik={formik} logo={<AiOutlinePhone className="w-6 h-6 text-primary-4 ml-1" />}/>
                <Textarea name='address'  formik={formik} logo={<CiLocationOn className="w-6 h-6 text-primary-4 ml-1" />} />
                <button className={`w-full p-2 rounded-sm bg-primary-4 mt-10 opacity-70  ${formik.isValid && 'opacity-100 cursor-pointer'}`} disabled={!formik.isValid} type="submit">Add</button>
                
            </form>
        </div>
     );
}
 
export default EditContact;