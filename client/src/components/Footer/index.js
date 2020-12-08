import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";

function Footer() {
  const [store] = useStoreContext();

  return (
    <div className="footer fixed-bottom">
      <p>
        <a href="https://www.github.com/coryjquirk/cart-croc" target="_blank">
          <p class="fa fa-github"></p>
        </a>
      </p>
    </div>
  );
}

export default Footer;
