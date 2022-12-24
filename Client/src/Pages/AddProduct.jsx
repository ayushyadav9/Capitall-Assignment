import React, { useState } from "react";
import Navbar from "../Components/Navbar";
import { baseURL } from "../utils/api";
import { toast } from "react-toastify";

const AddProduct = () => {
  const [isLoading, setisLoading] = useState(false);
  const [formData, setformdata] = useState({
    name: "",
    price: "",
    desc: "",
  });

  const handelAdd = (e) => {
    e.preventDefault();
    setisLoading(true);
    fetch(baseURL + "/addProduct", {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("userJWT")}`,
      },
      body: JSON.stringify(formData),
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setisLoading(false);
        setformdata({
          name: "",
          price: "",
          desc: "",
        });
        toast.success("Product added successfuly");
      });
  };

  return (
    <>
      <Navbar />
      <div className="max-w-screen-md mx-auto p-5">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Add <span className="text-indigo-600">Product</span>
          </h3>
        </div>

        <form className="w-full">
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                Product Name
              </label>
              <input
                onChange={(e) => {
                  setformdata({ ...formData, name: e.target.value });
                }}
                value={formData.name}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border  rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                type="text"
              />
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Price (₹)
              </label>
              <input
                onChange={(e) => {
                  setformdata({ ...formData, price: e.target.value });
                }}
                value={formData.price}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="number"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password"
              >
                Product Description
              </label>
              <textarea
                onChange={(e) => {
                  setformdata({ ...formData, desc: e.target.value });
                }}
                value={formData.desc}
                rows="10"
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              ></textarea>
            </div>
            <div className="flex justify-end w-full px-3">
              <button
                onClick={handelAdd}
                className="shadow bg-indigo-600 hover:bg-indigo-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-6 rounded"
                type="submit"
              >
                {isLoading ? "Loading..." : "Add"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default AddProduct;
