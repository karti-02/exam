import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home';
import Menu from './Menu';
import AboutUs from './AboutUs';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/menu" component={Menu} />
        <Route path="/about-us" component={AboutUs} />
      </Switch>
    </Router>
  );
};

export default App;