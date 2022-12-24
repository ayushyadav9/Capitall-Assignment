import React from "react";
import { func } from "../../utils/timeCalc";

const Item = ({
  product,
  setselectedProduct,
  setshowBuyModal,
}) => {
  const handelBuyProduct = () => {
    setselectedProduct(product);
    setshowBuyModal(true);
  };
  return (
    <div class="bg-white p-6 mt-3 rounded-lg shadow-lg border-2 hover:shadow-xl transition duration-300 cursor-pointer">
      <div className="flex justify-between">
        <div>
          <h2 class="text-2xl font-bold  text-gray-800">{product.name}</h2>
          <p className=" text-xs text-gray-500">
            by <span className="text-gray-700">{product.owner.name}</span>
          </p>
          <p className=" text-xs text-gray-500">
            posted on <span className="text-gray-700">{func(product.createdAt)}</span>
          </p>
        </div>
        <div className="">
          <p className="flex justify-end text-lg font-bold text-green-600">₹{product.price}</p>
          <div
            className="cursor-pointer flex justify-center px-10 py-1  mt-1 font-semibold rounded-md border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white "
            onClick={handelBuyProduct}
          >
            Buy
          </div>
        </div>
      </div>
      <p class="text-gray-700 font-thin text-sm leading-4 mt-3 mr-20">{product.desc}</p>
    </div>
  );
};

export default Item;
