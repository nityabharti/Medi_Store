import "./App.css";
import Header from "./components/header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Product from "./components/ProductCard/Product";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Home />
      <Product />
    </div>
  );
}

export default App;
