import React, { Component } from 'react';
import { Link } from "react-router-dom";
import route from './../Route';

interface Props {
    path: string
}

export default class Header extends Component<Props> {

    addHideClass = () => {
        let menu: HTMLElement | null = document.getElementById('menu');

        if (menu !== null) {
            menu.classList.remove('show');
            menu.classList.add('hide');
        }
    };

    getNavItem = (text: string, pathName: string) => {
        let path:      string = route(pathName);
        let className: string = path === this.props.path ? 'nav-item active' : 'nav-item';
        return (
            <li className={className}>
                <Link to={path} className={"nav-link"} onClick={() => this.addHideClass()}>{text}</Link>
            </li>
        );
    };

    render() {
        return (
            <header className={"fixed-top"}>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <Link to={route('index')} className={"mr-auto"}>
                        <h1 className={"mb-0"} id={"header-logo"}>
                            <img src={"/logo-header.svg"} alt={"Recvo Logo"} id={"header-logo-image"} />
                        </h1>
                    </Link>

                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#menu" aria-controls="menu"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"> </span>
                    </button>

                    <div className="collapse navbar-collapse" id="menu">
                        <ul className="navbar-nav ml-auto mr-lg-3">
                            {this.getNavItem('Top', 'index')}
                            {this.getNavItem('Recruitments', 'recruitments')}
                            {this.getNavItem('About', 'about')}
                        </ul>

                        <form className="form-inline my-2 my-lg-0">
                            <input className="form-control mr-sm-2" type="text" placeholder="Search"
                                   aria-label="Search" />
                            <button className="btn btn-success my-2 my-sm-0" type="submit">Search</button>
                        </form>
                    </div>
                </nav>
            </header>
        );
    }
}