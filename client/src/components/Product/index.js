import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import ReactImageMagnify from 'react-image-magnify';
//usage guide: https://www.npmjs.com/package/react-image-magnify
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";
import Tester1 from './product1.jpg';
import Tester2 from './product2.jpg';
import Tester3 from './product3.jpg';
import Tester4 from './product4.jpg';
import Texture from '../Images/45-degree-fabric-light.png';
// https://www.transparenttextures.com/
import "./style.css";

//API stuff
import API from "../../utils/API";
import { Link } from 'react-router-dom';
//API stuff done

const cardStyle = {
    backgroundImage: `url(${Texture})`
};

export default function Product() {
    const [store] = useStoreContext();
    const [cartList, setCart] = useState([]);
    const [cartQuantity, setCartQuantity] = useState();

    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    const [inventoryList, setinventoryList] = useState([]);
    const [newItemName, setNewItemName] = useState("");
    const [newPrice, setNewPrice] = useState("");
    const [newDescription, setnewDescription] = useState("");
    const [newQuantity, setNewQuantity] = useState("");

    useEffect(() => {
        const getInventory = async () => {
            let inventoryItems = await API.getAllItems()
            console.log(inventoryItems)
            setinventoryList(inventoryItems)
        }
        getInventory();
        const getCart = async () => {
            let cartItems = await API.getAllCartItems()
            console.log(cartItems)
            setCart(cartItems)
        }
        getCart();
    }, [])

    const getAndAddToCart = itemId => {
        return event => {
          event.preventDefault();
           let itemToAdd = API.getItem(itemId)
            itemToAdd.then( return_value => {
                // TODO: when we get actual logged in users, reroute "username" to the loged in user
                let username = "Placeholder Username";
                let defaultSellQuantity= 1;
                return_value = { ...return_value, username , cartQuantity};
                console.log("============== RETURN VAL IS ==============")
                console.log(return_value)
                API.saveCartItem(return_value);
            })
        }
      };

      // TODO WHEN YOU GET BACK -------- GET QUANTITY TO UPDATE INTO THE API CALL
      // RIGHT NOW ITS PULLING INVENTORY QUANTITY WHICH AINT RIGHT

    function submitThisForm(event) {
        event.preventDefault()

        var itemData = {
            itemName: newItemName,
            price: newPrice,
            description: newDescription,
            quantity: newQuantity
        }
        console.log(itemData)
        API.saveItem(itemData);
    }
    const updateCartItemSellQuantity = itemId => {
        return event => {
            event.preventDefault();
            let newSellQuantity = {
                sellQuantity: cartQuantity
            }
            API.updateCartItemSellQuantity(newSellQuantity, itemId);
        }
    };
    // This code looks kinda weird, its nested in the way it is so that we can access
    // the ID passed in to it and still use event.preventdefault, which can only be used on top
    // level functions
    // const getAndAddToCart = itemId => {
    //     return event => {
    //       event.preventDefault();
    //        let itemToAdd = API.getItem(itemId)
    //         itemToAdd.then( return_value => {
    //             // TODO: when we get actual logged in users, reroute "username" to the loged in user
    //             let username = "Placeholder Username";
    //             let defaultSellQuantity= 1;
    //             return_value = { ...return_value, username , defaultSellQuantity};
    //             API.saveCartItem(return_value);
    //         })

    //         let newSellQuantity = {
    //             sellQuantity: cartQuantity,
    //         }
    //         console.log("YAAAAAAAA"+newSellQuantity)
    //         API.updateCartItemSellQuantity(newSellQuantity, itemId)
    //     }
    // };
    function handleQuantityChange(event) {
        const sellQuantity = event.target.value;
        console.log("Quantity is now " + sellQuantity)
        setCartQuantity(sellQuantity)
        console.log("CART-quantity is now : " + cartQuantity)
    }

    return (
        <div>
            {inventoryList?.map((result) => {
                return (

                    <div id="productCard" style={cardStyle} key={result._id}>
                        <Slider {...settings}>
                            <div>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Stapler!!!!!!!!!!',
                                        isFluidWidth: true,
                                        src: Tester1,
                                        enlargedImagePosition: 'over',
                                    },
                                    largeImage: {
                                        src: Tester1,
                                        width: 800,
                                        height: 800
                                    },
                                    enlargedImagePosition: 'over',
                                    enlargedImageContainerDimensions: { width: '100%', height: '100%' }
                                }} />
                            </div>
                            <div>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Stapler!!!!!!!!!!',
                                        isFluidWidth: true,
                                        src: Tester2,
                                        enlargedImagePosition: 'over',
                                    },
                                    largeImage: {
                                        src: Tester2,
                                        width: 800,
                                        height: 800
                                    },
                                    enlargedImagePosition: 'over',
                                    enlargedImageContainerDimensions: { width: '100%', height: '100%' }
                                }} />
                            </div>
                            <div>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Stapler!!!!!!!!!!',
                                        isFluidWidth: true,
                                        src: Tester3,
                                        enlargedImagePosition: 'over',
                                    },
                                    largeImage: {
                                        src: Tester3,
                                        width: 1200,
                                        height: 1800
                                    },
                                    enlargedImagePosition: 'over',
                                    enlargedImageContainerDimensions: { width: '100%', height: '100%' }
                                }} />
                            </div>
                            <div>
                                <ReactImageMagnify {...{
                                    smallImage: {
                                        alt: 'Stapler!!!!!!!!!!',
                                        isFluidWidth: true,
                                        src: Tester4,
                                        enlargedImagePosition: 'over',
                                    },
                                    largeImage: {
                                        src: Tester4,
                                        width: 1200,
                                        height: 1800
                                    },
                                    enlargedImagePosition: 'over',
                                    enlargedImageContainerDimensions: { width: '100%', height: '100%' }
                                }} />
                            </div>
                        </Slider>
                        <br />
                        <p>Name: {result.itemName}
                        </p>
                        <p>Price: ${result.price}</p>
                        <p>Description: {result.description}</p>
                        <p>In stock: {result.quantity}</p>
                        <div>
                            <input onChange={handleQuantityChange} type="number" placeholder="1" id="quantity" name="quantity" min={1} max={result.quantity} />
                            <button onClick={getAndAddToCart(result._id)} >Add to cart</button>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}