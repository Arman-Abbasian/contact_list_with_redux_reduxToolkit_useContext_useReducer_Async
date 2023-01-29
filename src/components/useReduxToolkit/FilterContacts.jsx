import axios from "axios";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineFilter } from "react-icons/ai";
import { useSelector } from "react-redux";

const FilterContacts = ({ filters, changeHandler }) => {
  const contacts = useSelector((state) => state.contacts);
  const [showFilterSection, setShowFilterSection] = useState(false);

  return (
    <div className="mb-10 w-full container mx-auto max-w-3xl">
      <button
        className="w-full p-2 rounded-sm bg-primary-4 mb-4 shadow-md shadow-primary_light_green"
        onClick={() => setShowFilterSection(!showFilterSection)}
      >
        {showFilterSection ? "hide filter section" : "show filter section"}
      </button>
      {contacts.data && (
        <div
          className={`md:grid-cols-2 gap-8  w-full relative ${
            showFilterSection ? "grid" : "hidden"
          }`}
        >
          {/* make name options */}
          <>
            <div className="border rounded-sm focus:border-2 border-primary-4 flex items-center w-full p-2 gap-2">
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
            <div className="border rounded-sm focus:border-2 border-primary-4 flex items-center w-full p-2 gap-2">
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
            <div className="border rounded-sm focus:border-2 border-primary-4 flex items-center w-full p-2 gap-2">
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
            <div className="border rounded-sm focus:border-2 border-primary-4 flex items-center w-full p-2 gap-2">
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
            <div className="border rounded-sm focus:border-2 border-primary-4 flex items-center w-full p-2 gap-2">
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
