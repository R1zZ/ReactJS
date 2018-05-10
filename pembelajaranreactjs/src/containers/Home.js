import React, {Component} from 'react';
import '../css/Home.css';

export default class Home extends Component{
    render() {
        return(
            <div className="Home">
                <div className="lander">
                    <h1>Selamat Datang</h1>
                    <p> Dalam Pembelajaran React JS</p>
                </div>
            </div>
        );
    }
}