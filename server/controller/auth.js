//REGISTRATION
import userDetail from "../models/User.js"
import CryptoJS from "crypto-js"
import jwt from "jsonwebtoken"


export const registration = async (req, res) => {
    const getNewUser = new userDetail({
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASS_SECRET).toString() // TAKING USERS INFO AND CRYPTED PASS
    })
    try{
        const savedUser =  await getNewUser.save() // SAVING DATABASE
        res.status(200).json(savedUser)
    }catch(err){
        res.status(500).json("Unexpected error while saving your data")
        console.log(err.message)
    }
   
}

export const login = async (req, res) => {
   try{
       
        const confirmedUser = await userDetail.findOne({username: req.body.username}) //Checking the existence of confirmed user 
        !confirmedUser && res.status(401).json("Username does not exist")
        const decryptedPassword = CryptoJS.AES.decrypt(confirmedUser.password, process.env.PASS_SECRET) // 

        const passwordToString = decryptedPassword.toString(CryptoJS.enc.Utf8) 

        passwordToString !== req.body.password && res.status(401).json("Invalid Credentials") // Checking the credentials

        const accessToken = jwt.sign({ //Authorization
            id:confirmedUser._id,
            isAdmin: confirmedUser.isAdmin}, process.env.SECRET_KEY , {expiresIn: "1d"})

        const {password, ...rest } = confirmedUser._doc
        res.status(200).json({...rest, accessToken})

   }catch(err){
        res.status(500).json("Oops, something occured")
        console.log(err.message)
   }
}

