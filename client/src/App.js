import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import "./App.css";
//my components
import Index from "./pages/IndexPage";
import CompleteSale from "./pages/CompleteSalePage";
import Home from "./pages/HomePage";
import Inventory from "./pages/InventoryPage";
import NewSale from "./pages/NewSalePage";
import PrintReceipt from "./pages/PrintReceiptPage";
import NoMatchPage from "./pages/NoMatchPage";
import Receipts from "./pages/ReceiptsPage";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <StoreProvider>
            <Nav />
            <div id="main">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/completesale" component={CompleteSale} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/inventory" component={Inventory} />
                <Route exact path="/newsale" component={NewSale} />
                <Route exact path="/printreceipt" component={PrintReceipt} />
                <Route exact path="/receipts" component={Receipts} />
                <Route component={NoMatchPage} />
              </Switch>
            </div>
            <Footer/>
          </StoreProvider>
      </div>
      </Router>
    );
  }
}

export default App;
