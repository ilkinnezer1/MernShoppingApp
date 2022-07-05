import express from "express"
import dotenv from "dotenv"
import mongoose from "mongoose"
import postRegister from "./routes/auth.js"
import postUser from "./routes/user.js"
import postProduct from "./routes/product.js"
import postCards from "./routes/cards.js"
import postSales from "./routes/sales.js"

const app = express()
app.use(express.json())
dotenv.config({path: "config/.env"})


app.use("/api/auth", postRegister)
app.use("/api/users", postUser)
app.use("/api/products", postProduct)
app.use("/api/cards", postCards)
app.use("/api/sales", postSales)


const PORT = process.env.PORT || 5000
mongoose.connect(process.env.MONGO_CONNECTION_URL, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(()=> console.log("Mongo DB is connected."))
    .then(() => app.listen(process.env.PORT, () => {
        console.log(`Server is running on port: ${PORT}`)
})).catch(error => console.log(error.message))


