import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Features from "./Components/Features";
import Overview from "./Components/overview/Overview";
import Footer from "./Components/Footer";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Features />
      <Overview />
      <Footer />
    </div>
  );
}

export default App;
