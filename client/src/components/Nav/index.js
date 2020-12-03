import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import Logo from '../Images/logo.png';

function Nav() {
  const [store] = useStoreContext();

  return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light" id="crocNav">
            <img src={Logo} alt="Logo" id="croc"/>
            <a className="navbar-brand" href="/">Cart Croc</a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <a className="nav-link" href="home">home</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="inventory">inventory</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="newsale">new sale ("your cart")</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="completesale">complete sale ("checkout")</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="printreceipt">print receipt</a>
                </li>
                <li className="nav-item">
                    <a className="nav-link" href="receipts">receipts ("order history")</a>
                </li>
                </ul>
            </div>
        {store.loading ? <a className="navbar-brand ml-auto">loading...</a> : <></>}
    </nav>
    );
}

export default Nav;