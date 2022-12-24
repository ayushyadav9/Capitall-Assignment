import { Fragment, useEffect, useState } from "react";
import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, useNavigate } from "react-router-dom";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  const [active, setactive] = useState(0);
  const navigate = useNavigate();
  useEffect(() => {
    let url = window.location.pathname;
    if (url === "/") {
      setactive(0);
    } else if (url === "/addProduct") {
      setactive(1);
    } else if (url === "/products") {
      setactive(2);
    } else if (url === "/myPurchase") {
      setactive(3);
    } else {
      setactive(4);
    }
  }, []);

  

  const handelSignout = (e) => {
    e.preventDefault();
    localStorage.removeItem("userJWT");
    navigate("/signin");
  };

  return (
    <Disclosure as="nav" className="bg-gray-800">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <img
                    className="block h-8 w-auto lg:hidden"
                    src="./images/logo.png"
                    alt="Your Company"
                  />
                  <img
                    className="hidden h-8 w-auto lg:block"
                    src="./images/logo.png"
                    alt="Your Company"
                  />
                </div>
                <div className="hidden sm:ml-6 sm:block">
                  <div className="flex space-x-4">
                    <Link
                      to="/"
                      onClick={() => setactive(0)}
                      className={classNames(
                        active === 0
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                    >
                      Home
                    </Link>
                    <Link
                      to="/addProduct"
                      onClick={() => setactive(1)}
                      className={classNames(
                        active === 1
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                    >
                      Add Product
                    </Link>
                    <Link
                      to="/products"
                      onClick={() => setactive(2)}
                      className={classNames(
                        active === 2
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                    >
                      My Products
                    </Link>
                    <Link
                      to="/myPurchase"
                      onClick={() => setactive(2)}
                      className={classNames(
                        active === 3
                          ? "bg-gray-900 text-white"
                          : "text-gray-300 hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                    >
                      My Purchases
                    </Link>
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 cursor-pointer">
                <span
                  onClick={handelSignout}
                  className={classNames(
                    active === 4
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "px-3 py-2 rounded-md text-sm font-medium"
                  )}
                >
                  Sign out
                </span>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pt-2 pb-3">
              <Disclosure.Button
                as="a"
                href="/"
                className={classNames(
                  active === 0
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
              >
                Home
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/addProduct"
                className={classNames(
                  active === 0
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
              >
                Add Product
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/products"
                className={classNames(
                  active === 0
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
              >
                My Products
              </Disclosure.Button>
              <Disclosure.Button
                as="a"
                href="/myPurchase"
                className={classNames(
                  active === 0
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
              >
                My Purchases
              </Disclosure.Button>
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
