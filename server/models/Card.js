import mongoose from "mongoose"

const cardSchema = new mongoose.Schema(
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
    },
     {timestamps: true}
)

const CardDetail = mongoose.model("Cards", cardSchema)

export default CardDetail
