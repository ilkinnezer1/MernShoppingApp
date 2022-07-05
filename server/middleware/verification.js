import jwt from "jsonwebtoken"

// Token verification according to the header
const verificationOfToken = (req, res, next) => {
    const header = req.headers.token
    // const token = header.split(' ')[1]
    if(header){
        jwt.verify(token, process.env.SECRET_KEY, (err, user) => {
            if(err) res.status(403).json("Token is invalid!")
            req.user = user
            next()
        })
    }else{
        return res.status(401).json("You are not authenticated")
    }
}

// Verification for Authorization 

export const verificationOfTokenAndAuthorization = (req, res, next) => {
    verificationOfToken(req, res, () => {
        if(req.user.id === req.params.id || req.user.isAdmin){
            next()
        }else{
            res.status(403).json("You are not allowed to do this process.")
        }
    })
}
// Verification for admin and authorization
export const verificationForAdminAndAuth = (req, res, next) => {
    verificationOfToken(req, res, () => {
        if(req.user.isAdmin) {
            next()
        }else{
            res.status(403).json("You are not allowed to do this process.")
        }
    })
}
export default verificationOfToken