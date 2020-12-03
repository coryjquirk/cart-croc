import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";

function SearchBar() {
  const [store] = useStoreContext();

  return (<div id="searchBar">
            <p>Find what you're looking for: </p> <input type="text"
            placeholder="product search"></input>
            {store.loading ? <a className="navbar-brand ml-auto">loading...</a> : <></>}
    </div>
    );
}

export default SearchBar;
