import mongoose from "mongoose"

const saleSchema = new mongoose.Schema(
    {
        userId: {
            type:String,
            required: true,
            unique:true
        }, 
        products: [
            {
                productId :{
                    type: String,

                },
                quantity:{
                    type: Number,
                    default: 1,
                }
            }
        ], 
        amount: {
            type: Number,
            required: true
        },
        address:{type: Object , required:true},
        status:{type: String, default: "pending"}
    },
     {timestamps: true}
)

const SaleDetail = mongoose.model("Sales", saleSchema)

export default SaleDetail
