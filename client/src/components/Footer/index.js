import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";

function Footer() {
  const [store] = useStoreContext();

  return (
<div class="footer">
        <p>
        <a href="https://www.github.com/coryjquirk/cart-croc">Github Repo: <p class="fa fa-github"></p></a>
        </p>
    </div>    
    );
}

export default Footer;