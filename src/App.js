import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import OfferHeadline from "./Components/OfferHeadline/OfferHeadline";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";
import SingleProductPage from "./Pages/SingleProductPage";

function App() {
  return (
    <>
      <OfferHeadline />
      <Header />
      <main>
        <article>
          {/* <Home /> */}
          {/* <ProductListing /> */}
          <SingleProductPage />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
