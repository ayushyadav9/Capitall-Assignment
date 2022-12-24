import { useEffect, useState } from "react";
import Item from "./Item";
import { baseURL } from "../../utils/api";
import Loader from "../../utils/Loader";

export default function Items() {
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
        setProducts(data.data);
      });
  }, []);

  return (
    <div>
      <div className="mx-auto max-w-2xl py-16 px-4 sm:py-5 sm:px-6 lg:max-w-5xl lg:px-8">
        <div className="text-center mb-16">
          <h3 className="text-3xl sm:text-4xl leading-normal font-extrabold tracking-tight text-gray-900">
            Products Listed by <span className="text-indigo-600">You</span>
          </h3>
        </div>
        {products ? (
          products.length > 0 ? (
            <div className="mt-6 mx-auto">
              {products.map((product) => (
                <Item
                  key={product._id}
                  product={product}
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
