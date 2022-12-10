const Textarea = ({name,type="text",formik,logo}) => {
    return ( 
        <>
        <div className="flex flex-col gap-2 justify-center items-center w-full relative overflow-hidden">
            <label className="flex w-full" htmlFor={`${name}`}>{`${name}`}</label>
            <div className= {`${formik.errors[name] && formik.touched[name]?'border border-red-600':`border border-primary-4`} rounded-sm flex items-center w-full`}>
            {logo}
            <textarea className="form-input px-4 py-2 flex-1 bg-primary-1 focus:outline-none" type={type} id={`${name}`}  name={`${name}`} {...formik.getFieldProps({name})}></textarea>
            </div>
        </div>
        
        <div>{formik.errors[name] && formik.touched[name] && <p className="text-primary-5">{formik.errors[name]}</p>}</div>
        </>
     );
}
 
export default Textarea;