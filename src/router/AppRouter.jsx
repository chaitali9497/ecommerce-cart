import { createBrowserRouter } from "react-router-dom";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import ProductDetail from "../pages/ProductDetail";
import Cart from "../pages/Cart";
import Checkout from "../pages/CheckOut";
import CategoryProducts from "../pages/CategoryProducts";
import PageNotFound from "../pages/PageNotFound";
import ThankYou from "../pages/ThankYou";

const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "products", element: <ProductList /> },
      { path: "product/:id", element: <ProductDetail /> },
      { path: "cart", element: <Cart /> },
      { path: "checkout", element: <Checkout /> },
      {
  path: "/category/:categoryName",
  element: <CategoryProducts />,
},
{path: "thank-You", element: <ThankYou/> },
      { path: "*", element: <PageNotFound /> },
    ],
  },
]);

export default AppRouter;
