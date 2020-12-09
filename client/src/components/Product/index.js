import React, { useState, useEffect } from "react";
import { useStoreContext } from "../../utils/GlobalState";
import ReactImageMagnify from "react-image-magnify";
//usage guide: https://www.npmjs.com/package/react-image-magnify
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Tester1 from "./product1.jpg";
import Tester2 from "./product2.jpg";
import Tester3 from "./product3.jpg";
import Tester4 from "./product4.jpg";
import Texture from "../Images/45-degree-fabric-light.png";
// https://www.transparenttextures.com/
import "./style.css";
import API from "../../utils/API";
import { Col, Row, Container } from "../Grid";
import { useToasts } from "react-toast-notifications";

const user = JSON.parse(localStorage.getItem("username"));

const cardStyle = {
  backgroundImage: `url(${Texture})`,
  maxWidth: "400px",
};

const Toaster = () => {
  const { addToast } = useToasts();
  return () =>
    addToast("Item added to cart", {
      appearance: "success",
      autoDismissTimeout: 2000,
      autoDismiss: true,
    });
};

// https://react-slick.neostack.com/docs/example/custom-arrows/
function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "9px",
      }}
      onClick={onClick}
    />
  );
}
function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{
        ...style,
        display: "block",
        background: "black",
        borderRadius: "9px",
      }}
      onClick={onClick}
    />
  );
}
export default function Product() {
  const [store] = useStoreContext();
  const [cartList, setCart] = useState([]);
  const [cartQuantity, setCartQuantity] = useState();

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  const [inventoryList, setinventoryList] = useState([]);
  const [newItemName, setNewItemName] = useState("");
  const [newPrice, setNewPrice] = useState("");
  const [newDescription, setnewDescription] = useState("");
  const [newQuantity, setNewQuantity] = useState("");

  useEffect(() => {
    const getInventory = async () => {
      let inventoryItems = await API.getAllItems();
      console.log(inventoryItems);
      setinventoryList(inventoryItems);
    };
    getInventory();
    const getCart = async () => {
      let cartItems = await API.getAllCartItems();
      var userCart = cartItems.filter(function (cartItem) {
        return cartItem.username == user;
      });

      console.log(userCart);
      setCart(userCart);
    };
    getCart();
  }, []);

  const getAndAddToCart = (itemId) => {
    return (event) => {
      event.preventDefault();
      let itemToAdd = API.getItem(itemId);
      itemToAdd.then((return_value) => {
        if (cartQuantity) {
          let inventoryQuantity = return_value.quantity;
          let username = user;
          return_value = {
            ...return_value,
            username,
            cartQuantity,
            inventoryQuantity,
          };
          API.saveCartItem(return_value);
        }
      });
    };
  };

  function handleQuantityChange(event) {
    const sellQuantity = event.target.value;
    setCartQuantity(sellQuantity);
  }

  return (
    <div>
      {inventoryList?.map((result) => {
        return (
          <div id="productCard" class="col" style={cardStyle} key={result._id}>
            <Slider {...settings}>
              <div>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Stapler!!!!!!!!!!",
                      isFluidWidth: true,
                      src: Tester1,
                      enlargedImagePosition: "over",
                      // width:'10%'
                    },
                    largeImage: {
                      src: Tester1,
                      width: 800,
                      height: 800,
                    },
                    enlargedImagePosition: "over",
                    enlargedImageContainerDimensions: {
                      width: "100%",
                      height: "100%",
                    },
                  }}
                />
              </div>
              <div>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Stapler!!!!!!!!!!",
                      isFluidWidth: true,
                      src: Tester2,
                      enlargedImagePosition: "over",
                    },
                    largeImage: {
                      src: Tester2,
                      width: 800,
                      height: 800,
                    },
                    enlargedImagePosition: "over",
                    enlargedImageContainerDimensions: {
                      width: "100%",
                      height: "100%",
                    },
                  }}
                />
              </div>
              <div>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Stapler!!!!!!!!!!",
                      isFluidWidth: true,
                      src: Tester3,
                      enlargedImagePosition: "over",
                    },
                    largeImage: {
                      src: Tester3,
                      width: 1200,
                      height: 1800,
                    },
                    enlargedImagePosition: "over",
                    enlargedImageContainerDimensions: {
                      width: "100%",
                      height: "100%",
                    },
                  }}
                />
              </div>
              <div>
                <ReactImageMagnify
                  {...{
                    smallImage: {
                      alt: "Stapler!!!!!!!!!!",
                      isFluidWidth: true,
                      src: Tester4,
                      enlargedImagePosition: "over",
                    },
                    largeImage: {
                      src: Tester4,
                      width: 1200,
                      height: 1800,
                    },
                    enlargedImagePosition: "over",
                    enlargedImageContainerDimensions: {
                      width: "100%",
                      height: "100%",
                    },
                  }}
                />
              </div>
            </Slider>
            <br />
            <div id="namePriceEtc">
              <p class="productInfo">Name: {result.itemName}</p>
              <p class="productInfo">Price: ${result.price}</p>
              <p class="productInfo">Info: {result.description}</p>
              <p class="productInfo">In stock: {result.quantity}</p>
            </div>
            <div id="controls">
              <input
                onChange={handleQuantityChange}
                type="number"
                placeholder="1"
                id="quantity"
                name="quantity"
                min={1}
                max={result.quantity}
              />
              <button
                className="addToCart btn btn-primary"
                onClick={getAndAddToCart(result._id)}
              >
                <span>Add to cart</span>
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
{
  /* <button
className="addToCart btn btn-primary"
onClick={getAndAddToCart(result._id)}
> */
}
