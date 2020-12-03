import React from "react";
import { useStoreContext } from "../../utils/GlobalState";
import ReactImageMagnify from 'react-image-magnify';
//usage guide: https://www.npmjs.com/package/react-image-magnify
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick";;
import Tester1 from './product1.jpg';
import Tester2 from './product2.jpg';
import Tester3 from './product3.jpg';
import Tester4 from './product4.jpg';
import Texture from '../Images/45-degree-fabric-light.png';
// https://www.transparenttextures.com/
import "./style.css";

const cardStyle = {
    backgroundImage: `url(${Texture})`
};

export default function Product() {
  const [store] = useStoreContext();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  return (
        <div id="productCard" style={cardStyle}>
            <p>Name: </p>
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
                        enlargedImageContainerDimensions: {width: '50%', height: '200%'}
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
                        enlargedImageContainerDimensions: {width: '50%', height: '200%'}
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
                        enlargedImageContainerDimensions: {width: '50%', height: '200%'}
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
                        enlargedImageContainerDimensions: {width: '50%', height: '200%'}
                    }} />
                </div>
            </Slider>
            
            <p>Price: $6.75</p>
            <p>Description: Magic stapler</p>
            <p>In stock: 8</p>
        </div>
    );
}