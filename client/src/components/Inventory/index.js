import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import Product from '../Product';

function Inventory() {
  const [store] = useStoreContext();

  return (
        <div>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
            <Product/>
        </div>
    );
}

export default Inventory;