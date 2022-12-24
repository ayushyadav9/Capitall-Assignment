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
    image: null,
  });
  function getBase64(file) {
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function () {
      setformdata({ ...formData, image: reader.result });
      return;
    };
    reader.onerror = function (error) {
      console.log("Error: ", error);
    };
  }
  const handelAdd = (e) => {
    e.preventDefault();
    console.log(formData);
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
        console.log(data);
        setformdata({
          name: "",
          price: "",
          desc: "",
          image: null,
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
                for="grid-first-name"
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
              {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-last-name"
              >
                Price
              </label>
              <input
                onChange={(e) => {
                  setformdata({ ...formData, price: e.target.value });
                }}
                value={formData.price}
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                type="text"
              />
            </div>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                for="grid-password"
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
            <div className="flex justify-between w-full px-3">
              <div className="md:flex md:items-center">
                <label className="block">
                  <span className="sr-only">Choose profile photo</span>
                  <input
                    type="file"
                    onChange={(e) => {
                      getBase64(e.target.files[0]);
                    }}
                    className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-full file:border-0
                    file:text-sm file:font-semibold
                    file:bg-violet-50 file:text-violet-700
                    hover:file:bg-violet-100
                    "
                  />
                </label>
              </div>
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
