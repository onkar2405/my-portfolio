import React, { useState } from "react";

export default function ContactMeForm({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    company: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission, e.g., send data to server
    console.log(formData);
    // Close the modal after form submission
    onClose();
  };

  return (
    <div
      className={`fixed z-10 inset-0 overflow-y-auto ${
        isOpen ? "block" : "hidden"
      }`}
    >
      <div className="flex items-center justify-center min-h-screen">
        <div className="modal-overlay absolute w-full h-full bg-gray-900 opacity-50"></div>
        <div className="modal-container bg-slate-800 w-11/12 md:max-w-md mx-auto rounded shadow-lg z-50 overflow-y-auto">
          <div className="modal-content py-4 text-left px-6">
            <div className="flex justify-between items-center pb-3">
              <p className="text-2xl text-slate-200 font-bold">Contact Me</p>
              <div
                className="modal-close cursor-pointer z-50"
                onClick={onClose}
              >
                <svg
                  className="fill-current text-slate-200 hover:bg-teal-100 rounded-full hover:rounded-full hover:text-teal-950 transition ease-in-out delay-75"
                  xmlns="http://www.w3.org/2000/svg"
                  width="30"
                  height="30"
                  viewBox="0 0 18 18"
                >
                  <path
                    className="heroicon-ui"
                    d="M6.293 6.293a1 1 0 0 1 1.414 0L9 7.586l1.293-1.293a1 1 0 1 1 1.414 1.414L10.414 9l1.293 1.293a1 1 0 0 1-1.414 1.414L9 10.414l-1.293 1.293a1 1 0 0 1-1.414-1.414L7.586 9 6.293 7.707a1 1 0 0 1 0-1.414z"
                  />
                </svg>
              </div>
            </div>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block text-slate-200 text-sm font-bold mb-2">
                  Name:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block text-slate-300 text-sm font-bold mb-2">
                  Contact Number:
                </label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  type="text"
                  name="contactNumber"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-slate-300 text-sm font-bold mb-2">
                  Message:
                </label>
                <textarea
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  name="company"
                  rows={5}
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button
                  className="bg-teal-400/10 text-teal-300 text-md font-bold rounded-full px-4 py-2 cursor-pointer hover:bg-teal-100 hover:text-teal-950"
                  type="submit"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
