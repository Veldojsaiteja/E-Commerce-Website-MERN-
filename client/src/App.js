import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import AdminDashboard from "./pages/admin/AdminDashboard";
import Pagenotfound from "./pages/Pagenotfound";
import Userdb from "./pages/user/Userdb";
import CreateCategory from "./pages/admin/CreateCategory";
import CreateProduct from "./pages/admin/CreateProduct";
import Users from "./pages/admin/Users";
import Orders from "./pages/user/Orders";
import Profile from "./pages/user/Profile";
import UpdateProduct from "./pages/admin/UpdateProduct";
import Products from "./pages/admin/Products";
import Search from "./pages/Search";
import ProductDetails from "./pages/ProductDetails";
import CartPage from "./pages/CartPage";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/product/:slug" element={<ProductDetails />} />
        <Route path="/search" element={<Search />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="/dashboard/admin" element={<AdminDashboard />} />
        <Route
          path="/dashboard/admin/create-product"
          element={<CreateProduct />}
        />
        <Route
          path="/dashboard/admin/create-category"
          element={<CreateCategory />}
        />
        <Route
          path="/dashboard/admin/product/:slug"
          element={<UpdateProduct />}
        />
        <Route path="/dashboard/admin/products" element={<Products />} />
        <Route path="/dashboard/user/profile" element={<Profile />} />
        <Route path="/dashboard/user/orders" element={<Orders />} />
        <Route path="/dashboard/admin/users" element={<Users />} />
        <Route path="/dashboard/user" element={<Userdb />} />
        <Route path="*" element={<Pagenotfound />} />
      </Routes>
    </>
  );
}

export default App;
