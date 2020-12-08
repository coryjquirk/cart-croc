import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";

import Modal from "react-modal";
import ModalCart from "../ModalCart";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

function SearchBar() {
  const [store] = useStoreContext();
  const [modalIsOpen, setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }

  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }

  function closeModal() {
    setIsOpen(false);
  }

  const loggedIn = localStorage.getItem("jwtToken");
  if (loggedIn) {
    return (
      <div id="searchBar">
            <p id="searchPrompt">Find what you're looking for: </p> <input type="text"
            placeholder="product search"></input> <button id="cartBtn" onClick={openModal}
            className="btn btn-primary"
          ><FontAwesomeIcon icon={faShoppingCart} id="cart icon"/></button>
            {store.loading ? <a className="navbar-brand ml-auto">loading...</a> : <></>}
            <Modal

          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="cart modal "
        >
          
          <ModalCart></ModalCart>
        </Modal>
      </div>
    );
  } else {
    return null;
  }
}

export default SearchBar;
