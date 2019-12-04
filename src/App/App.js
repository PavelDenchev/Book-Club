import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from '../Navigation/Navigation'
import Main from '../Main/Main'
import BookContainer from '../Books/BookContainer/BookContainer'
import CreateBook from '../Books/CreateBook/CreateBook'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact render={Main} />
          <Route path="/books" render={BookContainer} />
          <Route path="/createBook" render={CreateBook} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
