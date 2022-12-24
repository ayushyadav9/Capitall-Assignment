import React, { useState } from "react";
import { baseURL } from "../../utils/api";
import { toast } from "react-toastify";

const ProductModal = ({ product, setshowModal, setProducts, products }) => {
  const [isLoading, setisLoading] = useState(false);
  const handelBuy = () => {
    console.log(product);
    setisLoading(true);
    fetch(baseURL + "/buyProduct/" + product._id, {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
        Authorization: `Bearer ${localStorage.getItem("userJWT")}`,
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setisLoading(false);
        if (!data.success) {
          toast.info(data.message);
          return;
        }
        let t = products.filter((item) => {
          return item._id !== product._id;
        });
        setProducts(t);
        setshowModal(false);
        toast.success("Product bought successfuly");
        console.log(data);
      });
  };

  return (
    <div
      class="relative z-10"
      aria-labelledby="modal-title"
      role="dialog"
      aria-modal="true"
    >
      <div class="fixed inset-0 bg-black bg-opacity-80 transition-opacity"></div>
      <div class="fixed inset-0 z-10 overflow-y-auto">
        <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
            <div class="antialiased">
              <div class="bg-indigo-700 font-bold text-lg text-white md:text-center py-2 px-4 flex justify-between">
                <div className="ml-5">{product.name}</div>
                <div
                  className="cursor-pointer"
                  onClick={() => setshowModal(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </div>
              </div>
              <div class="py-6">
                <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-3">
                  <div class="flex flex-col md:flex-row -mx-4">
                    <div class="md:flex-1 px-4">
                      <div className="flex justify-center">
                        <img
                          className="max-h-96"
                          src={product.image}
                          alt=""
                        ></img>
                      </div>
                    </div>
                    <div class="md:flex-1 px-4">
                      <h2 class="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl">
                        {product.name}
                      </h2>
                      <p class="text-gray-500 text-sm">
                        By{" "}
                        <span class="text-indigo-600">
                          {product.owner.name}
                        </span>
                      </p>

                      <div class="flex items-center space-x-4 my-4">
                        <div>
                          <div class="rounded-lg bg-gray-100 flex py-2 px-3">
                            <span class="text-indigo-400 mr-1 mt-1">₹</span>
                            <span class="font-bold text-indigo-600 text-3xl">
                              {product.price}
                            </span>
                          </div>
                        </div>
                        <div class="flex-1">
                          {product.isSold ? (
                            <p class="text-green-500 text-xl font-bold">SOLD</p>
                          ) : (
                            <p class="text-red-500 text-xl font-bold">UNSOLD</p>
                          )}
                        </div>
                      </div>
                      <p class="text-gray-500">{product.desc}</p>

                      <div class="flex py-4 space-x-4">
                        <button
                          type="button"
                          onClick={handelBuy}
                          class="h-10 px-6  font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                          disabled={isLoading}
                        >
                          {isLoading ? "Loading..." : "Buy Now"}
                        </button>
                        <button
                          onClick={() => setshowModal(false)}
                          type="button"
                          class="h-10 px-6  font-semibold rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white"
                        >
                          Close
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
