import axios from "axios";
import { useContext } from "react";
import { useState } from "react";
import { createContext } from "react";
import { toast } from "react-hot-toast";

const ContactsContext = createContext();
const ContactsContextDispatcher = createContext();

const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState({
    data: [],
    loading: false,
    error: null,
  });
  return (
    <div>
      <ContactsContext.Provider value={contacts}>
        <ContactsContextDispatcher.Provider value={setContacts}>
          {children}
        </ContactsContextDispatcher.Provider>
      </ContactsContext.Provider>
    </div>
  );
};

export default ContactsProvider;

export const useContacts = () => useContext(ContactsContext);
export const useContactsActions = () => {
  const contacts = useContacts();
  const setContacts = useContext(ContactsContextDispatcher);

  //get all contacts
  const initialLoading = () => {
    setContacts({ data: [], loading: true, error: null });
    axios
      .get(`http://localhost:4000/contacts`)
      .then((res) => {
        setContacts({ data: res.data, loading: false, error: null });
      })
      .catch((err) =>
        setContacts({ data: [], loading: false, error: err.message })
      );
  };
  //delete one contact
  const deleteHandler = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/contacts/${id}`);
      toast.success("contact deleted successfully");
      const { data } = await axios.get(`http://localhost:4000/contacts`);
      setContacts({ data: data, loading: false, error: null });
    } catch (err) {
      toast.error(err.message);
    }
  };
  //add one contact
  const addHandler = async (formValues) => {
    try {
      await axios.post(`http://localhost:4000/contacts`, formValues);
      toast.success("contact added successfully");
      const { data } = await axios.get(`http://localhost:4000/contacts`);
      setContacts({ data: data, loading: false, error: null });
    } catch (err) {
      toast.error(err.message);
    }
  };
  //edit one contact
  const updateHandler = async (formValues, id) => {
    try {
      await axios.put(`http://localhost:4000/contacts/${id}`, formValues);
      toast.success("contact updated successfully");
      const { data } = await axios.get(`http://localhost:4000/contacts`);
      setContacts({ data: data, loading: false, error: null });
    } catch (err) {
      toast.error(err.message);
    }
  };
  return { initialLoading, deleteHandler, addHandler, updateHandler };
};
