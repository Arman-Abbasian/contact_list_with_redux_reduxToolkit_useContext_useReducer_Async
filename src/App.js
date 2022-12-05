import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';
import AddContact from './components/functional/AddContact/AddContact';
import Contacts from './components/functional/Contacts/Contacts';

function App() {
  const [contacts,setContacts]=useState(null);
  useEffect(()=>{
    axios.get(`http://localhost:4000/contacts`)
    .then(res=>setContacts(res.data))
    .catch(err=>setContacts(err.message))

  },[]);

  const deleteHandler=async(id)=>{
    try {
      await axios.delete(`http://localhost:4000/contacts/${id}`)
      const {data}=await axios.get(`http://localhost:4000/contacts`)
      setContacts(data)
    } catch (err) {
      console.log(err.message)
    }
  }

  return (
    <div className="App">
      <h1>contact App</h1>
      <section className='mb-16'><AddContact /></section>
      <section className='flex flex-col gap-2'><Contacts contacts={contacts} deleteHandler={deleteHandler}/></section>
    </div>
  );
}

export default App;
