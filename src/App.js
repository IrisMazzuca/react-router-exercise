import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from './Components/NavBar'
import Home from './Routes/Home';
import Products from './Routes/Products';
import AboutUs from './Routes/AboutUs';
import Error from './Routes/Error';
import Account from './Routes/Account';
import LogIn from './Routes/LogIn';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [message, setMessage] = useState("You are NOT logged in");

  const PrivateRoute = ({ isLoggedIn, ...props }) => {
    return (isLoggedIn)
      ? <Route {...props} />
      : <Redirect to="/login" />
  };

  const handleCheck = (e) => {
    (e.target.checked)
      ? setLoggedIn(true)
      : setLoggedIn(false);

    (e.target.checked)
      ? setMessage("Successful Login! Now you have access to Account")
      : setMessage("You are NOT logged in");
  }

  return (
    <div className="m-5 d-flex flex-column justify-content-center align-items-center w-100">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <h1>Default Page</h1>
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <PrivateRoute isLoggedIn={loggedIn} path="/account" component={Account} />
          <Route path="/login">
            <LogIn action={handleCheck} message={message} />
          </Route>
          <Route path="/products">
            <Products />
          </Route>
          <Route path="/aboutUs">
            <AboutUs />
          </Route>
          <Route>
            <Error />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
