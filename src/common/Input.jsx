const Input = ({name,type="text",formik,logo}) => {
    return ( 
        <>
        <div className="flex flex-col gap-2 justify-center items-center w-full relative overflow-hidden">
            <label className="flex w-full" htmlFor={`${name}`}>{`${name}`}</label>
            <div className="border border-primary-4 rounded-sm flex items-center w-full">
            {logo}
            <input className="form-input px-4 py-2 flex-1 bg-primary-1 focus:outline-none" type={type} id={`${name}`}  name={`${name}`} {...formik.getFieldProps({name})} />
            </div>
            
            
        </div>
        
        <div>{formik.errors[name] && formik.touched[name] && <p className="text-red-600">{formik.errors[name]}</p>}</div>
        </>
     );
}
 
export default Input;