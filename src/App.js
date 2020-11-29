import { HashRouter, Switch, Route, Link } from 'react-router-dom';
import { VesselizeProvider } from '@vesselize/react';
import Home from './pages/Home';
import Profile from './pages/Profile';
import providers from './vesselize';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <VesselizeProvider providers={providers}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <main>
          <HashRouter>
            <p>
              <Link to="/">Go to Home</Link>
              <span> | </span>
              <Link to="/profile/1">Go to Profile 1</Link>
              <span> | </span>
              <Link to="/profile/2">Go to Profile 2</Link>
            </p>
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/profile/:id" component={Profile}></Route>
            </Switch>
          </HashRouter>
        </main>
        <footer>
          <p className="App-footer">
            MIT Licensed | Copyright © 2020-present Felix Yang.
          </p>
        </footer>
      </div>
    </VesselizeProvider>
  );
}

export default App;
