import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import route from "./Route";

/* Bootstrap */
import 'bootstrap/dist/css/bootstrap.min.css';
import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.min.js';

/* Page */
import Index from './pages/index';
import About from './pages/about/index';

/* Component */
import Header from './components/header';

/* Style */
import './App.scss';


class App extends Component {
    render () {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <Route exact path={route('index')}>
                            <Header path={route('index')} />
                        </Route>
                        <Route exact path={route('about')}>
                            <Header path={route('about')} />
                        </Route>
                    </Switch>
                    <main>
                        <Switch>
                            <Route exact path={route('index')}>
                                <Index />
                            </Route>
                            <Route exact path={route('about')}>
                                <About />
                            </Route>
                        </Switch>
                    </main>
                    <footer>
                        <div className={"inner"}>

                        </div>
                    </footer>
                </Router>
            </div>
        )
    }
}


export default App;