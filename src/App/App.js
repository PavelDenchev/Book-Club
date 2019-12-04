import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from '../Navigation/Navigation'
import Main from '../Main/Main'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact render={Main} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
