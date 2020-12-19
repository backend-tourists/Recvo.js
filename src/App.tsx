import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Index from './pages/index';
import About from './pages/about';
import './App.scss';

class App extends Component {
    render () {
        return (
            <div className="App">
                <Router>
                    <header className={"fixed-top"}>
                        <nav className={"d-flex inner"}>
                            <Link to={"/"} className={"mr-auto"}>
                                <h1 className={"mb-0"}>Recvo</h1>
                            </Link>

                            <form className={"form-inline my-2 my-lg-0"} method={"GET"} action={"/recruitments"}>
                                <input className={"form-control mr-sm-2"} type="search" placeholder="Search" aria-label="Search" />
                                <button className={"btn btn-outline-success my-2 my-sm-0"} type="submit">Search</button>
                            </form>
                        </nav>
                    </header>
                    <main className={"mt-5"}>
                        <Switch>
                            <Route exact path="/">
                                <Index />
                            </Route>
                            <Route exact path="/about">
                                <About />
                            </Route>
                        </Switch>
                    </main>
                </Router>
            </div>
        )
    }
}


export default App;