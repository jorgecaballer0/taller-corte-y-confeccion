import About from "./components/about/About";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import Services from "./components/services/Services";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Services />
      <Footer />
    </>
  );
}

export default App;
