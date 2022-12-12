import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import toast, { Toaster } from 'react-hot-toast';
import AddContact from './components/functional/AddContact';
import Contacts from './components/functional/Contacts';
import Layout from './components/Layout/Layout';
import { Route, Routes } from 'react-router-dom';
import ContactDetail from './components/functional/ContactDetail';
import EditContact from './components/functional/ContactEdit';

//useContext
import ContactsProvider from './providers/ContactsProvider';
import AddContactContext from './components/useContext/AddContactContext';
import ContactsContext from './components/useContext/ContactsContext';
import ContactDetailContext from './components/useContext/ContactDetailContext';
import EditContactContext from './components/useContext/ContactEditContext';

//redux
import { Provider } from 'react-redux';
import store from './redux/store.js';

function App() {
  const [contacts,setContacts]=useState(null);
  useEffect(()=>{
    axios.get(`http://localhost:4000/contacts`)
    .then(res=>setContacts(res.data))
    .catch(err=>setContacts(err.message))

  },[]);

  const deleteHandler=async(e,id)=>{
    try {
      console.log(id);
      e.stopPropagation();
      await axios.delete(`http://localhost:4000/contacts/${id}`);
      toast.success("contact deleted successfully");
      const {data}=await axios.get(`http://localhost:4000/contacts`);
      setContacts(data);
    } catch (err) {
      toast.error(err.message);
    }
  }
  const addHandler=async(formValues)=>{
    try {
      await axios.post(`http://localhost:4000/contacts`,formValues);
      toast.success("contact added successfully");
      const {data}=await axios.get(`http://localhost:4000/contacts`)
      setContacts(data)
    } catch (err) {
      toast.error(err.message)
    }
  }
  const updateHandler=async(formValues,id)=>{
    try {
      await axios.put(`http://localhost:4000/contacts/${id}`,formValues);
      toast.success("contact updated successfully");
      const {data}=await axios.get(`http://localhost:4000/contacts`)
      setContacts(data)
    } catch (err) {
      toast.error(err.message)
    }
  }

  return ( 
    
        // <Layout>
        //   <div className="flex flex-col gap-2 mb-12 container max-w-md mx-auto">
        //   <Routes> 
        //     <Route path='/add' element={<AddContact addHandler={addHandler} />} />
        //     <Route path='/' element={<Contacts contacts={contacts} deleteHandler={deleteHandler} />}/>
        //     <Route path='/contact/:id' element={<ContactDetail contacts={contacts} />}/>
        //     <Route path='/edit/:id' element={<EditContact updateHandler={updateHandler} />}/>
        //   </Routes>
        //   </div>
        //   <Toaster />
        // </Layout>
        
          // <Layout>
          //   <ContactsProvider>
          //     <div className="flex flex-col gap-2 mb-12 container max-w-md mx-auto">
          //       <Routes> 
          //         <Route path='/add' element={<AddContactContext />} />
          //         <Route path='/' element={<ContactsContext />}/>
          //         <Route path='/contact/:id' element={<ContactDetailContext />}/>
          //         <Route path='/edit/:id' element={<EditContactContext />}/>
          //       </Routes>
          //     </div>
          //  <Toaster />
          //  </ContactsProvider>
          // </Layout>
        
          <Layout>
            <Provider store={store}>

            </Provider>
          </Layout>
        
   
  );
}

export default App;
