import React from "react";
import { func } from "../../utils/timeCalc";

const Item = ({ product }) => {
  
  return (
    <div class="bg-white p-6 mt-3 rounded-lg shadow-lg border-2  hover:shadow-xl transition duration-300 cursor-pointer">
      <div className="flex justify-between">
        <div>
          <h2 class="text-2xl font-bold  text-gray-800">{product.name}</h2>
          {product.isSold ? (
            <>
              <p className=" text-xs text-gray-500">
                bought by{" "}
                <span className="text-gray-700">{product.boughtBy.name}</span>
              </p>
              <p className=" text-xs text-gray-500">
                on{" "}
                <span className="text-gray-700">{func(product.boughtOn)}</span>
              </p>
            </>
          ) : (
          
          <p className=" text-xs text-gray-500">
            posted on{" "}
            <span className="text-gray-700">{func(product.createdAt)}</span>
          </p>)}
        </div>

        <div>
          <p className="flex justify-end text-lg font-bold text-blue-600">
            ₹{product.price}
          </p>
          {product.isSold ? (
            <p className="text-lg font-bold text-green-600">SOLD</p>
          ) : (
            <p className="text-lg font-bold text-red-600">UNSOLD</p>
          )}
        </div>
      </div>
      <p class="text-gray-700 font-thin text-sm leading-4 mt-3 mr-20">{product.desc}</p>
    </div>
  );
};

export default Item;
