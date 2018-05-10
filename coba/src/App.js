import React, { Component } from 'react';
import './App.css';
import Header from './containers/Header';

export default class App extends Component{
  render(){
    return(
      <div classHome="Home">
        <div classHome="lander">
        < Header />
          <h1>Selamat Datang</h1>
          <p>Di Aplikasi Pembelajaran Reacj JS</p>
        </div>
      </div>
    );
  }
}