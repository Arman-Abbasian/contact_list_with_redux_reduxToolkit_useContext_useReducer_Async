import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import AddContact from './components/functional/AddContact';
import Contacts from './components/functional/Contacts';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import ContactDetail from './components/functional/ContactDetail';


function App() {
  const [contacts,setContacts]=useState(null);
  useEffect(()=>{
    axios.get(`http://localhost:4000/contacts`)
    .then(res=>setContacts(res.data))
    .catch(err=>setContacts(err.message))

  },[]);

  const deleteHandler=async(id)=>{
    try {
      await axios.delete(`http://localhost:4000/contacts/${id}`);
      toast.success("contact deleted successfully");
      const {data}=await axios.get(`http://localhost:4000/contacts`);
      setContacts(data);
    } catch (err) {
      toast.error(err.message);
    }
  }
  const addHandler=async(e,formValues)=>{
    e.preventDefault();
    try {
      await axios.post(`http://localhost:4000/contacts`,formValues);
      toast.success("contact added successfully");
      const {data}=await axios.get(`http://localhost:4000/contacts`)
      setContacts(data)
    } catch (err) {
      toast.error(err.message)
    }
  }

  return ( 
        <Layout>
          <Routes>
            <Route path='/add' element={<AddContact submitHandler={addHandler} />} />
            <Route path='/' element={<Contacts contacts={contacts} deleteHandler={deleteHandler} />}/>
            <Route path='/contact/:id' element={<ContactDetail contacts={contacts} deleteHandler={deleteHandler} />}/>
          </Routes>
          <Toaster />
        </Layout>
        
        
   
  );
}

export default App;
