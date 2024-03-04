import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Subheader from "./components/Header/Subheader/Subheader";
import ProductCard from "./components/Product/ProductCard/ProductCard";
import RelatedHeading from "./components/RelatedDealsContainer/RelatedHeading/RelatedHeading";
import RelatedDealsContainer from "./components/RelatedDealsContainer/RelatedDealsContainer";
import RelatedFooter from "./components/RelatedDealsContainer/RelatedFooter/RelatedFooter";

function App() {
  return (
    <div className="App">
      <Header />
      <Subheader />
      <ProductCard />
      <RelatedHeading />
      <RelatedDealsContainer />
      <RelatedFooter />
      <Footer />
    </div>
  );
}

export default App;
