import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// 📦 Layouts
import PublicLayout from "./layout/public";
import AdminLayout from "./layout/admin";

// 🌐 Public Pages
import Home from "./pages/public/index";
import About from "./pages/public/about";
import Contact from "./pages/public/contact";
import Blog from "./pages/public/blog";
import Service from "./pages/public/service";

// 🔐 Auth Pages
import Login from "./pages/auth/login";
import Register from "./pages/auth/register";

// 🧾 Admin Modules (hanya index.jsx)
import ProductPage from "./pages/admin/product/index";
import SalesPage from "./pages/admin/sales/index";
import ExpensePage from "./pages/admin/expense/index";
import TransactionPage from "./pages/admin/transactions/index";
import UserPage from "./pages/admin/users/index";



function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* 🌍 Public Routes */}
        <Route element={<PublicLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="blog" element={<Blog />} />
          <Route path="service" element={<Service />} />
        </Route>

        {/* 🔑 Auth Routes */}
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />

        {/* ⚙️ Admin Routes */}
        <Route path="admin" element={<AdminLayout />}>
          <Route path="products" element={<ProductPage />} />
          <Route path="sales" element={<SalesPage />} />
          <Route path="expenses" element={<ExpensePage />} />
          <Route path="transactions" element={<TransactionPage />} />
          <Route path="users" element={<UserPage />} />
        </Route>

        
      </Routes>
    </BrowserRouter>
  );
}

export default App;

