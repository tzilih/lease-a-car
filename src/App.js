import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CarListingPage from './pages/CarListingPage';
import CarDetailsPage from './pages/CarDetailsPage';
import NotFound from './pages/NotFound';

class App extends Component {
  render() {
    return <Router>
      <Switch>
        <Route path='/' exact component={CarListingPage} />
        <Route path="/cars/:id" exact component={CarDetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Router>;
  }
}

export default App;
