import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './components/Home';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Header from './components/Header';

class App extends Component {
  state = {  }

  render(){
    return (
      <div className="App">
        <HashRouter>
        
          <Navbar />

          <Header />
          
          <Route exact={ true } path="/">
            <Home />
          </Route>

          <Footer />

        </HashRouter>
      </div>
    )
  }
}

export default App;
