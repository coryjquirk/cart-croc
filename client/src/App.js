import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { StoreProvider } from "./utils/GlobalState";
import "./App.css";
//my components
import Index from "./pages/IndexPage";
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
import TestingInventoryPage from "./pages/TestInventoryShitOut";
import TestEditPage from "./pages/TestEditInventory";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <StoreProvider>
            <Nav />
            <SearchBar />
            <div id="main">
              <Switch>
                <Route exact path="/" component={Index} />
                <Route exact path="/checkout" component={CheckoutPage} />
                <Route exact path="/home" component={Home} />
                <Route exact path="/testing" component={TestingPage} />
                <Route exact path="/editItem/:id" component={TestEditPage} />
                <Route exact path="/inventoryTesting" component={TestingInventoryPage} />
                <Route exact path="/inventory" component={InventoryPage} />
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
