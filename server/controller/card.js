import CardDetail from "../models/Card.js"

export const createCard = async (req, res) => {
    const createNewCard = new CardDetail(req.body)
    try{
        const createdNewCard = await createNewCard.save()
        res.status(200).json(createdNewCard)
    }catch(err){
        res.status(500).json(err)
    }
}

export const updateCard = async (req, res) => {
    try{
        const updatedCard = await CardDetail.findByIdAndUpdate(req.params.id , { //Updating user and sending request to Mongo DB
            $set: req.body
        }, {new: true});
        res.status(200).json(updatedCard)

    }catch(error){
        res.status(500).json(error)
    }
}

export const deleteCard = async (req, res) => {
    try{
        await CardDetail.findByIdAndDelete(req.params.id);
        res.status(200).json("Your card succesfully deleted.")
    }catch(err){
        res.status(500).json(err)
    }
}

export const getSingleCard = async (req, res) => {
    try{
       const cardData = await CardDetail.findOne({userId: req.params.id})
       res.status(200).json(cardData)
    }catch(err){
        res.status(500).json(err)
    }
}

export const getAllCards = async (req, res) => {
    try{ 
        const singleCard = await CardDetail.find()
        res.status(200).json(singleCard)
    }catch(error){
        res.status(500).json(error)
    }
}