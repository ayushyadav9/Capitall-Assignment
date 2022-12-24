import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import AddProduct from "./Pages/AddProduct";
import MyProducts from "./Pages/MyProducts";
import SignIn from "./Pages/SignIn";
import Register from "./Pages/Register";
import ProtectedRoute from "./utils/ProtectedRoute";
import MyPurchase from "./Pages/MyPurchase";

function App() {
  return (
    <div>
      <Routes>
        <Route element={<ProtectedRoute />}>
          <Route path="/" element={<Home />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/addProduct" element={<AddProduct />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/products" element={<MyProducts />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/myPurchase" element={<MyPurchase />} />
        </Route>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
