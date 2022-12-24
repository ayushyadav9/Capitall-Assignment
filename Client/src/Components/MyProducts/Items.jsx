import { useEffect, useState } from "react";
import Item from "./Item";
import ProductModal from "./ProductModal";
import { baseURL } from "../../utils/api";
import Loader from "../../utils/Loader";

export default function Items() {
  const [selectedProduct, setselectedProduct] = useState(null);
  const [showModal, setshowModal] = useState(false);
  const [products, setProducts] = useState(null);

  useEffect(() => {
    fetch(baseURL + "/getUserProduct", {
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
        console.log(data);
        setProducts(data.data);
      });
  }, []);

  return (
    <div>
      {showModal && (
        <ProductModal product={selectedProduct} setshowModal={setshowModal} />
      )}
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-5 sm:px-6 lg:max-w-7xl lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Products Listed by <span className="text-indigo-600">You</span>
          </h3>
        </div>
        {products ? (
          products.length > 0 ? (
            <div className="mt-6 grid grid-cols-1 gap-y-10 gap-x-6 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
              {products.map((product) => (
                <Item
                  key={product.id}
                  product={product}
                  setselectedProduct={setselectedProduct}
                  setshowModal={setshowModal}
                />
              ))}
            </div>
          ) : (
            <h1 className="flex justify-center">
              You have not uploaded any Product
            </h1>
          )
        ) : (
          <Loader />
        )}
      </div>
    </div>
  );
}
