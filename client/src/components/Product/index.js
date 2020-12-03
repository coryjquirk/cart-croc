import React from "react";
import ReactImageMagnify from 'react-image-magnify';
//usage guide: https://www.npmjs.com/package/react-image-magnify
var Modal = require('react-bootstrap-modal')
import { useStoreContext } from "../../utils/GlobalState";
import "./style.css";
import Tester from './product1.jpg';
import Texture from '../Images/45-degree-fabric-light.png';
// https://www.transparenttextures.com/

var cardStyle = {
    backgroundImage: `url(${Texture})`
};

function Product() {
  const [store] = useStoreContext();
  return (
        <div id="productCard" style={cardStyle}>
            <p>Name: </p>
            <img id="productPic" src={Tester}/>
            {/* <ReactImageMagnify {...{
                smallImage: {
                    alt: 'Stapler!!!!!!!!!!',
                    isFluidWidth: true,
                    src: Tester
                },
                largeImage: {
                    src: Tester,
                    width: 1200,
                    height: 1800
                }
            }} /> */}
            <p>Price:</p>
            <p>Description: </p>
            <p>In stock: </p>
        </div>
    );
}

export default Product;
