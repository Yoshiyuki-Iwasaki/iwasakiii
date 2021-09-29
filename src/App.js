import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Top from './components/Top'
import About from './components/About'

function App() {
  return (
    <Router>
      <ul>
        <li><Link to='/'>トップ</Link></li>
        <li><Link to='/about/'>アバウト</Link></li>
      </ul>
      <Route path="/" exact component={Top} />
      <Route path="/about/" exact component={About} />
    </Router>
  );
}

export default App;
