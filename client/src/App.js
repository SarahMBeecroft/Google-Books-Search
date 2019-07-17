import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Search from './pages/Search';
import Saved from './pages/Saved';
import NotFound from './pages/NotFound';
import Nav from './components/Nav';
import Footer from './components/Footer';
import './App.css'


function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route exact path='/' component={Search} />
          <Route path='/saved' component={Saved} />
          <Route exact path='/saved/:id' component={Saved} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;