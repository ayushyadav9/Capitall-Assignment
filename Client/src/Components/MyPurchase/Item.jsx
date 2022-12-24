import React from "react";
import { func } from "../../utils/timeCalc";

const Item = ({ product }) => {
  return (
    <div className="my-1 px-1  md:w-1/2 lg:my-4 lg:px-4 lg:w-1/4 cursor-pointer">
      <article className="overflow-hidden rounded-lg shadow-lg hover:shadow-2xl">
        <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden  lg:aspect-none lg:h-80 sm:h-80 md:h-80">
          <img
            alt="Placeholder"
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
            src={product.image}
          />
        </div>
        <div className="px-4 py-3 ">
          <div className="flex justify-between">
            <span className="text-gray-400 text-xs">
              by <span className="text-gray-700">{product.owner.name}</span>
            </span>
            <span className="text-gray-400 text-xs">
              bought on{" "}
              <span className="text-gray-700">{func(product.boughtOn)}</span>
            </span>
          </div>
          <div className="flex justify-between mt-1">
            <p className="text-lg font-bold text-black truncate block capitalize ">
              {product.name}
            </p>
            <p className="text-lg font-bold text-black  cursor-auto">
              ₹{product.price}
            </p>
          </div>
          <p className="text-sm text-gray-400 mt-1">{product.desc}</p>
        </div>
      </article>
    </div>
  );
};

export default Item;
