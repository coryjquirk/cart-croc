import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { StoreProvider } from "./utils/GlobalState";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";
//passport components
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
//custom components
import CheckoutPage from "./pages/CheckoutPage";
import Home from "./pages/HomePage";
import InventoryPage from "./pages/InventoryPage";
import PrintReceipt from "./pages/PrintReceiptPage";
import NoMatchPage from "./pages/NoMatchPage";
import Receipts from "./pages/ReceiptsPage";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import TestingPage from "./pages/TestShitOut";
import shopAdmin from "./pages/shopAdmin";
import TestEditPage from "./pages/TestEditInventory";
import TestCartPage from "./pages/TestCartShitOut";

import "./App.css";

// Check for token to keep user logged in
if (localStorage.jwtToken) {
  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());

    // Redirect to login
    window.location.href = "./login";
  }
}
class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <StoreProvider>
          <Router>
            <div className="App">
              <Nav />
              <SearchBar/>
              <Footer />
              <div className="fader">
              <Switch>
                <Route exact path="/" component={Login} />
                <Route exact path="/register" component={Register} />
                <Route exact path="/login" component={Login} />
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                <PrivateRoute path="/checkout" component={CheckoutPage} />
                <PrivateRoute path="/home" component={Home} />
                <PrivateRoute exact path="/testing" component={TestingPage} />
                <PrivateRoute
                  exact
                  path="/editItem/:id"
                  component={TestEditPage}
                />
                <PrivateRoute exact path="/shopAdmin" component={shopAdmin} />
                <PrivateRoute
                  exact
                  path="/CartTesting"
                  component={TestCartPage}
                />
                <PrivateRoute exact path="/shop" component={InventoryPage} />
                <PrivateRoute
                  exact
                  path="/printreceipt"
                  component={PrintReceipt}
                />
                <PrivateRoute exact path="/receipts" component={Receipts} />
                <Route component={NoMatchPage} />
              </Switch>
              </div>
            </div>
          </Router>
        </StoreProvider>
      </Provider>
    );
  }
}
export default App;
