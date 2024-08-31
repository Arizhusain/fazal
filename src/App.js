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
