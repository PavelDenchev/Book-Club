import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Navigation from '../Navigation/Navigation'
import Login from '../User/Login/Login'
import Register from '../User/Register/Register'
import Logout from '../User/Logout/Logout'
import Main from '../Main/Main'
import BookContainer from '../Books/BookContainer/BookContainer'
import BookDetails from '../Books/BookDetails/BookDetails'
import CreateBook from '../Books/CreateBook/CreateBook'
import NotFound from '../NotFound/NotFound'

function parseCookies() {
  return document.cookie.split('; ').reduce((acc, cookie) => {
    const [cookieName, cookieValue] = cookie.split('=');
    acc[cookieName] = cookieValue;
    return acc;
  }, {})
}

class App extends React.Component {

  constructor(props) {
    super(props);
    const cookies = parseCookies();
    const isLogged = !!cookies['x-auth-token'];
    this.state = {
      isLogged: isLogged,
    };
  }

  setLoggedTrue = () => {
    this.setState({isLogged: true})
  }

  setLoggedFalse = () => {
    this.setState({isLogged: false})
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navigation isLogged = {this.state.isLogged} />
          <Switch>
            <Route path="/" exact component={Main} />
            { !this.state.isLogged && <Route path="/login" exact render={() => <Login setLoggedTrue={this.setLoggedTrue} />} /> }
            { !this.state.isLogged && <Route path="/register" exact component={Register} /> }
            { this.state.isLogged && <Route path="/logout" exact render={() => <Logout setLoggedFalse={this.setLoggedFalse}/>} /> }
            <Route path="/books" exact component={BookContainer} />
            { this.state.isLogged && <Route path="/books/create" exact render={() => <CreateBook />} /> } 
            { this.state.isLogged && <Route path="/books/details" exact component={BookDetails} />}
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
