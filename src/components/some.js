import { Route, IndexRoute } from 'react-router';




function Some() {
  return (
    <div className="Some">
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand href="#home">
          <img src={logo} className="App-logo" alt="logo" />
          SoftWell 🙏
        </Navbar.Brand>
      </Navbar>

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
  );
}

export default Some;
