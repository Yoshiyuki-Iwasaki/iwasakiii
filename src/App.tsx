import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Top from "./components/Top";
import About from "./components/About";
import Contact from "./components/Contact";

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to="/">Top</Link>
        </li>
        <li>
          <Link to="/about/">About</Link>
        </li>
        <li>
          <Link to="/contact/">Contact</Link>
        </li>
      </ul>
      <Route path="/" exact component={Top} />
      <Route path="/about/" exact component={About} />
      <Route path="/contact/" exact component={Contact} />
    </Router>
  );
}

export default App;
