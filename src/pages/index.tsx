import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';
import api from '../api.json';
import './index.scss';

class App extends Component {
    componentDidMount() {
        axios.get(api.recruitments.list, {
            params: {
                count: 6
            }
        })
            .then( response => {
                const data = response.data.data;
                let list: any[];
                list = [];

                data.forEach(
                    (datum: any) =>
                        list.push(
                            <li key={datum.id}>
                                <div>
                                    {datum.title}
                                </div>
                                <div>
                                    {datum.municipality.name}
                                </div>
                            </li>
                        )
                );

                ReactDOM.render(<ul>{list}</ul>, document.getElementById('recruitments'));
            })
    }
    render() {
        document.title = "Recvo | 災害復興ボランティアを変える";
        return (
            <div className="inner">
                This is Top Page.
                <div id="recruitments"/>
            </div>
        );
    }
}

export default App;