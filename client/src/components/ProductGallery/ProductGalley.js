import React from "react"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"
import {image} from "../../Utils/image"
import "./ProductGallery.css"

// The number of columns change by resizing the window
class MyWrapper extends React.Component {
    render() {
        return (
            <ResponsiveMasonry
                columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}} >
                <Masonry>
                    {image.map(i=>(
                        <div className="img-cont"> 
                       <img src={i.img}/>
                       <div className="button-add d-flex justify-content-center aling-items-center">
                       <button className="mx-2 img-btn">A</button>
                       <button className="mx-2 img-btn">S</button>
                       <button className="mx-2 img-btn">L</button>
                       </div>
                        </div>
                    ))}
                </Masonry>
            </ResponsiveMasonry>
        )
    }
}
export default MyWrapper
