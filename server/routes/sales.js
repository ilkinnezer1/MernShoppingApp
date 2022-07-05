import express from "express"
import verificationOfToken, {verificationForAdminAndAuth, verificationOfTokenAndAuthorization} from "../middleware/verification.js"
import {
    createSalingOrder, 
    updateSalingOrder, 
    deleteSalingOrder, 
    getSingleSaleOrder, 
    getAllSalingOrder,
    profitOfSaling} from "../controller/sale.js"

const router = express.Router()

// CRUD - CREATE
router.post("/" ,verificationOfToken, createSalingOrder)
router.put("/:id", verificationForAdminAndAuth, updateSalingOrder)
router.delete("/:id", verificationForAdminAndAuth, deleteSalingOrder)
router.get("/get/:id", verificationOfTokenAndAuthorization, getSingleSaleOrder )
router.get("/", verificationForAdminAndAuth, getAllSalingOrder)
router.get("/profit", verificationForAdminAndAuth, profitOfSaling) 

export default router