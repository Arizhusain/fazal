import { BrowserRouter, Route, Routes } from "react-router-dom"
import ContextWrapper from "./Context/ContextWrapper"
import OfferHeadline from "./Components/OfferHeadline/OfferHeadline"
import Header from "./Components/Header/Header"
import Footer from "./Components/Footer/Footer"
import Home from "./Pages/Home"
import ProductListing from "./Pages/ProductListing"
import SingleProductPage from "./Pages/SingleProductPage"
import CartPage from "./Pages/CartPage"
import OrderPage from "./Pages/OrderPage"
import OrderSuccessPage from "./Pages/OrderSuccessPage"
import Dashboard from "./Pages/Dashboard"
import OrderDetails from "./Pages/OrderDetails"
import SignIn from "./Components/AuthComponent/SignIn"
import ErrorPage from "./Components/ErrorPage/ErrorPage";
import "./App.css";

const App = () => {
  const dashboardPages = ['profile', 'returns', 'myorders', 'wishlist', 'address'];
  return (
    <>
      <ContextWrapper>
        <BrowserRouter>
          <OfferHeadline />
          <Header />
          <main>
            <article>
              <Routes>
                <Route element={<ErrorPage />} path="*" />
                <Route element={<Home />} path="/" />
                <Route element={<ProductListing />} path="/products" />
                <Route element={<SingleProductPage />} path="/products/:id" />
                <Route element={<CartPage cartHandling />} path="/cart" />
                <Route element={<OrderPage />} path="/order" />
                <Route element={<OrderSuccessPage />} path="/ordersuccessfull" />
                {
                  dashboardPages.map((item, index) => (
                    <Route key={index} element={<Dashboard pageType={item} />} path={`/${item}`} />
                  ))
                }
                <Route element={<OrderDetails />} path="/order-details/:id" />
                <Route element={<SignIn />} path="/login" />
              </Routes>
            </article>
          </main>
          <Footer />
        </BrowserRouter>
      </ContextWrapper>
    </>
  )
}

export default App