import express from "express"
import verificationOfToken, {verificationForAdminAndAuth, verificationOfTokenAndAuthorization} from "../middleware/verification.js"
import {
    createCard, 
    updateCard, 
    deleteCard, 
    getSingleCard, 
    getAllCards,} from "../controller/card.js"

const router = express.Router()

router.get("/get/:id", verificationOfTokenAndAuthorization, getSingleCard)
router.get("/", verificationForAdminAndAuth, getAllCards)
router.post("/" ,verificationOfToken, createCard)
router.put("/:id", verificationOfTokenAndAuthorization, updateCard)
router.delete("/:id", verificationOfTokenAndAuthorization, deleteCard)

export default router