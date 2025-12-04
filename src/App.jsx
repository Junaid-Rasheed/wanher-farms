// src/App.jsx
import React from "react";
import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom";
import Home from "./Pages/Home";
import Product from "./Pages/Product";
import ProductDetail from "./Pages/ProductDetail";
import Header from "./components/Header/Header";
import { Footer } from "./components/Footer/Footer";
import About from "./Pages/About";
import Blog from "./Pages/Blog";
import BlogDetail from "./Pages/BlogDetail";

function Layout() {
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/blogs" element={<Blog />} />
<Route path="/blog/:slug" element={<BlogDetail />} />

          <Route path="/product/:slug" element={<ProductDetail />} />
          {/* Add more pages here */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
