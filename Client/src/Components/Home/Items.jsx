import { useEffect, useState } from "react";
import Item from "./Item";
import { baseURL } from "../../utils/api";
import Loader from "../../utils/Loader";
import ConfirmBuy from "../Util/ConfirmBuy";

export default function Items() {
  const [selectedProduct, setselectedProduct] = useState(null);
  const [showBuyModal, setshowBuyModal] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(baseURL + "/getAllProduct", {
      method: "GET",
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setProducts(data.data);
      });
  }, []);

  return (
    <div>
      {showBuyModal && (
        <ConfirmBuy
          product={selectedProduct}
          setshowBuyModal={setshowBuyModal}
          setProducts={setProducts}
          products={products}
        />
      )}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-5 sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Products for <span className="text-indigo-600">Sale</span>
          </h3>
        </div>
        {products ? (
          products.length > 0 ? (
            <div className="mt-6  mx-auto">
              {products.map((product) => (
                <Item
                  key={product._id}
                  product={product}
                  setselectedProduct={setselectedProduct}
                  setshowBuyModal={setshowBuyModal}
                />
              ))}
            </div>
          ) : (
            <h1 className="flex justify-center">No Products Listed</h1>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
