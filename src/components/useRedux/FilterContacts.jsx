import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineFilter } from "react-icons/ai";
import { useSelector } from "react-redux";

const FilterContacts = ({ filters, changeHandler }) => {
  const contacts = useSelector((state) => state.contacts);
  console.log(contacts);
  const [options, setOptions] = useState({
    name: null,
    email: null,
    mobile: null,
    phone: null,
    address: null,
  });
  const [showFilterSection, setShowFilterSection] = useState(false);
  //make name options
  // if (!options.name) {
  //   axios
  //     .get(`http://localhost:4000/contacts`)
  //     .then((res) => {
  //       const data = res.data;
  //       const name = data.map((item) => {
  //         return { id: item.id, name: item.name };
  //       });
  //       setOptions({ ...options, name: name });
  //     })
  //     .catch((err) => toast.error(err.message));
  // }
  // //make email options
  // if (!options.email) {
  //   axios
  //     .get(`http://localhost:4000/contacts`)
  //     .then((res) => {
  //       const data = res.data;
  //       const email = data.map((item) => {
  //         return { id: item.id, email: item.email };
  //       });
  //       setOptions({ ...options, email: email });
  //     })
  //     .catch((err) => toast.error(err.message));
  // }
  // //make mobile options
  // if (!options.mobile) {
  //   axios
  //     .get(`http://localhost:4000/contacts`)
  //     .then((res) => {
  //       const data = res.data;
  //       const mobile = data.map((item) => {
  //         return { id: item.id, mobile: item.mobile };
  //       });
  //       setOptions({ ...options, mobile: mobile });
  //     })
  //     .catch((err) => toast.error(err.message));
  // }
  // //make phone options
  // if (!options.phone) {
  //   axios
  //     .get(`http://localhost:4000/contacts`)
  //     .then((res) => {
  //       const data = res.data;
  //       const phone = data.map((item) => {
  //         return { id: item.id, phone: item.phone };
  //       });
  //       setOptions({ ...options, phone: phone });
  //     })
  //     .catch((err) => toast.error(err.message));
  // }
  // //make address options
  // if (!options.address) {
  //   axios
  //     .get(`http://localhost:4000/contacts`)
  //     .then((res) => {
  //       const data = res.data;
  //       const address = data.map((item) => {
  //         return { id: item.id, address: item.address };
  //       });
  //       setOptions({ ...options, address: address });
  //     })
  //     .catch((err) => toast.error(err.message));
  // }
  return (
    <div className="mb-10">
      <button
        className="w-full p-2 rounded-sm bg-primary-4 mb-4 shadow-md shadow-primary_light_green"
        onClick={() => setShowFilterSection(!showFilterSection)}
      >
        {showFilterSection ? "hide filter section" : "show filter section"}
      </button>
      {contacts.data && (
        <div
          className={`sm:grid-cols-2 gap-8  w-full relative ${
            showFilterSection ? "grid" : "hidden"
          }`}
        >
          {/* make name options */}
          <>
            <div className="border rounded-sm focus:border-2 flex items-center w-full p-2 gap-2">
              <span>
                <AiOutlineFilter className="w-6 h-6 text-primary-4" />
              </span>
              <input
                placeholder="search name ..."
                list="namee"
                name="name"
                className="w-full bg-transparent outline-none text-primary-4"
                value={filters.name}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <datalist id="namee">
              {contacts.data.map((item) => {
                return (
                  <option key={item.id} value={item.name}>
                    {item.name}
                  </option>
                );
              })}
            </datalist>
          </>

          {/* make email options */}
          <>
            <div className="border rounded-sm focus:border-2 flex items-center w-full p-2 gap-2">
              <span>
                <AiOutlineFilter className="w-6 h-6 text-primary-4" />
              </span>
              <input
                placeholder="search email ..."
                list="emaile"
                name="email"
                className="w-full bg-transparent outline-none text-primary-4"
                value={filters.email}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <datalist id="emaile">
              {contacts.data.map((item) => {
                return (
                  <option key={item.id} value={item.email}>
                    {item.email}
                  </option>
                );
              })}
            </datalist>
          </>

          {/* make enter delivery options */}
          <>
            <div className="border rounded-sm focus:border-2 flex items-center w-full p-2 gap-2">
              <span>
                <AiOutlineFilter className="w-6 h-6 text-primary-4" />
              </span>
              <input
                placeholder="search mobile number..."
                list="mobilee"
                name="mobile"
                className="w-full bg-transparent outline-none text-primary-4"
                value={filters.mobile}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <datalist id="mobilee">
              {contacts.data.map((item) => {
                return (
                  <option key={item.id} value={item.mobile}>
                    {item.mobile}
                  </option>
                );
              })}
            </datalist>
          </>

          <>
            <div className="border rounded-sm focus:border-2 flex items-center w-full p-2 gap-2">
              <span>
                <AiOutlineFilter className="w-6 h-6 text-primary-4" />
              </span>
              <input
                placeholder="search phone number ..."
                list="phonee"
                name="phone"
                className="w-full bg-transparent outline-none text-primary-4"
                value={filters.phone}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <datalist id="phonee">
              {contacts.data.map((item) => {
                return (
                  <option key={item.id} value={item.phone}>
                    {item.phone}
                  </option>
                );
              })}
            </datalist>
          </>

          <>
            <div className="border rounded-sm focus:border-2 flex items-center w-full p-2 gap-2">
              <span>
                <AiOutlineFilter className="w-6 h-6 text-primary-4" />
              </span>
              <input
                placeholder="search address ..."
                list="addresss"
                name="address"
                className="w-full bg-transparent outline-none text-primary-4"
                value={filters.address}
                onChange={(e) => changeHandler(e)}
              />
            </div>
            <datalist id="addresss">
              {contacts.data.map((item) => {
                return (
                  <option key={item.id} value={item.address}>
                    {item.address}
                  </option>
                );
              })}
            </datalist>
          </>
        </div>
      )}
    </div>
  );
};

export default FilterContacts;
