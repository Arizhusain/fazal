import { BrowserRouter, Routes, Route, createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import OfferHeadline from "./Components/OfferHeadline/OfferHeadline";
import CartPage from "./Pages/CartPage";
import Home from "./Pages/Home";
import OrderPage from "./Pages/OrderPage";
import ProductListing from "./Pages/ProductListing";
import SingleProductPage from "./Pages/SingleProductPage";
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import ContextWrapper from "./Context/ContextWrapper";
import OrderSuccessPage from "./Pages/OrderSuccessPage";
import Dashboard from "./Pages/Dashboard";
import DashboardContent from "./Components/DashboardContent/DashboardContentProfile";

const router = createBrowserRouter([
  {
    path: "/",
    element:
      <><OfferHeadline /><Header /><main>
        <article>
          <Home />
        </article>
      </main><Footer /></>,
    errorElement: <ErrorPage />,
  },
  {
    path: "products",
    element:
      <><OfferHeadline /><Header /><main>
        <article>
          <ProductListing />
        </article>
      </main><Footer /></>,
  },
  {
    path: "products/:id",
    element:
      <><OfferHeadline /><Header /><main>
        <article>
          <SingleProductPage />
        </article>
      </main><Footer /></>,
  },
  {
    path: "cart",
    element:
      <><OfferHeadline /><Header /><main>
        <article>
          <CartPage cartHandling />
        </article>
      </main><Footer /></>,
  },
  {
    path: "order",
    element:
      <><OfferHeadline /><Header /><main>
        <article>
          <OrderPage />
        </article>
      </main><Footer /></>,
  },
  {
    path: "ordersuccessfull",
    element:
      <><OfferHeadline /><Header /><main>
        <article>
          <OrderSuccessPage />
        </article>
      </main><Footer /></>,
  },
  {
    path: "profile",
    element:
      <><OfferHeadline /><Header /><main>
        <article>
          <Dashboard pageType="profile" />
        </article>
      </main><Footer /></>,
  },
  {
    path: "returns",
    element:
      <><OfferHeadline /><Header /><main>
        <article>
        <Dashboard pageType="returns" />
        </article>
      </main><Footer /></>,
  },
  {
    path: "myorders",
    element:
      <><OfferHeadline /><Header /><main>
        <article>
          <Dashboard pageType="myorders" />
        </article>
      </main><Footer /></>,
  },
  {
    path: "wishlist",
    element:
      <><OfferHeadline /><Header /><main>
        <article>
          <Dashboard pageType="wishlist" />
        </article>
      </main><Footer /></>,
  },
  {
    path: "address",
    element:
      <><OfferHeadline /><Header /><main>
        <article>
          <Dashboard pageType="address" />
        </article>
      </main><Footer /></>,
  },
]);

function App() {
  return (
    <>
      <ContextWrapper>
        <RouterProvider router={router} />
      </ContextWrapper>
    </>
  );
}

export default App;
