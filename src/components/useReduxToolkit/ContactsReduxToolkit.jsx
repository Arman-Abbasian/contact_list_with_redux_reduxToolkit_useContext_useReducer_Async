import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getAsyncContacts,
  removeAsyncContact,
} from "../../feature/contactsSlice";
import ContactRedex from "./ContactReduxToolkit";
import FilterContacts from "../useReduxToolkit/FilterContacts";

const ContactsReduxToolkit = () => {
  const contacts = useSelector((state) => state.contacts);
  const dispatch = useDispatch();
  const [showContacts, setShowContacts] = useState(null);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    mobile: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    dispatch(getAsyncContacts());
  }, []);
  useEffect(() => {
    if (contacts.data) {
      let filteredContacts = contacts.data;
      filteredContacts = filterContact(filteredContacts, "name");
      filteredContacts = filterContact(filteredContacts, "email");
      filteredContacts = filterContact(filteredContacts, "mobile");
      filteredContacts = filterContact(filteredContacts, "phone");
      filteredContacts = filterContact(filteredContacts, "address");
      console.log(filteredContacts);
      setShowContacts({ ...contacts, data: filteredContacts });
    }
  }, [contacts, filters]);
  //filter name
  const filterContact = (arr, name) => {
    if (filters[name] === "") {
      return arr;
    } else {
      return arr.filter((item) =>
        item[name].toLowerCase().includes(filters[name].toLowerCase())
      );
    }
  };
  const changeHandler = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-2">
      <FilterContacts filters={filters} changeHandler={changeHandler} />
      {showContacts &&
        showContacts.data &&
        showContacts.data.map((contact) => {
          return (
            <ContactRedex
              key={contact.id}
              name={contact.name}
              mobile={contact.mobile}
              id={contact.id}
              deleteHandler={() => dispatch(removeAsyncContact(contact.id))}
            />
          );
        })}
    </div>
  );
};

export default ContactsReduxToolkit;
