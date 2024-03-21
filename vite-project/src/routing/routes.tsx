import { createBrowserRouter } from "react-router-dom";
import Layout from "../pages/Layout";
import HomePage from "../pages/HomePage";
import ShoppingMen from "../pages/ShoppingMen";
import ShoppingWomen from "../pages/ShoppingWomen";
import Electronics from "../pages/Electronics";
import Jewelery from "../pages/Jewelery";

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
    ],
  },
]);

export default routes;
