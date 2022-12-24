import React from "react";

const Item = ({
  product,
  setselectedProduct,
  setshowModal,
  setshowBuyModal,
}) => {
  const handelViewProduct = () => {
    setselectedProduct(product);
    setshowModal(true);
  };
  const handelBuyProduct = () => {
    setselectedProduct(product);
    setshowBuyModal(true);
  };
  return (
    <div className="relative  shadow-xl  rounded-md transform hover:translate-y-2 hover:shadow-xl transition duration-300">
      <div className="min-h-80 aspect-w-1 aspect-h-1 w-full overflow-hidden rounded-t-md bg-gray-200  lg:aspect-none lg:h-80 sm:h-80 md:h-80">
        <img
          src={product.image}
          alt=""
          className="h-full w-full object-cover object-center lg:h-full lg:w-full"
        />
      </div>
      <div className="p-4 ">
        <div className="flex justify-between">
          <h3 className="text-sm text-black font-semibold">
            <span aria-hidden="true" className="" />
            {product.name}
          </h3>
          <p className="text-sm font-medium text-gray-900">₹{product.price}</p>
        </div>
        <div className="flex justify-between">
          <p className=" text-xs text-gray-500">
            by <span className="text-gray-700">{product.owner.name}</span>
          </p>
          {product.isSold ? (
            <p className="text-xs font-bold text-green-600">SOLD</p>
          ) : (
            <p className="text-xs font-bold text-red-600">UNSOLD</p>
          )}
        </div>
        <div className="flex justify-around">
          <div
            className="cursor-pointer flex justify-center px-10 py-1 mt-2  font-semibold rounded-md bg-indigo-600 hover:bg-indigo-500 text-white"
            onClick={handelViewProduct}
          >
            View
          </div>
          <div
            className="cursor-pointer flex justify-center px-10 py-1 mt-2  font-semibold rounded-md border-2 border-indigo-500 hover:bg-indigo-500 hover:text-white "
            onClick={handelBuyProduct}
          >
            Buy
          </div>
        </div>
      </div>
    </div>
  );
};

export default Item;
