import { createBrowserRouter } from "react-router-dom";
import { lazy, Suspense } from "react";

import Layout from "../layout/Layout";
import Home from "../pages/Home";
import PageNotFound from "../pages/PageNotFound";
import Loader from "../components/Loader";


const ProductList = lazy(() => import("../pages/ProductList"));
const ProductDetail = lazy(() => import("../pages/ProductDetail"));
const Cart = lazy(() => import("../pages/Cart"));
const Checkout = lazy(() => import("../pages/CheckOut"));
const CategoryProducts = lazy(() => import("../pages/CategoryProducts"));
const ThankYou = lazy(() => import("../pages/ThankYou"));



const AppRouter = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      
      { index: true, element: <Home /> },

      {
        path: "products",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductList />
          </Suspense>
        ),
      },
      {
        path: "product/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductDetail />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<Loader />}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "checkout",
        element: (
          <Suspense fallback={<Loader />}>
            <Checkout />
          </Suspense>
        ),
      },
      {
        path: "category/:categoryName",
        element: (
          <Suspense fallback={<Loader />}>
            <CategoryProducts />
          </Suspense>
        ),
      },
      {
        path: "thank-you",
        element: (
          <Suspense fallback={<Loader />}>
            <ThankYou />
          </Suspense>
        ),
      },
     
    ],
  },

  { path: "*", element: <PageNotFound /> },
]);

export default AppRouter;
