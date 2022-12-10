import { useFormik } from "formik";
import Input from '../../common/Input';
import * as Yup from 'yup';
import { MdPersonOutline } from "react-icons/md";
import { MdOutlineEmail } from "react-icons/md";
import { BiMobile } from "react-icons/bi";
import Textarea from "../../common/Textarea";

const AddContact = () => {
    const initialValues={name:"",email:"",telNumber:"",phoneNumber:"",address:""};
    const onSubmit=(values)=>{
        console.log(values);
    }
    const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
const validationSchema=Yup.object({
    name:Yup.string().required('name is required').min(6,"min character is 6"),
    email:Yup.string().email('the input is not an email').required('email is required'),
    telNumber:Yup.string().required('tel number is required').matches(phoneRegExp, 'Phone number is not valid'),
    phoneNumber: Yup.string().required("phone number is required").matches(phoneRegExp, 'Phone number is not valid'),
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
                <Input name='tel' formik={formik} logo={<BiMobile  className="w-6 h-6 text-primary-4 ml-1" />} />
                <Input name='phone'  formik={formik} logo={<MdOutlineEmail className="w-6 h-6 text-primary-4 ml-1" />}/>
                <Textarea name='address'  formik={formik} />
                <button className="w-full p-2 rounded-sm bg-primary-4" type="submit">Add</button>
                
            </form>
        </div>
     );
}
 
export default AddContact;