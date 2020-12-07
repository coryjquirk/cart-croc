import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import jwt_decode from "jwt-decode";
import setAuthToken from "./utils/setAuthToken";

import { setCurrentUser, logoutUser } from "./actions/authActions";
import { Provider } from "react-redux";
import store from "./store";

import Navbar from "./components/layout/Navbar";
import Landing from "./components/layout/Landing";
import Register from "./components/auth/Register";
import Login from "./components/auth/Login";
import PrivateRoute from "./components/private-route/PrivateRoute";
import Dashboard from "./components/dashboard/Dashboard";
// //my components
import Index from "./pages/IndexPage";
import CompleteSale from "./pages/CompleteSalePage";
import Home from "./pages/HomePage";
import Inventory from "./pages/InventoryPage";
import NewSale from "./pages/NewSalePage";
import PrintReceipt from "./pages/PrintReceiptPage";
import NoMatchPage from "./pages/NoMatchPage";
import Receipts from "./pages/ReceiptsPage";
import Nav from "./components/Nav";
import SearchBar from "./components/SearchBar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import TestingPage from "./pages/TestShitOut";
import TestingInventoryPage from "./pages/TestInventoryShitOut";
import TestEditPage from "./pages/TestEditInventory";

import "./App.css";
import { StoreProvider } from "./utils/GlobalState";

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
              <SearchBar />
              <Route exact path="/" component={Landing} />
              <Route exact path="/register" component={Register} />
              <Route exact path="/login" component={Login} />
              <Switch>
                <PrivateRoute exact path="/dashboard" component={Dashboard} />
                {/* our code below VV */}
                {/* <Route exact path="/" component={Index} /> */}
                <PrivateRoute
                  exact
                  path="/completesale"
                  component={CompleteSale}
                />
                <PrivateRoute exact path="/home" component={Home} />
                <PrivateRoute exact path="/testing" component={TestingPage} />
                <PrivateRoute
                  exact
                  path="/editItem/:id"
                  component={TestEditPage}
                />
                <PrivateRoute
                  exact
                  path="/inventoryTesting"
                  component={TestingInventoryPage}
                />
                <PrivateRoute exact path="/inventory" component={Inventory} />
                <PrivateRoute exact path="/newsale" component={NewSale} />
                <PrivateRoute
                  exact
                  path="/printreceipt"
                  component={PrintReceipt}
                />
                <PrivateRoute exact path="/receipts" component={Receipts} />
                <Route component={NoMatchPage} />
              </Switch>
            </div>
          </Router>
        </StoreProvider>
      </Provider>
    );
  }
}
export default App;

// OUR CODE S BELOW vvvv

// import React, { Component } from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import { StoreProvider } from "./utils/GlobalState";
// import "./App.css";

// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div className="App">
//           <StoreProvider>

//             <div id="main">
//               <Switch>

//               </Switch>
//             </div>
//             <Footer/>
//           </StoreProvider>
//       </div>
//       </Router>
//     );
//   }
// }

// export default App;
