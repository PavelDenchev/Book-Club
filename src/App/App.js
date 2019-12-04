import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from '../Navigation/Navigation'
import Main from '../Main/Main'
import BookContainer from '../Books/BookContainer/BookContainer'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact render={Main} />
          <Route path="/books" render={BookContainer} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
