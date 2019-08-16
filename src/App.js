import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Sobre from './pages/Sobre';

import Header from './components/partials/Header'

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <Header user={props.user} />

        <Route exact path="/" component={Home} />
        <Route path="/sobre" component={Sobre} />
      </div>
    </BrowserRouter>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.user
  }
}

export default connect(mapStateToProps)(App);
