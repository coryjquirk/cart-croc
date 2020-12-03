import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import Tester from './product.jpg';
import Texture from '../Images/45-degree-fabric-light.png';
// https://www.transparenttextures.com/

var cardStyle = {
    backgroundImage: `url(${Texture})`
};

function Product() {
  const [store] = useStoreContext();

  return (
        <p id="productCard" style={cardStyle}>
            <p>Name: </p>
            <img id="productPic" src={Tester}/>
            <p>Price:</p>
            <p>Description: </p>
            <p>In stock: </p>
        </p>
    );
}

export default Product;
