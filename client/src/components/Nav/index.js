import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import Logo from '../Images/logo.png';

function Nav() {
  const [store] = useStoreContext();

  return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light" id="crocNav">
            <img src={Logo} alt="Logo" id="croc"/>
            <a class="navbar-brand" href="/">Cart Croc</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link" href="home">home</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="inventory">inventory</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="completesale">checkout</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="printreceipt">print receipt</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="receipts">order history</a>
                </li>
                </ul>
            </div>
        {store.loading ? <a className="navbar-brand ml-auto">loading...</a> : <></>}
    </nav>
    );
}

export default Nav;