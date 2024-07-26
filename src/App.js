import React from "react";
import Home from "./pages/home/Home";
import UserArray from "./pages/userArray/UserArray";
import User from "./pages/user/User";
import RegisterUser from "./pages/registerUser/RegisterUser";
import ProductArray from "./pages/productArray/ProductArray";
import Product from "./pages/product/Product";
import Login from "./pages/login/Login";
import RegisterProduct from "./pages/registerProduct/RegisterProduct";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate,
} from "react-router-dom";
import "./app.css";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser.isAdmin);

  return (
    <div className="container">
      <Router>
        <Routes>
          <>
            <Route
              path="/"
              element={admin ? <Home /> : <Navigate to="/login" />}
            />
            <Route
              path="/login"
              element={admin ? <Navigate to="/" /> : <Login />}
            />

            <Route
              path="/users"
              element={admin ? <UserArray /> : <Navigate to="/login" />}
            />
            <Route
              path="/user/:userId"
              element={admin ? <User /> : <Navigate to="/login" />}
            />
            <Route path="/registerUser" element={<RegisterUser />} />
            <Route
              path="/products"
              element={admin ? <ProductArray /> : <Navigate to="/login" />}
            />
            <Route
              path="/product/:productId"
              element={admin ? <Product /> : <Navigate to="/login" />}
            />
            <Route
              path="/registerProduct"
              element={admin ? <RegisterProduct /> : <Navigate to="/login" />}
            />
          </>
        </Routes>
      </Router>
    </div>
  );
}
export default App;
