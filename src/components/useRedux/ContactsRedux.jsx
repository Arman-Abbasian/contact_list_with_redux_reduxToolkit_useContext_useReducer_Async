import { useState } from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteOneContact,
  fetchContacts,
} from "../../redux/contacts/contactsAction";
import ContactRedex from "./ContactRedux";
import FilterContacts from "./FilterContacts";

const ContactsRedux = () => {
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);
  const dispatch = useDispatch();
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    mobile: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    dispatch(fetchContacts());
  }, []);
  const changeHandler = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };
  return (
    <div className="flex flex-col gap-2">
      <FilterContacts filters={filters} changeHandler={changeHandler} />
      {contacts.data &&
        contacts.data.map((contact) => {
          return (
            <ContactRedex
              key={contact.id}
              name={contact.name}
              email={contact.email}
              id={contact.id}
              deleteHandler={() => dispatch(deleteOneContact(contact.id))}
            />
          );
        })}
    </div>
  );
};

export default ContactsRedux;
