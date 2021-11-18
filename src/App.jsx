import './App.css';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import Navbar from "./components/layout/Navbar";
import About from "./components/pages/About"
import User from "./components/users/User"
import NotFound from "./components/pages/NotFound"
import GithubState from './components/context/github/GithubState';


const App = ()=> {
    return (
      <GithubState>
        <Router>
          <div className="App">
            <Navbar title="Github finder" icon="fab fa-github" />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/users/:username" component={User} />
              <Route component={NotFound} />
            </Switch>
          </div>
        </Router>
      </GithubState>
    );
}

export default App

