import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import {BrowserRouter, Route} from 'react-router-dom';
import HomePage from './components/home_page';
import AboutUs from './components/about_us';
import EBoard from './components/e_board';
import Events from './components/events';


ReactDOM.render(

    <BrowserRouter>
    <div>
      <Route path="/home" component={HomePage}/>
      <Route path="/about" component={AboutUs}/>
      <Route path="/eboard" component={EBoard}/>
      <Route path="/events" component={Events}/>

    </div>
    </ BrowserRouter>

  , document.querySelector('.container'));
