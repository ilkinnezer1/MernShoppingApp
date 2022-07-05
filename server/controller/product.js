import ProductDetail from "../models/Product.js"

export const createProduct = async (req, res) => {
    const createNewProduct = new ProductDetail(req.body)
    try{
        const createdNewProduct = await createNewProduct.save()
        res.status(200).json(createdNewProduct)
    }catch(err){
        res.status(500).json(err)
    }
}

export const updateProduct = async (req, res) => {
    try{
        const updatedProduct = await ProductDetail.findByIdAndUpdate(req.params.id , { //Updating user and sending request to Mongo DB
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedProduct)

    }catch(error){
        res.status(500).json(error)
    }
}

export const deleteProduct = async (req, res) => {
    try{
        await ProductDetail.findByIdAndDelete(req.params.id);
        res.status(200).json("Product succesfully deleted.")
    }catch(err){
        res.status(500).json(err)
    }
}

export const getProduct = async (req, res) => {
    try{
       const productData = await ProductDetail.findById(req.params.id)
       res.status(200).json(productData)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getAllProducts = async (req, res) => {
    const newQuery = req.query.new 
    const categoryQuery = req.query.category

    try{
        let listOfProducts;
        if(newQuery){
            listOfProducts = await ProductDetail.find().sort({createdAt: -1}).limit(7)
        }else if(categoryQuery){
            listOfProducts = await ProductDetail.find({categories: {
                $in: [categoryQuery]
            }})
        }else{
            listOfProducts = await ProductDetail.find()
        }

        res.status(200).json(listOfProducts)
    }catch(err){
        res.status(500).json(err)
    }
}