import CryptoJS from "crypto-js"
import userDetail from "../models/User.js"


export const updateUser = async (req, res) => {
    if(req.body.password){
        req.bod.password = CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString()
    }
    try{
        const updatedUser = await userDetail.findByIdAndUpdate(req.params.id , { //Updating user and sending request to Mongo DB
            $set: req.body 
        }, {new: true});
        res.status(200).json(updatedUser)
    }catch(error){
        res.status(500).json(error)
    }
}

export const deleteUser = async (req, res) => {
    try{
        await userDetail.findByIdAndDelete(req.params.id);
        res.status(200).json("User succesfully deleted.")
    }catch(err){
        res.status(500).json(err)
    }
}

export const getUser = async (req, res) => {
    try{
       const confirmedUser = await userDetail.findById(req.params.id)
       const {password, ...rest } = confirmedUser._doc 
       res.status(200).json(rest)
    }catch(err){
        res.status(500).json(err)
    }
}
export const getAllUser = async (req, res) => {
    const requestedQuery = req.query.new 
    try{
        const allUsers = requestedQuery ? 
        await userDetail.find()
        .sort({_id: -1}) //Selecting the last 7 users
        .limit(7)  : await userDetail.find()
        res.status(200).json(allUsers)
    } catch(err){
        res.status(500).json(err)
    }
}
export const currentUserStatus = async (req, res) => {
    const currentDate = new Date();
    const lsYear = new Date(currentDate.setFullYear(currentDate.getFullYear() - 1))

    try{
        // Mongo DB AGGREGATE METHOD TO GET USER STATISTICS
        const userStatisticsData = await userDetail.aggregate([
            {
                $match: {createdAt: {$gte: lsYear}}, // Matching data that is greater than last year
            },
            {
                $project: {
                    month: { $month : "$createdAt"} 
                }
            },
            {
                $group: {
                    _id: "$month", 
                    total: {$sum : 1}
                }
            }   
        ])
        res.status(200).json(userStatisticsData)
    }catch(err){
        res.status(500).json(err)
    }
}