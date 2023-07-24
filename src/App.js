import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './pages/Home';
import Menu from './pages/Menu';
import AboutUs from './pages/AboutUs';

const App = () => {
  return (
    <Router>
      

        <Route exact path="/" component={Home} />
        </Router>,
        