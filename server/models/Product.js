import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
    {
        title: {
            type:String,
            required: true,
            unique:true
        }, 
        description: {
            type:String,
            required: true,
        }, 
        image: {
            type:String,
            required: true,
        }, 
        size: {
            type:String,
            required: true,
        }, 
        categories: {
            type: Array,
        },
        price: {
            type: Number,
            required: true,
        }, 
        color: {
            type:String,
        },  
    },
     {timestamps: true}
)

const ProductDetail = mongoose.model("Products", productSchema)

export default ProductDetail
