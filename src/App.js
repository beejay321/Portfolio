import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./components/Home";
import NavBar from "./components/NavBar";

function App() {
  return (
    <Router>
      <NavBar />
      <Home />
    </Router>
  );
}

export default App;
