import React from "react";
import { func } from "../../utils/timeCalc";

const Item = ({ product }) => {
  
  return (
    <div class="bg-white p-6 mt-3 rounded-lg shadow-lg border-2 hover:translate-y-1 hover:shadow-xl transition duration-300 cursor-pointer">
      <div className="flex justify-between">
        <div>
          <h2 class="text-2xl font-bold  text-gray-800">{product.name}</h2>
          
          <p className=" text-xs text-gray-500">
            posted by{" "}
            <span className="text-gray-700">{product.owner.name}</span>
          </p>
         
          <p className=" text-xs text-gray-500">
            bought on{" "}
            <span className="text-gray-700">{func(product.boughtOn)}</span>
          </p>
        </div>

        <div>
          <p className="flex justify-end text-lg font-bold text-green-600">
            ₹{product.price}
          </p>
        
        </div>
      </div>
      <p class="text-gray-700 font-thin text-sm leading-4 mt-3 mr-20">{product.desc}</p>
    </div>
  );
};

export default Item;
