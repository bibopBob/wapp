import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';


import Navbar from 'react-bootstrap/Navbar'

import logo from './logo.svg';
import './App.css';

import Blog from './components/Blog';




function App() {
  return (

      <Router>

        <Navbar bg="dark" variant="dark">
          <Navbar.Brand href="/">
            <img src={logo} className="App-logo" alt="logo" />
            SoftWell 🙏
          </Navbar.Brand>
          <Link to="/blog">Blog</Link>
        </Navbar>

        <Switch>

          <Route exact path="/">
            <div className="App">
              <header className="App-header">
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                  className="App-link"
                  href="https://reactjs.org"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn React
                </a>
              </header>
            </div>
          </Route>

          <Route exact path="/blog">
            <Blog />
          </Route>

        </Switch>

      </Router>

  );
}

export default App;
