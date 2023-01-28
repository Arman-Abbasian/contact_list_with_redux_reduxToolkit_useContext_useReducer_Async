import { useFormik } from "formik";
import Input from '../../common/Input';
import * as Yup from 'yup';
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { BiMobile } from "react-icons/bi";
import { CiLocationOn } from "react-icons/ci";
import { AiOutlinePhone } from "react-icons/ai";
import Textarea from "../../common/Textarea";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addOneContact } from "../../redux/contacts/contactsAction";

const AddContactRedux = () => {
    const dispatch=useDispatch();
    const initialValues={name:"",email:"",mobile:"",phone:"",address:""};
    let navigate = useNavigate();
    const onSubmit=(values, { resetForm })=>{
        dispatch(addOneContact(values))
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
const formik=useFormik({initialValues,onSubmit,validationSchema,validateOnMount:true});
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
                <button className={`w-full p-2 rounded-sm bg-primary-4 mt-10 opacity-70  ${formik.isValid && 'opacity-100 cursor-pointer'}`} disabled={false} type="submit">Add</button>
            </form>
        </div>
     );
}
 
export default AddContactRedux;