import "./App.css";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import OfferHeadline from "./Components/OfferHeadline/OfferHeadline";
import Home from "./Pages/Home";

function App() {
  return (
    <>
      <OfferHeadline />
      <Header />
      <main>
        <article>
          <Home />
        </article>
      </main>
      <Footer />
    </>
  );
}

export default App;
