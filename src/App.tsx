import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Home from './pages/index';
import About from './pages/about';
import './App.scss';

class App extends Component {
    render () {
        return (
            <div className="App">
                <Router>
                    <nav>
                        <ul>
                            <li><Link to={"/"     }>Home</Link></li>
                            <li><Link to={"/about"}>About</Link></li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route exact path="/">
                            <Home />
                        </Route>
                        <Route exact path="/about">
                            <About />
                        </Route>
                    </Switch>
                </Router>
            </div>
        )
    }
}


export default App;