import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import Logo from '../Logo/logo.png';

function Nav() {
  const [store] = useStoreContext();

  return (
        <div id="crocNav">
          <h1>Cart Croc</h1>
          <img src={Logo} alt="Logo" id="croc"/>
        </div>
    );
}

export default Nav;