import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// https://fontawesome.com/how-to-use/on-the-web/using-with/react
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { faWindowClose } from '@fortawesome/free-solid-svg-icons'
import Modal from 'react-modal';
import ModalCart from "../ModalCart";

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement('#root')

function SearchBar() {
  const [store] = useStoreContext();
  const [modalIsOpen,setIsOpen] = React.useState(false);
  function openModal() {
    setIsOpen(true);
  }
 
  function afterOpenModal() {
    // references are now sync'd and can be accessed.
  }
 
  function closeModal(){
    setIsOpen(false);
  }
  return (<div id="searchBar">
            <p>Find what you're looking for: </p> <input type="text"
            placeholder="product search"></input> <button
            className="btn btn-primary"
          ><FontAwesomeIcon icon={faShoppingCart} onClick={openModal} id="cart icon"/></button>
            {store.loading ? <a className="navbar-brand ml-auto">loading...</a> : <></>}

            <Modal
          isOpen={modalIsOpen}
          onAfterOpen={afterOpenModal}
          onRequestClose={closeModal}
          contentLabel="Example Modal"
        >
 
          <button id="closeCart" className="btn btn-danger" onClick={closeModal}><FontAwesomeIcon icon={faWindowClose} id="close window"/></button>
          <ModalCart></ModalCart>
        </Modal>
    </div>
    );
}

export default SearchBar;
