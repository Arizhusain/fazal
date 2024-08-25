import "./App.css";
import Collections from "./Components/Collections/Collections";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/Header/Header";
import Hero from "./Components/Hero/Hero";
import Offers from "./Components/Offers/Offers";
import Product from "./Components/Product/Product";
import Services from "./Components/Services/Services";
import Special from "./Components/Special/Special";

function App() {
  return (
    <>
      <Header />
      <main>
        <article>
          <Hero/>
          <Collections/>
          <Product/>
          <Offers/>
          <Special/>
          <Services/>
        </article>
      </main>
      <Footer/>
    </>
  );
}

export default App;
