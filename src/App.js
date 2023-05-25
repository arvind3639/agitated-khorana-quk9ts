import "./styles.css";
import Home from "./Home";
import Products from "./Products";
import Product from "./Product";
import Navbar from "./Footer";
import Footer from "./Footer";
import Outlet from "./Outlet";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.scss";
const Layout = () => {
  return (
    <div className="app">
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/products/:id",
    element: <Products />
  },
  {
    path: "/product/:id",
    element: <Product />
  }
]);
export default function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}
