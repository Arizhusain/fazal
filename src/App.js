import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import OfferHeadline from "./Components/OfferHeadline/OfferHeadline";
import Home from "./Pages/Home";
import ProductListing from "./Pages/ProductListing";

function App() {
  return (
    <>
      <OfferHeadline />
      <Header />
      <main>
        <article>
          {/* <Home /> */}
          <ProductListing />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
