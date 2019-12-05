import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from '../Navigation/Navigation'
import Login from '../User/Login/Login'
import Register from '../User/Register/Register'
import Main from '../Main/Main'
import BookContainer from '../Books/BookContainer/BookContainer'
import BookDetails from '../Books/BookDetails/BookDetails'
import CreateBook from '../Books/CreateBook/CreateBook'

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navigation />
        <Switch>
          <Route path="/" exact render={Main} />
          <Route path="/login" exact render={Login} />
          <Route path="/register" exact render={Register} />
          <Route path="/books" exact render={BookContainer} />
          <Route path="/createBook" exact render={CreateBook} />
          <Route path="/books/details" exact render={BookDetails} />
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
