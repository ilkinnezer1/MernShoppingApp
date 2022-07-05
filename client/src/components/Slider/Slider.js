import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import {image} from '../../Utils/image';
import "./Slider.css"

class ImageCarousel extends React.Component{
    render() {
        let settings = {
            autoPlay:true,
            infiniteLoop:true,
            showThumbs:false,
            width:"100%"
        }
        return(
            <div>
                <div>
            <Carousel {...settings}>
                {image.map(img => (
            <div key={img.id} className="d-flex justify-content-around align-items-center carousel-container bg-light">
                <div className="image">
            <img src={img.img} /></div>
            <div className="item">
            <h1 className="mb-3 title">{img.title}</h1>
            <p className="description">{img.description}</p>
            <button type="button" className=" btn shop-button text-white">Shop Now</button>
                </div>
                </div>
                ))}
            </Carousel>
                </div>
            </div>
        )
    }

}

export default ImageCarousel

// const Containers = styled.div`
//     background: black;
//     width: 90%;
// `
// const MainContainer = styled.div`
//   display: flex;
//  align-items: center;
//  justify-content: center;
//   padding-top: 80px;
//   background: black;
//   width: 100%;
//   padding-bottom: 50px;
// `
// const ItemContainer = styled.div`
//     background: black;
//     padding: 50px;
//     display: flex;
//   align-items: center;
// justify-content: center;
//   flex-direction: column;
//    h1{
//      font-size: 43px;
//      color: white;
//      font-weight: 500;
//    }
//   p{
//     font-size: 22px;
//     width: 50%;
//     color: white;
//     font-weight: 100;
//   }
//   @media screen and (max-width: 1145px){
//     h1{
//       font-size: 39px;
//       color: white;
//       font-weight: 500;
//       margin-bottom: 12px;
//     }
//     p{
//       font-size: 22px;
//       width: 80%;
//       color: white;
//       font-weight: 100;
//     }
//   }
  
//   @media screen and (max-width: 998px){
//     h1{
//       font-size: 33px;
//       color: white;
//       font-weight: 500;
//       margin-bottom: 12px;
//     }
//     p{
//       font-size: 19px;
//       width: 80%;
//       color: white;
//       font-weight: 100;
//     }
//   }
//   @media screen and (max-width: 768px){
//     background: black;
//     padding: 50px;
//     display: flex;
//     align-items: center;
//     justify-content: center;
//     flex-direction: column;
//     h1{
//       font-size: 30px;
//       color: white;
//       font-weight: 500;
//       margin-bottom: 10px;
//     }
//     p{
//       text-align: center;
//       font-size: 15px;
//       width: 90%;
//       color: white;
//       font-weight: 100;
//     }
//   }
// `