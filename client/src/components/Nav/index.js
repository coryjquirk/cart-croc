import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import Heading from "./cartcroc-hero.png";
import Logo from "../Images/logo.png";

function Nav() {
  const [store] = useStoreContext();
  const loggedIn = localStorage.getItem("jwtToken");
  if (loggedIn) {
    return (
      <nav class="navbar navbar-expand-lg navbar-light bg-light" id="crocNav">
        <a href="home">
          <img src={Logo} id="croc" alt="Logo" />
          <img
            src={Heading}
            id="heroHeading"
            class="navbar-brand"
            href="/"
            alt="cart croc"
          />
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a class="nav-link" href="/home">
                home
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/shop">
                shop
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/checkout">
                checkout
              </a>
            </li>
            {/* <li class="nav-item">
              <a class="nav-link" href="/printreceipt">
                print receipt
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/receipts">
                order history
              </a>
            </li> */}
            <li class="nav-item">
              <a class="nav-link" href="/shopAdmin">
                admin
              </a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="/dashboard">
                sign out
              </a>
            </li>
          </ul>
        </div>
        {store.loading ? (
          <a className="navbar-brand ml-auto">loading...</a>
        ) : (
          <></>
        )}
      </nav>
    );
  } else {
    return null;
  }
}

export default Nav;
