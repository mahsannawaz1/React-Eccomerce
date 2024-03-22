import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import ShoppingMen from "../pages/ShoppingMen";
import ShoppingWomen from "../pages/ShoppingWomen";
import Electronics from "../pages/Electronics";
import Jewelery from "../pages/Jewelery";
import ProductDetailPage from "../pages/ProductDetailPage";
import Cart from "../pages/Cart";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "men", element: <ShoppingMen /> },
      { path: "women", element: <ShoppingWomen /> },
      { path: "electronics", element: <Electronics /> },
      { path: "jewelery", element: <Jewelery /> },
      { path: "cart", element: <Cart /> },
      { path: "product/:id", element: <ProductDetailPage /> },
    ],
  },
]);

export default routes;
