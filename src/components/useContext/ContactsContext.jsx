import { useEffect, useState } from "react";
import {
  useContacts,
  useContactsActions,
} from "../../providers/ContactsProvider";
import ContactContext from "./ContactContext";
import FilterContacts from "./FilterContacts";

const ContactsContext = () => {
  const contacts = useContacts();
  const { initialLoading, deleteHandler } = useContactsActions();
  const [showContacts, setShowContacts] = useState(null);
  const [filters, setFilters] = useState({
    name: "",
    email: "",
    mobile: "",
    phone: "",
    address: "",
  });
  useEffect(() => {
    initialLoading();
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
  const rendering = () => {
    contacts.loading && <p>loading...</p>;
    contacts.error && <p>{contacts.error}</p>;
    !contacts.data && <p>no contacts existed</p>;
    return (
      <div className="flex flex-col gap-2">
        <FilterContacts filters={filters} changeHandler={changeHandler} />
        {showContacts &&
          showContacts.data &&
          showContacts.data.map((contact) => {
            return (
              <ContactContext
                key={contact.id}
                name={contact.name}
                mobile={contact.mobile}
                id={contact.id}
                deleteHandler={() => deleteHandler(contact.id)}
              />
            );
          })}
      </div>
    );
  };
  return <div>{rendering()}</div>;
};

export default ContactsContext;
