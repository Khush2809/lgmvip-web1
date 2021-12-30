import logo from "./logo.svg";
import "./App.css";
import Navbar from "./Components/Navbar";
import "bootstrap/dist/css/bootstrap.min.css";
import Features from "./Components/Features";
import Overview from "./Components/overview/Overview";

function App() {
  return (
    <div>
      <Navbar />
      <Features />
      <Overview />
    </div>
  );
}

export default App;
